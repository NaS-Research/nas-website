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

export const pharmacyCumulativeReview = [
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
