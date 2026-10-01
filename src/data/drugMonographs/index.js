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
import { gabapentin } from "./gabapentin.js";
import { sertraline } from "./sertraline.js";
import { escitalopram } from "./escitalopram.js";
import { semaglutide } from "./semaglutide.js";
import { amphetamineDextroamphetamine } from "./amphetamine-dextroamphetamine.js";
import { pantoprazole } from "./pantoprazole.js";
import { bupropion } from "./bupropion.js";
import { hydrochlorothiazide } from "./hydrochlorothiazide.js";
import { fluoxetine } from "./fluoxetine.js";
import { trazodone } from "./trazodone.js";
import { montelukast } from "./montelukast.js";
import { amoxicillin } from "./amoxicillin.js";
import { fluticasone } from "./fluticasone.js";
import { tamsulosin } from "./tamsulosin.js";
import { apixaban } from "./apixaban.js";
import { simvastatin } from "./simvastatin.js";
import { insulinGlargine } from "./insulin-glargine.js";
import { empagliflozin } from "./empagliflozin.js";
import { furosemide } from "./furosemide.js";
import { meloxicam } from "./meloxicam.js";
import { hydrocodoneAndAcetaminophen } from "./hydrocodone-acetaminophen.js";
import { tirzepatide } from "./tirzepatide.js";
import { methylphenidate } from "./methylphenidate.js";
import { duloxetine } from "./duloxetine.js";
import { prednisone } from "./prednisone.js";
import { carvedilol } from "./carvedilol.js";
import { famotidine } from "./famotidine.js";
import { ibuprofen } from "./ibuprofen.js";
import { buspirone } from "./buspirone.js";
import { venlafaxine } from "./venlafaxine.js";
import { tramadol } from "./tramadol.js";
import { potassiumChloride } from "./potassium-chloride.js";
import { hydroxyzine } from "./hydroxyzine.js";
import { allopurinol } from "./allopurinol.js";
import { clopidogrel } from "./clopidogrel.js";
import { ergocalciferol } from "./ergocalciferol.js";
import { cetirizine } from "./cetirizine.js";
import { ondansetron } from "./ondansetron.js";
import { cyclobenzaprine } from "./cyclobenzaprine.js";
import { spironolactone } from "./spironolactone.js";
import { oxycodone } from "./oxycodone.js";
import { estradiol } from "./estradiol.js";
import { aspirin } from "./aspirin.js";
import { glipizide } from "./glipizide.js";
import { zolpidem } from "./zolpidem.js";
import { lamotrigine } from "./lamotrigine.js";
import { alprazolam } from "./alprazolam.js";
import { citalopram } from "./citalopram.js";
import { pregabalin } from "./pregabalin.js";
import { cholecalciferol } from "./cholecalciferol.js";
import { clonazepam } from "./clonazepam.js";
import { azithromycin } from "./azithromycin.js";
import { pravastatin } from "./pravastatin.js";
import { valsartan } from "./valsartan.js";
import { ezetimibe } from "./ezetimibe.js";
import { diclofenac } from "./diclofenac.js";
import { insulinLispro } from "./insulin-lispro.js";
import { ethinylEstradiolNorethindrone } from "./ethinyl-estradiol-norethindrone.js";
import { propranolol } from "./propranolol.js";
import { latanoprost } from "./latanoprost.js";
import { atenolol } from "./atenolol.js";
import { lisdexamfetamine } from "./lisdexamfetamine.js";
import { doxycycline } from "./doxycycline.js";
import { amoxicillinClavulanate } from "./amoxicillin-clavulanate.js";
import { dulaglutide } from "./dulaglutide.js";
import { hydrochlorothiazideLisinopril } from "./hydrochlorothiazide-lisinopril.js";
import { lorazepam } from "./lorazepam.js";
import { fluticasoneSalmeterol } from "./fluticasone-salmeterol.js";
import { insulin_aspart } from "./insulin-aspart.js";
import { celecoxib } from "./celecoxib.js";
import { finasteride } from "./finasteride.js";
import { quetiapine } from "./quetiapine.js";
import { clonidine } from "./clonidine.js";
import { aripiprazole } from "./aripiprazole.js";
import { cephalexin } from "./cephalexin.js";
import { alendronate } from "./alendronate.js";
import { topiramate } from "./topiramate.js";
import { tizanidine } from "./tizanidine.js";
import { dapagliflozin } from "./dapagliflozin.js";
import { oxycodone_acetaminophen } from "./oxycodone-acetaminophen.js";
import { hydrochlorothiazideLosartan } from "./hydrochlorothiazide-losartan.js";
import { olmesartan } from "./olmesartan.js";
import { testosterone } from "./testosterone.js";
import { amitriptyline } from "./amitriptyline.js";
import { folicAcid } from "./folic-acid.js";
import { rivaroxaban } from "./rivaroxaban.js";
import { fenofibrate } from "./fenofibrate.js";
import { triamcinolone } from "./triamcinolone.js";
import { paroxetine } from "./paroxetine.js";
import { ferrous_sulfate } from "./ferrous-sulfate.js";

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
  "gabapentin": gabapentin,
  "sertraline": sertraline,
  "escitalopram": escitalopram,
  "semaglutide": semaglutide,
  "amphetamine-dextroamphetamine": amphetamineDextroamphetamine,
  "pantoprazole": pantoprazole,
  "bupropion": bupropion,
  "hydrochlorothiazide": hydrochlorothiazide,
  "fluoxetine": fluoxetine,
  "trazodone": trazodone,
  "montelukast": montelukast,
  "amoxicillin": amoxicillin,
  "fluticasone": fluticasone,
  "tamsulosin": tamsulosin,
  "apixaban": apixaban,
  "simvastatin": simvastatin,
  "insulin-glargine": insulinGlargine,
  "empagliflozin": empagliflozin,
  "furosemide": furosemide,
  "meloxicam": meloxicam,
  "hydrocodone-acetaminophen": hydrocodoneAndAcetaminophen,
  "tirzepatide": tirzepatide,
  "methylphenidate": methylphenidate,
  "duloxetine": duloxetine,
  "prednisone": prednisone,
  "carvedilol": carvedilol,
  "famotidine": famotidine,
  "ibuprofen": ibuprofen,
  "buspirone": buspirone,
  "venlafaxine": venlafaxine,
  "tramadol": tramadol,
  "potassium-chloride": potassiumChloride,
  "hydroxyzine": hydroxyzine,
  "allopurinol": allopurinol,
  "clopidogrel": clopidogrel,
  "ergocalciferol": ergocalciferol,
  "cetirizine": cetirizine,
  "ondansetron": ondansetron,
  "cyclobenzaprine": cyclobenzaprine,
  "spironolactone": spironolactone,
  "oxycodone": oxycodone,
  "estradiol": estradiol,
  "aspirin": aspirin,
  "glipizide": glipizide,
  "zolpidem": zolpidem,
  "lamotrigine": lamotrigine,
  "alprazolam": alprazolam,
  "citalopram": citalopram,
  "pregabalin": pregabalin,
  "cholecalciferol": cholecalciferol,
  "clonazepam": clonazepam,
  "azithromycin": azithromycin,
  "pravastatin": pravastatin,
  "valsartan": valsartan,
  "ezetimibe": ezetimibe,
  "diclofenac": diclofenac,
  "insulin-lispro": insulinLispro,
  "ethinyl-estradiol-norethindrone": ethinylEstradiolNorethindrone,
  "propranolol": propranolol,
  "latanoprost": latanoprost,
  "atenolol": atenolol,
  "lisdexamfetamine": lisdexamfetamine,
  "doxycycline": doxycycline,
  "amoxicillin-clavulanate": amoxicillinClavulanate,
  "dulaglutide": dulaglutide,
  "hydrochlorothiazide-lisinopril": hydrochlorothiazideLisinopril,
  "lorazepam": lorazepam,
  "fluticasone-salmeterol": fluticasoneSalmeterol,
  "insulin-aspart": insulin_aspart,
  "celecoxib": celecoxib,
  "finasteride": finasteride,
  "quetiapine": quetiapine,
  "clonidine": clonidine,
  "aripiprazole": aripiprazole,
  "cephalexin": cephalexin,
  "alendronate": alendronate,
  "topiramate": topiramate,
  "tizanidine": tizanidine,
  "dapagliflozin": dapagliflozin,
  "oxycodone-acetaminophen": oxycodone_acetaminophen,
  "hydrochlorothiazide-losartan": hydrochlorothiazideLosartan,
  "olmesartan": olmesartan,
  "testosterone": testosterone,
  "amitriptyline": amitriptyline,
  "folic-acid": folicAcid,
  "rivaroxaban": rivaroxaban,
  "fenofibrate": fenofibrate,
  "triamcinolone": triamcinolone,
  "paroxetine": paroxetine,
  "ferrous-sulfate": ferrous_sulfate,
};
