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
const moduleSummaries = [];

for (const module of auditedModules) {
  const questions = Array.isArray(module.questionBank) ? module.questionBank : [];
  const lessons = Array.isArray(module.submodules) ? module.submodules : [];
  const lessonSlugs = new Set(lessons.map((lesson) => lesson.slug));
  const ids = new Set();
  const prompts = new Set();

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
  thinLessons,
  weakestModules: moduleSummaries.slice(0, 25),
}, null, 2));

if (hardErrors.length) process.exitCode = 1;
