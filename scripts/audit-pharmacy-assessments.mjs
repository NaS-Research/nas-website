import { pharmacyModules } from "../src/data/pharmacyModules.js";

const moduleFlagIndex = process.argv.indexOf("--module");
const requestedModule = moduleFlagIndex >= 0 ? process.argv[moduleFlagIndex + 1] : null;
const auditedModules = requestedModule
  ? pharmacyModules.filter((module) => module.slug === requestedModule)
  : pharmacyModules;

if (requestedModule && !auditedModules.length) {
  console.error(`Unknown pharmacy module: ${requestedModule}`);
  process.exit(1);
}

const hardErrors = [];
const thinLessons = [];
const sourceGaps = [];
const moduleSummaries = [];
const moduleSlugs = new Set();
const moduleNumbers = new Set();
const prohibitedDash = /[—–]/;

function requireText(value, path) {
  if (typeof value !== "string" || !value.trim()) {
    hardErrors.push(`${path}: expected non-empty text`);
    return;
  }
  if (prohibitedDash.test(value)) hardErrors.push(`${path}: contains a prohibited em or en dash`);
}

function requireTextList(value, path, minimum = 1) {
  if (!Array.isArray(value) || value.length < minimum) {
    hardErrors.push(`${path}: expected at least ${minimum} text item${minimum === 1 ? "" : "s"}`);
    return;
  }
  value.forEach((item, index) => requireText(item, `${path}[${index}]`));
}

for (const module of auditedModules) {
  const questions = Array.isArray(module.questionBank) ? module.questionBank : [];
  const lessons = Array.isArray(module.submodules) ? module.submodules : [];
  const lessonSlugs = new Set(lessons.map((lesson) => lesson.slug));
  const ids = new Set();
  const prompts = new Set();

  requireText(module.slug, `${module.slug || "unknown-module"}: slug`);
  requireText(module.number, `${module.slug}: number`);
  requireText(module.title, `${module.slug}: title`);
  requireText(module.area, `${module.slug}: curriculum area`);
  requireText(module.source, `${module.slug}: source synthesis statement`);
  requireText(module.description, `${module.slug}: description`);
  if (module.disclaimer !== undefined) requireText(module.disclaimer, `${module.slug}: educational disclaimer`);
  requireTextList(module.topics, `${module.slug}: topics`, 3);
  requireTextList(module.outcomes, `${module.slug}: learning outcomes`, 3);

  if (moduleSlugs.has(module.slug)) hardErrors.push(`${module.slug}: duplicate module slug`);
  else moduleSlugs.add(module.slug);
  if (moduleNumbers.has(module.number)) hardErrors.push(`${module.slug}: duplicate module number ${module.number}`);
  else moduleNumbers.add(module.number);

  if (module.disclaimer && !/(?:not (?:patient[- ]specific )?medical advice|does not replace|patient[- ]specific (?:care|evidence|treatment))/i.test(module.disclaimer)) {
    hardErrors.push(`${module.slug}: disclaimer does not identify content as non-patient-specific medical advice`);
  }

  if (!Array.isArray(module.references) || module.references.length === 0) {
    sourceGaps.push(`${module.slug}: module has no module-level authoritative references`);
  } else {
    module.references.forEach((reference, index) => {
      requireText(reference?.label, `${module.slug}: reference[${index}] label`);
      if (typeof reference?.href !== "string" || !(/^(https:\/\/|\/learn\/)/i.test(reference.href))) {
        hardErrors.push(`${module.slug}: reference[${index}] must use an HTTPS or internal learning URL`);
      }
    });
  }

  if (questions.length < 100) {
    hardErrors.push(`${module.slug}: assessment contains ${questions.length} questions`);
  }

  if (!lessons.length) {
    hardErrors.push(`${module.slug}: module contains no lessons`);
  }

  for (const lesson of lessons) {
    if (!lesson.slug) hardErrors.push(`${module.slug}: lesson is missing a slug`);
    if (!lesson.visual) hardErrors.push(`${module.slug}#${lesson.slug}: lesson is missing a visual identifier`);
    if (!lesson.check) hardErrors.push(`${module.slug}#${lesson.slug}: lesson is missing an embedded check`);
    requireText(lesson.title, `${module.slug}#${lesson.slug}: title`);
    requireText(lesson.summary, `${module.slug}#${lesson.slug}: summary`);
    requireText(lesson.application, `${module.slug}#${lesson.slug}: clinical application`);
    requireTextList(lesson.concepts, `${module.slug}#${lesson.slug}: concepts`, 2);
    requireTextList(lesson.keyPoints, `${module.slug}#${lesson.slug}: decision points`, 2);

    if (!Array.isArray(lesson.lesson) || lesson.lesson.length < 2) {
      hardErrors.push(`${module.slug}#${lesson.slug}: expected at least two teaching sections`);
    } else {
      lesson.lesson.forEach((section, index) => {
        requireText(section?.heading, `${module.slug}#${lesson.slug}: teaching section[${index}] heading`);
        requireText(section?.body, `${module.slug}#${lesson.slug}: teaching section[${index}] body`);
      });
    }

    if (lesson.check) {
      requireText(lesson.check.question ?? lesson.check.prompt, `${module.slug}#${lesson.slug}: embedded-check prompt`);
      requireTextList(lesson.check.choices, `${module.slug}#${lesson.slug}: embedded-check choices`, 4);
      requireText(lesson.check.rationale ?? lesson.check.explanation, `${module.slug}#${lesson.slug}: embedded-check explanation`);
      if (!Number.isInteger(lesson.check.answer) || lesson.check.answer < 0 || lesson.check.answer >= lesson.check.choices?.length) {
        hardErrors.push(`${module.slug}#${lesson.slug}: embedded-check answer index is invalid`);
      }
    }
  }

  for (const question of questions) {
    const prefix = `${module.slug}:${question.id ?? "missing-id"}`;

    if (!question.id) hardErrors.push(`${module.slug}: question is missing an id`);
    else if (ids.has(question.id)) hardErrors.push(`${prefix}: duplicate id`);
    else ids.add(question.id);

    const prompt = question.question ?? question.prompt;
    if (!prompt) hardErrors.push(`${prefix}: question prompt is missing`);
    else if (prompts.has(prompt)) hardErrors.push(`${prefix}: duplicate prompt`);
    else prompts.add(prompt);

    if (!Array.isArray(question.choices) || question.choices.length !== 4) {
      hardErrors.push(`${prefix}: expected four choices`);
    } else if (new Set(question.choices).size !== 4) {
      hardErrors.push(`${prefix}: choices are not distinct`);
    }

    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= question.choices?.length) {
      hardErrors.push(`${prefix}: answer index is invalid`);
    }

    requireText(question.explanation ?? question.rationale, `${prefix}: explanation`);
    if (question.case !== undefined) requireText(question.case, `${prefix}: case`);

    const reviewSlug = question.reviewHref?.startsWith("#") ? question.reviewHref.slice(1) : "";
    if (!lessonSlugs.has(reviewSlug)) {
      hardErrors.push(`${prefix}: invalid review link ${question.reviewHref ?? "missing"}`);
    }
  }

  const coverage = Object.fromEntries(
    lessons.map((lesson) => [lesson.slug, questions.filter((question) => question.reviewHref === `#${lesson.slug}`).length]),
  );

  for (const [lesson, count] of Object.entries(coverage)) {
    if (count === 0) hardErrors.push(`${module.slug}#${lesson}: lesson has no assessment coverage`);
    else if (count < 8) thinLessons.push({ module: module.slug, lesson, count });
  }

  moduleSummaries.push({
    module: module.slug,
    lessons: lessons.length,
    questions: questions.length,
    minimumLessonCoverage: lessons.length ? Math.min(...Object.values(coverage)) : 0,
  });
}

thinLessons.sort((left, right) => left.count - right.count || left.module.localeCompare(right.module));
moduleSummaries.sort((left, right) => left.minimumLessonCoverage - right.minimumLessonCoverage || left.module.localeCompare(right.module));

console.log(JSON.stringify({
  modules: auditedModules.length,
  questions: moduleSummaries.reduce((total, module) => total + module.questions, 0),
  hardErrors,
  sourceGaps,
  thinLessons,
  weakestModules: moduleSummaries.slice(0, 25),
}, null, 2));

if (hardErrors.length) process.exitCode = 1;
