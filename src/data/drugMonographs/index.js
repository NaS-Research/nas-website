// Clinical source audits passed; rendered QA and release remain separate gates.
import { atorvastatin } from "./atorvastatin.js";
import { levothyroxine } from "./levothyroxine.js";
import { metformin } from "./metformin.js";
import { amlodipine } from "./amlodipine.js";
import { lisinopril } from "./lisinopril.js";
import { albuterol } from "./albuterol.js";
import { losartan } from "./losartan.js";
import { metoprolol } from "./metoprolol.js";
import { rosuvastatin } from "./rosuvastatin.js";
import { omeprazole } from "./omeprazole.js";

export const reviewedDrugMonographs = {
  "atorvastatin": atorvastatin,
  "levothyroxine": levothyroxine,
  "metformin": metformin,
  "amlodipine": amlodipine,
  "lisinopril": lisinopril,
  "albuterol": albuterol,
  "losartan": losartan,
  "metoprolol": metoprolol,
  "rosuvastatin": rosuvastatin,
  "omeprazole": omeprazole,
};
