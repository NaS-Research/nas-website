import { pharmacyCumulativeSelectionIds } from "@/data/pharmacyCumulativeSelection";
import { pharmacyModules } from "@/data/pharmacyModules";
import { pharmacyFinalReview } from "@/data/pharmacyReview";

const questionsPerModule = 5;

function selectAcrossBank(questionBank = [], questionIds) {
  if (questionIds) {
    return questionIds.map((id) => {
      const question = questionBank.find((item) => item.id === id);
      if (!question) throw new Error(`Missing cumulative-review question: ${id}`);
      return question;
    });
  }

  if (questionBank.length <= questionsPerModule) return questionBank;

  return Array.from({ length: questionsPerModule }, (_, index) => {
    const position = Math.round((index * (questionBank.length - 1)) / (questionsPerModule - 1));
    return questionBank[position];
  });
}

export const pharmacyCumulativeReviewPool = [
  ...pharmacyFinalReview,
  ...pharmacyModules.flatMap((module) =>
    selectAcrossBank(module.questionBank, module.cumulativeQuestionIds).map((question) => ({
      ...question,
      id: `cumulative-${module.slug}-${question.id}`,
      module: module.title,
      reviewHref: `/learn/pharmacy/modules/${module.slug}`,
    })),
  ),
];

const cumulativeById = new Map(pharmacyCumulativeReviewPool.map((question) => [question.id, question]));
if (cumulativeById.size !== pharmacyCumulativeReviewPool.length) throw new Error("Duplicate cumulative-review question ID");
if (pharmacyCumulativeSelectionIds.length !== 50 || new Set(pharmacyCumulativeSelectionIds).size !== 50) throw new Error("Cumulative review requires 50 unique selected questions");

export const pharmacyCumulativeReview = pharmacyCumulativeSelectionIds.map((id) => {
  const question = cumulativeById.get(id);
  if (!question) throw new Error(`Missing selected cumulative-review question: ${id}`);
  return question;
});
