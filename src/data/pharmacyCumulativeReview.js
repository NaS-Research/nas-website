import { pharmacyCumulativeSelectionIds } from "@/data/pharmacyCumulativeSelection";
import { pharmacyModules } from "@/data/pharmacyModules";
import { pharmacyFinalReview } from "@/data/pharmacyReview";

const questionsPerModule = 5;

function selectAcrossBank(questionBank = []) {
  if (questionBank.length <= questionsPerModule) return questionBank;

  return Array.from({ length: questionsPerModule }, (_, index) => {
    const position = Math.round((index * (questionBank.length - 1)) / (questionsPerModule - 1));
    return questionBank[position];
  });
}

export const pharmacyCumulativeReviewPool = [
  ...pharmacyFinalReview,
  ...pharmacyModules.flatMap((module) =>
    selectAcrossBank(module.questionBank).map((question) => ({
      ...question,
      id: `cumulative-${module.slug}-${question.id}`,
      module: module.title,
      reviewHref: `/learn/pharmacy/modules/${module.slug}`,
    })),
  ),
];

const moduleQuestions = pharmacyModules.flatMap((module) => (module.questionBank || []).map((question) => ({
  ...question, id: `cumulative-${module.slug}-${question.id}`, module: module.title,
  reviewHref: `/learn/pharmacy/modules/${module.slug}`,
})));
const selectedById = new Map(moduleQuestions.map((question) => [question.id, question]));
if (selectedById.size !== moduleQuestions.length) throw new Error("Duplicate module question ID in cumulative review");
if (pharmacyCumulativeSelectionIds.length !== 30 || new Set(pharmacyCumulativeSelectionIds).size !== 30) throw new Error("Cumulative review requires 30 unique selected questions");
export const pharmacyCumulativeReview = pharmacyCumulativeSelectionIds.map((id) => {
  const question = selectedById.get(id);
  if (!question) throw new Error(`Missing selected cumulative-review question: ${id}`);
  return question;
});
