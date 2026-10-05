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

export const pharmacyCumulativeReview = [
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
