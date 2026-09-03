import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PharmacyAssessment from "@/components/learn/PharmacyAssessment";
import FluidElectrolyteVisual from "@/components/learn/FluidElectrolyteVisual";
import NutritionScreeningAssessmentVisual, { nutritionScreeningAssessmentVisualTypes } from "@/components/learn/NutritionScreeningAssessmentVisual";
import AcidBaseVisual from "@/components/learn/AcidBaseVisual";
import CalciumPhosphorusVisual from "@/components/learn/CalciumPhosphorusVisual";
import EnteralNutritionVisual from "@/components/learn/EnteralNutritionVisual";
import ParenteralNutritionVisual from "@/components/learn/ParenteralNutritionVisual";
import ParenteralNutritionCalculationVisual from "@/components/learn/ParenteralNutritionCalculationVisual";
import PediatricParenteralNutritionVisual from "@/components/learn/PediatricParenteralNutritionVisual";
import AutonomicNervousSystemVisual from "@/components/learn/AutonomicNervousSystemVisual";
import CholinergicAgonistsVisual from "@/components/learn/CholinergicAgonistsVisual";
import AntimuscarinicVisual from "@/components/learn/AntimuscarinicVisual";
import CholinergicMedicinalChemistryVisual from "@/components/learn/CholinergicMedicinalChemistryVisual";
import AnticholinergicMedicinalChemistryVisual from "@/components/learn/AnticholinergicMedicinalChemistryVisual";
import CholinergicToxicologyVisual from "@/components/learn/CholinergicToxicologyVisual";
import AdrenergicAgonistsVisual from "@/components/learn/AdrenergicAgonistsVisual";
import AdrenergicAntagonistsVisual from "@/components/learn/AdrenergicAntagonistsVisual";
import AdrenergicMedicinalChemistryVisual from "@/components/learn/AdrenergicMedicinalChemistryVisual";
import DiureticPharmacologyVisual from "@/components/learn/DiureticPharmacologyVisual";
import DiureticMedicinalChemistryVisual from "@/components/learn/DiureticMedicinalChemistryVisual";
import GlaucomaPharmacotherapyVisual from "@/components/learn/GlaucomaPharmacotherapyVisual";
import HypertensionFoundationsVisual from "@/components/learn/HypertensionFoundationsVisual";
import ResistantSecondaryHypertensionVisual from "@/components/learn/ResistantSecondaryHypertensionVisual";
import HypertensiveEmergenciesVisual from "@/components/learn/HypertensiveEmergenciesVisual";
import AntihypertensiveMedicinalChemistryVisual from "@/components/learn/AntihypertensiveMedicinalChemistryVisual";
import DyslipidemiaRiskVisual from "@/components/learn/DyslipidemiaRiskVisual";
import LipidLoweringPharmacologyVisual from "@/components/learn/LipidLoweringPharmacologyVisual";
import DyslipidemiaTherapeuticsVisual from "@/components/learn/DyslipidemiaTherapeuticsVisual";
import ChronicCoronaryDiseaseVisual from "@/components/learn/ChronicCoronaryDiseaseVisual";
import AcuteCoronarySyndromesVisual from "@/components/learn/AcuteCoronarySyndromesVisual";
import AntiplateletPharmacologyVisual from "@/components/learn/AntiplateletPharmacologyVisual";
import CoagulationAnticoagulantVisual from "@/components/learn/CoagulationAnticoagulantVisual";
import VenousThromboembolismVisual from "@/components/learn/VenousThromboembolismVisual";
import WarfarinManagementVisual from "@/components/learn/WarfarinManagementVisual";
import DirectOralAnticoagulantsVisual from "@/components/learn/DirectOralAnticoagulantsVisual";
import ParenteralAnticoagulantsVisual from "@/components/learn/ParenteralAnticoagulantsVisual";
import EcgInterpretationVisual from "@/components/learn/EcgInterpretationVisual";
import ArrhythmiaPathophysiologyVisual from "@/components/learn/ArrhythmiaPathophysiologyVisual";
import AtrialArrhythmiasVisual from "@/components/learn/AtrialArrhythmiasVisual";
import VentricularArrhythmiasVisual from "@/components/learn/VentricularArrhythmiasVisual";
import AntiarrhythmicPharmacologyVisual from "@/components/learn/AntiarrhythmicPharmacologyVisual";
import HeartFailurePathophysiologyVisual from "@/components/learn/HeartFailurePathophysiologyVisual";
import ChronicHeartFailureVisual from "@/components/learn/ChronicHeartFailureVisual";
import AcuteDecompensatedHeartFailureVisual from "@/components/learn/AcuteDecompensatedHeartFailureVisual";
import HeartFailureMedicinalChemistryVisual from "@/components/learn/HeartFailureMedicinalChemistryVisual";
import PeripheralArterialDiseaseVisual from "@/components/learn/PeripheralArterialDiseaseVisual";
import AcuteIschemicStrokeVisual from "@/components/learn/AcuteIschemicStrokeVisual";
import SecondaryStrokePreventionVisual from "@/components/learn/SecondaryStrokePreventionVisual";
import AcuteKidneyInjuryVisual from "@/components/learn/AcuteKidneyInjuryVisual";
import ChronicKidneyDiseaseVisual from "@/components/learn/ChronicKidneyDiseaseVisual";
import CkdComplicationsVisual from "@/components/learn/CkdComplicationsVisual";
import RenalReplacementTherapyVisual from "@/components/learn/RenalReplacementTherapyVisual";
import AllergicRhinitisVisual from "@/components/learn/AllergicRhinitisVisual";
import AsthmaVisual from "@/components/learn/AsthmaVisual";
import ChronicObstructivePulmonaryDiseaseVisual from "@/components/learn/ChronicObstructivePulmonaryDiseaseVisual";
import PulmonaryArterialHypertensionVisual from "@/components/learn/PulmonaryArterialHypertensionVisual";
import CysticFibrosisVisual from "@/components/learn/CysticFibrosisVisual";
import DrugInducedPulmonaryDiseaseVisual from "@/components/learn/DrugInducedPulmonaryDiseaseVisual";
import PituitaryPharmacologyVisual from "@/components/learn/PituitaryPharmacologyVisual";
import DiabetesPathophysiologyMonitoringVisual from "@/components/learn/DiabetesPathophysiologyMonitoringVisual";
import NoninsulinDiabetesPharmacotherapyVisual from "@/components/learn/NoninsulinDiabetesPharmacotherapyVisual";
import InsulinTherapyVisual from "@/components/learn/InsulinTherapyVisual";
import DiabeticKetoacidosisVisual from "@/components/learn/DiabeticKetoacidosisVisual";
import HyperosmolarHyperglycemicStateVisual from "@/components/learn/HyperosmolarHyperglycemicStateVisual";
import ThyroidDisordersVisual from "@/components/learn/ThyroidDisordersVisual";
import ThyroidMedicinalChemistryVisual from "@/components/learn/ThyroidMedicinalChemistryVisual";
import AdrenalPharmacologyVisual from "@/components/learn/AdrenalPharmacologyVisual";
import CushingSyndromeVisual from "@/components/learn/CushingSyndromeVisual";
import AdrenalInsufficiencyVisual from "@/components/learn/AdrenalInsufficiencyVisual";
import GonadalHormonePharmacologyVisual from "@/components/learn/GonadalHormonePharmacologyVisual";
import GynecologicDisordersVisual from "@/components/learn/GynecologicDisordersVisual";
import InfertilityOvulationInductionVisual from "@/components/learn/InfertilityOvulationInductionVisual";
import ContraceptivePharmacotherapyVisual from "@/components/learn/ContraceptivePharmacotherapyVisual";
import PregnancyLactationPharmacotherapyVisual from "@/components/learn/PregnancyLactationPharmacotherapyVisual";
import MenopausalHormoneTherapyVisual from "@/components/learn/MenopausalHormoneTherapyVisual";
import BenignProstaticHyperplasiaVisual from "@/components/learn/BenignProstaticHyperplasiaVisual";
import UrinaryIncontinenceVisual from "@/components/learn/UrinaryIncontinenceVisual";
import SexualDysfunctionVisual from "@/components/learn/SexualDysfunctionVisual";
import OsteoporosisVisual from "@/components/learn/OsteoporosisVisual";
import ShockVasoactiveVisual from "@/components/learn/ShockVasoactiveVisual";
import IcuAnalgesiaSedationVisual from "@/components/learn/IcuAnalgesiaSedationVisual";
import PerioperativeCriticalCareVisual from "@/components/learn/PerioperativeCriticalCareVisual";
import GastroesophagealRefluxDiseaseVisual from "@/components/learn/GastroesophagealRefluxDiseaseVisual";
import PepticUlcerDiseaseVisual from "@/components/learn/PepticUlcerDiseaseVisual";
import IrritableBowelSyndromeVisual from "@/components/learn/IrritableBowelSyndromeVisual";
import ChronicIdiopathicConstipationVisual from "@/components/learn/ChronicIdiopathicConstipationVisual";
import DiarrheaAssessmentVisual from "@/components/learn/DiarrheaAssessmentVisual";
import InflammatoryBowelDiseaseVisual from "@/components/learn/InflammatoryBowelDiseaseVisual";
import MotionSicknessVisual from "@/components/learn/MotionSicknessVisual";
import MedicationSafetyQualityVisual from "@/components/learn/MedicationSafetyQualityVisual";
import InfectionPreventionControlVisual from "@/components/learn/InfectionPreventionControlVisual";
import DrugAllergiesAdverseReactionsVisual from "@/components/learn/DrugAllergiesAdverseReactionsVisual";
import PharmacokineticsVisual from "@/components/learn/PharmacokineticsVisual";
import PharmacogenomicsVisual from "@/components/learn/PharmacogenomicsVisual";
import DietarySupplementsComplementaryMedicineVisual from "@/components/learn/DietarySupplementsComplementaryMedicineVisual";
import ClinicalDrugInteractionsVisual, { clinicalDrugInteractionsVisualTypes } from "@/components/learn/ClinicalDrugInteractionsVisual";
import ToxicologyAntidotesVisual from "@/components/learn/ToxicologyAntidotesVisual";
import TobaccoUseCessationVisual from "@/components/learn/TobaccoUseCessationVisual";
import SystemicGlucocorticoidsVisual from "@/components/learn/SystemicGlucocorticoidsVisual";
import RheumatoidArthritisVisual from "@/components/learn/RheumatoidArthritisVisual";
import SystemicLupusErythematosusVisual from "@/components/learn/SystemicLupusErythematosusVisual";
import MultipleSclerosisVisual from "@/components/learn/MultipleSclerosisVisual";
import RaynaudPhenomenonVisual from "@/components/learn/RaynaudPhenomenonVisual";
import CeliacDiseaseVisual from "@/components/learn/CeliacDiseaseVisual";
import MyastheniaGravisVisual, { myastheniaGravisVisualTypes } from "@/components/learn/MyastheniaGravisVisual";
import SjogrenDiseaseVisual, { sjogrenDiseaseVisualTypes } from "@/components/learn/SjogrenDiseaseVisual";
import PsoriasisVisual, { psoriasisVisualTypes } from "@/components/learn/PsoriasisVisual";
import GenitourinaryMedicinalChemistryVisual, { genitourinaryMedicinalChemistryVisualTypes } from "@/components/learn/GenitourinaryMedicinalChemistryVisual";
import VaginitisVulvovaginalVisual, { vaginitisVulvovaginalVisualTypes } from "@/components/learn/VaginitisVulvovaginalVisual";
import CervicitisPelvicInflammatoryDiseaseVisual, { cervicitisPelvicInflammatoryDiseaseVisualTypes } from "@/components/learn/CervicitisPelvicInflammatoryDiseaseVisual";
import GynecologicOncologyVisual, { gynecologicOncologyVisualTypes } from "@/components/learn/GynecologicOncologyVisual";
import PelvicOrganProlapseFistulaCareVisual, { pelvicOrganProlapseFistulaCareVisualTypes } from "@/components/learn/PelvicOrganProlapseFistulaCareVisual";
import GenderAffirmingHormoneCareVisual, { genderAffirmingHormoneCareVisualTypes } from "@/components/learn/GenderAffirmingHormoneCareVisual";
import ImmunoglobulinTherapyVisual, { immunoglobulinTherapyVisualTypes } from "@/components/learn/ImmunoglobulinTherapyVisual";
import AnemiaVisual, { anemiaVisualTypes } from "@/components/learn/AnemiaVisual";
import SickleCellDiseaseVisual, { sickleCellDiseaseVisualTypes } from "@/components/learn/SickleCellDiseaseVisual";
import CoughCommonColdVisual, { coughCommonColdVisualTypes } from "@/components/learn/CoughCommonColdVisual";
import CommonEyeConditionsVisual, { commonEyeConditionsVisualTypes } from "@/components/learn/CommonEyeConditionsVisual";
import CommonEarConditionsVisual, { commonEarConditionsVisualTypes } from "@/components/learn/CommonEarConditionsVisual";
import AcneVisual, { acneVisualTypes } from "@/components/learn/AcneVisual";
import AtopicDermatitisVisual, { atopicDermatitisVisualTypes } from "@/components/learn/AtopicDermatitisVisual";
import SuperficialFungalSkinInfectionsVisual, { superficialFungalSkinInfectionsVisualTypes } from "@/components/learn/SuperficialFungalSkinInfectionsVisual";
import LiceScabiesVisual, { liceScabiesVisualTypes } from "@/components/learn/LiceScabiesVisual";
import MinorWoundCareVisual, { minorWoundCareVisualTypes } from "@/components/learn/MinorWoundCareVisual";
import AnimalHumanBitesVisual, { animalHumanBitesVisualTypes } from "@/components/learn/AnimalHumanBitesVisual";
import BurnAssessmentInitialCareVisual, { burnAssessmentInitialCareVisualTypes } from "@/components/learn/BurnAssessmentInitialCareVisual";
import PoisonPlantDermatitisVisual, { poisonPlantDermatitisVisualTypes } from "@/components/learn/PoisonPlantDermatitisVisual";
import TopicalCorticosteroidVisual, { topicalCorticosteroidVisualTypes } from "@/components/learn/TopicalCorticosteroidVisual";
import SunscreenPhotoprotectionVisual, { sunscreenPhotoprotectionVisualTypes } from "@/components/learn/SunscreenPhotoprotectionVisual";
import HerpesLabialisVisual, { herpesLabialisVisualTypes } from "@/components/learn/HerpesLabialisVisual";
import SeborrheicDermatitisVisual, { seborrheicDermatitisVisualTypes } from "@/components/learn/SeborrheicDermatitisVisual";
import AlopeciaVisual, { alopeciaVisualTypes } from "@/components/learn/AlopeciaVisual";
import DiaperDermatitisVisual, { diaperDermatitisVisualTypes } from "@/components/learn/DiaperDermatitisVisual";
import HyperhidrosisVisual, { hyperhidrosisVisualTypes } from "@/components/learn/HyperhidrosisVisual";
import HemorrhoidsVisual, { hemorrhoidsVisualTypes } from "@/components/learn/HemorrhoidsVisual";
import PinwormInfectionVisual, { pinwormInfectionVisualTypes } from "@/components/learn/PinwormInfectionVisual";
import TravelHealthPlanningVisual, { travelHealthPlanningVisualTypes } from "@/components/learn/TravelHealthPlanningVisual";
import AntimicrobialFoundationsStewardshipVisual, { antimicrobialFoundationsStewardshipVisualTypes } from "@/components/learn/AntimicrobialFoundationsStewardshipVisual";
import BetaLactamPharmacologyVisual, { betaLactamPharmacologyVisualTypes } from "@/components/learn/BetaLactamPharmacologyVisual";
import AminoglycosidePharmacologyVisual, { aminoglycosidePharmacologyVisualTypes } from "@/components/learn/AminoglycosidePharmacologyVisual";
import FluoroquinolonePharmacologyVisual, { fluoroquinolonePharmacologyVisualTypes } from "@/components/learn/FluoroquinolonePharmacologyVisual";
import MacrolidePharmacologyVisual, { macrolidePharmacologyVisualTypes } from "@/components/learn/MacrolidePharmacologyVisual";
import TetracyclinePharmacologyVisual, { tetracyclinePharmacologyVisualTypes } from "@/components/learn/TetracyclinePharmacologyVisual";
import SulfonamideTrimethoprimPharmacologyVisual, { sulfonamideTrimethoprimPharmacologyVisualTypes } from "@/components/learn/SulfonamideTrimethoprimPharmacologyVisual";
import VancomycinPharmacologyVisual, { vancomycinPharmacologyVisualTypes } from "@/components/learn/VancomycinPharmacologyVisual";
import DaptomycinPharmacologyVisual, { daptomycinPharmacologyVisualTypes } from "@/components/learn/DaptomycinPharmacologyVisual";
import LinezolidTedizolidPharmacologyVisual, { linezolidTedizolidPharmacologyVisualTypes } from "@/components/learn/LinezolidTedizolidPharmacologyVisual";
import TigecyclinePharmacologyVisual, { tigecyclinePharmacologyVisualTypes } from "@/components/learn/TigecyclinePharmacologyVisual";
import PolymyxinPharmacologyVisual, { polymyxinPharmacologyVisualTypes } from "@/components/learn/PolymyxinPharmacologyVisual";
import ClindamycinPharmacologyVisual, { clindamycinPharmacologyVisualTypes } from "@/components/learn/ClindamycinPharmacologyVisual";
import NitroimidazolePharmacologyVisual, { nitroimidazolePharmacologyVisualTypes } from "@/components/learn/NitroimidazolePharmacologyVisual";
import LefamulinPharmacologyVisual, { lefamulinPharmacologyVisualTypes } from "@/components/learn/LefamulinPharmacologyVisual";
import FidaxomicinPharmacologyVisual, { fidaxomicinPharmacologyVisualTypes } from "@/components/learn/FidaxomicinPharmacologyVisual";
import RifaximinPharmacologyVisual, { rifaximinPharmacologyVisualTypes } from "@/components/learn/RifaximinPharmacologyVisual";
import FosfomycinPharmacologyVisual, { fosfomycinPharmacologyVisualTypes } from "@/components/learn/FosfomycinPharmacologyVisual";
import NitrofurantoinPharmacologyVisual, { nitrofurantoinPharmacologyVisualTypes } from "@/components/learn/NitrofurantoinPharmacologyVisual";
import MupirocinDecolonizationVisual, { mupirocinDecolonizationVisualTypes } from "@/components/learn/MupirocinDecolonizationVisual";
import PerioperativeAntimicrobialProphylaxisVisual, { perioperativeAntimicrobialProphylaxisVisualTypes } from "@/components/learn/PerioperativeAntimicrobialProphylaxisVisual";
import AcuteBacterialMeningitisVisual, { acuteBacterialMeningitisVisualTypes } from "@/components/learn/AcuteBacterialMeningitisVisual";
import AcuteOtitisMediaVisual, { acuteOtitisMediaVisualTypes } from "@/components/learn/AcuteOtitisMediaVisual";
import StreptococcalPharyngitisVisual, { streptococcalPharyngitisVisualTypes } from "@/components/learn/StreptococcalPharyngitisVisual";
import AcuteBacterialRhinosinusitisVisual, { acuteBacterialRhinosinusitisVisualTypes } from "@/components/learn/AcuteBacterialRhinosinusitisVisual";
import CommunityAcquiredPneumoniaAdultsVisual, { communityAcquiredPneumoniaAdultsVisualTypes } from "@/components/learn/CommunityAcquiredPneumoniaAdultsVisual";
import HospitalVentilatorAssociatedPneumoniaVisual, { hospitalVentilatorAssociatedPneumoniaVisualTypes } from "@/components/learn/HospitalVentilatorAssociatedPneumoniaVisual";
import TuberculosisVisual, { tuberculosisVisualTypes } from "@/components/learn/TuberculosisVisual";
import InfectiveEndocarditisVisual, { infectiveEndocarditisVisualTypes } from "@/components/learn/InfectiveEndocarditisVisual";
import IntraAbdominalInfectionsVisual, { intraAbdominalInfectionsVisualTypes } from "@/components/learn/IntraAbdominalInfectionsVisual";
import SkinSoftTissueInfectionsVisual, { skinSoftTissueInfectionsVisualTypes } from "@/components/learn/SkinSoftTissueInfectionsVisual";
import UrinaryTractInfectionsVisual, { urinaryTractInfectionsVisualTypes } from "@/components/learn/UrinaryTractInfectionsVisual";
import ClostridioidesDifficileInfectionVisual, { clostridioidesDifficileInfectionVisualTypes } from "@/components/learn/ClostridioidesDifficileInfectionVisual";
import TravelersDiarrheaVisual, { travelersDiarrheaVisualTypes } from "@/components/learn/TravelersDiarrheaVisual";
import SyphilisVisual, { syphilisVisualTypes } from "@/components/learn/SyphilisVisual";
import GonococcalInfectionsVisual, { gonococcalInfectionsVisualTypes } from "@/components/learn/GonococcalInfectionsVisual";
import ChlamydialInfectionsVisual, { chlamydialInfectionsVisualTypes } from "@/components/learn/ChlamydialInfectionsVisual";
import GenitalHerpesVisual, { genitalHerpesVisualTypes } from "@/components/learn/GenitalHerpesVisual";
import AnogenitalHpvWartsVisual, { anogenitalHpvWartsVisualTypes } from "@/components/learn/AnogenitalHpvWartsVisual";
import RickettsialEhrlichialAnaplasmaVisual, { rickettsialEhrlichialAnaplasmaVisualTypes } from "@/components/learn/RickettsialEhrlichialAnaplasmaVisual";
import LymeDiseaseVisual, { lymeDiseaseVisualTypes } from "@/components/learn/LymeDiseaseVisual";
import TularemiaVisual, { tularemiaVisualTypes } from "@/components/learn/TularemiaVisual";
import SystemicAntifungalFoundationsVisual, { systemicAntifungalFoundationsVisualTypes } from "@/components/learn/SystemicAntifungalFoundationsVisual";
import AmphotericinFlucytosinePharmacologyVisual, { amphotericinFlucytosinePharmacologyVisualTypes } from "@/components/learn/AmphotericinFlucytosinePharmacologyVisual";
import TriazoleAntifungalPharmacologyVisual, { triazoleAntifungalPharmacologyVisualTypes } from "@/components/learn/TriazoleAntifungalPharmacologyVisual";
import EchinocandinPharmacologyVisual, { echinocandinPharmacologyVisualTypes } from "@/components/learn/EchinocandinPharmacologyVisual";
import TerbinafineGriseofulvinPharmacologyVisual, { terbinafineGriseofulvinPharmacologyVisualTypes } from "@/components/learn/TerbinafineGriseofulvinPharmacologyVisual";
import LocalOropharyngealAntifungalPharmacologyVisual, { localOropharyngealAntifungalPharmacologyVisualTypes } from "@/components/learn/LocalOropharyngealAntifungalPharmacologyVisual";
import InfluenzaAntiviralPharmacologyVisual, { influenzaAntiviralPharmacologyVisualTypes } from "@/components/learn/InfluenzaAntiviralPharmacologyVisual";
import HerpesSimplexVaricellaAntiviralPharmacologyVisual, { herpesSimplexVaricellaAntiviralPharmacologyVisualTypes } from "@/components/learn/HerpesSimplexVaricellaAntiviralPharmacologyVisual";
import CytomegalovirusPharmacotherapyVisual, { cytomegalovirusPharmacotherapyVisualTypes } from "@/components/learn/CytomegalovirusPharmacotherapyVisual";
import PneumocystisJiroveciiPneumoniaVisual, { pneumocystisJiroveciiPneumoniaVisualTypes } from "@/components/learn/PneumocystisJiroveciiPneumoniaVisual";
import HivFoundationsCareVisual, { hivFoundationsCareVisualTypes } from "@/components/learn/HivFoundationsCareVisual";
import NucleosideReverseTranscriptaseInhibitorVisual, { nucleosideReverseTranscriptaseInhibitorVisualTypes } from "@/components/learn/NucleosideReverseTranscriptaseInhibitorVisual";
import NonNucleosideReverseTranscriptaseInhibitorVisual, { nonNucleosideReverseTranscriptaseInhibitorVisualTypes } from "@/components/learn/NonNucleosideReverseTranscriptaseInhibitorVisual";
import HivProteaseInhibitorVisual, { hivProteaseInhibitorVisualTypes } from "@/components/learn/HivProteaseInhibitorVisual";
import HivEntryAttachmentInhibitorVisual, { hivEntryAttachmentInhibitorVisualTypes } from "@/components/learn/HivEntryAttachmentInhibitorVisual";
import IntegraseStrandTransferInhibitorVisual, { integraseStrandTransferInhibitorVisualTypes } from "@/components/learn/IntegraseStrandTransferInhibitorVisual";
import HivPreventionPrepPepVisual, { hivPreventionPrepPepVisualTypes } from "@/components/learn/HivPreventionPrepPepVisual";
import DisseminatedMacVisual, { disseminatedMacVisualTypes } from "@/components/learn/DisseminatedMacVisual";
import ToxoplasmaEncephalitisVisual, { toxoplasmaEncephalitisVisualTypes } from "@/components/learn/ToxoplasmaEncephalitisVisual";
import CryptococcalMeningitisVisual, { cryptococcalMeningitisVisualTypes } from "@/components/learn/CryptococcalMeningitisVisual";
import HistoplasmosisVisual, { histoplasmosisVisualTypes } from "@/components/learn/HistoplasmosisVisual";
import MucosalEsophagealCandidiasisVisual, { mucosalEsophagealCandidiasisVisualTypes } from "@/components/learn/MucosalEsophagealCandidiasisVisual";
import CoccidioidomycosisVisual, { coccidioidomycosisVisualTypes } from "@/components/learn/CoccidioidomycosisVisual";
import BlastomycosisVisual, { blastomycosisVisualTypes } from "@/components/learn/BlastomycosisVisual";
import AspergillosisVisual, { aspergillosisVisualTypes } from "@/components/learn/AspergillosisVisual";
import MucormycosisVisual, { mucormycosisVisualTypes } from "@/components/learn/MucormycosisVisual";
import InvasiveCandidiasisVisual, { invasiveCandidiasisVisualTypes } from "@/components/learn/InvasiveCandidiasisVisual";
import ChronicHepatitisBVisual, { chronicHepatitisBVisualTypes } from "@/components/learn/ChronicHepatitisBVisual";
import HepatitisCVisual, { hepatitisCVisualTypes } from "@/components/learn/HepatitisCVisual";
import CirrhosisDecompensatedVisual, { cirrhosisDecompensatedVisualTypes } from "@/components/learn/CirrhosisDecompensatedVisual";
import MasldVisual, { masldVisualTypes } from "@/components/learn/MasldVisual";
import NonsteroidalAntiInflammatoryDrugVisual, { nonsteroidalAntiInflammatoryDrugVisualTypes } from "@/components/learn/NonsteroidalAntiInflammatoryDrugVisual";
import AlcoholAssociatedLiverDiseaseVisual, { alcoholAssociatedLiverDiseaseVisualTypes } from "@/components/learn/AlcoholAssociatedLiverDiseaseVisual";
import DrugInducedLiverInjuryVisual, { drugInducedLiverInjuryVisualTypes } from "@/components/learn/DrugInducedLiverInjuryVisual";
import AcuteLiverFailureVisual, { acuteLiverFailureVisualTypes } from "@/components/learn/AcuteLiverFailureVisual";
import MajorDepressiveDisorderVisual, { majorDepressiveDisorderVisualTypes } from "@/components/learn/MajorDepressiveDisorderVisual";
import SchizophreniaPsychosisVisual, { schizophreniaPsychosisVisualTypes } from "@/components/learn/SchizophreniaPsychosisVisual";
import BipolarDisorderVisual, { bipolarDisorderVisualTypes } from "@/components/learn/BipolarDisorderVisual";
import AttentionDeficitHyperactivityDisorderVisual, { attentionDeficitHyperactivityDisorderVisualTypes } from "@/components/learn/AttentionDeficitHyperactivityDisorderVisual";
import AnxietyDisordersVisual, { anxietyDisordersVisualTypes } from "@/components/learn/AnxietyDisordersVisual";
import SleepDisordersVisual, { sleepDisordersVisualTypes } from "@/components/learn/SleepDisordersVisual";
import ParkinsonDiseaseVisual, { parkinsonDiseaseVisualTypes } from "@/components/learn/ParkinsonDiseaseVisual";
import AlzheimerDiseaseDementiasVisual, { alzheimerDiseaseDementiasVisualTypes } from "@/components/learn/AlzheimerDiseaseDementiasVisual";
import SeizuresEpilepsyVisual, { seizuresEpilepsyVisualTypes } from "@/components/learn/SeizuresEpilepsyVisual";
import { getPharmacyModule, pharmacyModules } from "@/data/pharmacyModules";
import { getPharmacyStudyContent } from "@/data/pharmacyStudyContent";

const calciumVisualTypes = ["mineral-regulation", "calcium-fractions", "hypocalcemia-response", "hypercalcemia-response", "phosphate-balance", "ckd-mbd"];
const enteralVisualTypes = ["enteral-decision", "access-route", "delivery-prescription", "formula-selection", "medication-administration", "monitoring-complications"];
const parenteralVisualTypes = ["pn-decision", "venous-access", "macronutrient-design", "micronutrient-balance", "compounding-safety", "monitoring-transition"];
const parenteralCalculationVisualTypes = ["pn-calc-foundations", "pn-calc-protein-energy", "pn-calc-dextrose", "pn-calc-lipid", "pn-calc-stock", "pn-calc-audit"];
const pediatricParenteralVisualTypes = ["peds-pn-decision", "peds-pn-glucose", "peds-pn-macros", "peds-pn-micros", "peds-pn-safety", "peds-pn-audit"];
const autonomicVisualTypes = ["ans-architecture", "ans-transmitter-map", "ans-receptor-signaling", "ans-cholinergic-cycle", "ans-adrenergic-cycle", "ans-reflex-integration"];
const cholinergicVisualTypes = ["chol-classification", "chol-direct-agonists", "chol-clinical-selection", "chol-peripheral-inhibitors", "chol-central-inhibitors", "chol-safety"];
const antimuscarinicVisualTypes = ["antimuscarinic-mechanism", "antimuscarinic-burden", "antimuscarinic-bladder", "antimuscarinic-airway", "antimuscarinic-applications", "antimuscarinic-safety"];
const cholinergicMedicinalChemistryVisualTypes = ["medchem-choline-pharmacophore", "medchem-choline-esters", "medchem-direct-agonists", "medchem-ache-binding", "medchem-ache-access", "medchem-design-integration"];
const anticholinergicMedicinalChemistryVisualTypes = ["antichol-medchem-pharmacophore", "antichol-medchem-tropanes", "antichol-medchem-access", "antichol-medchem-duration", "antichol-medchem-bladder", "antichol-medchem-integration"];
const cholinergicToxicologyVisualTypes = ["tox-exposure-pathway", "tox-syndrome-domains", "tox-decontamination", "tox-atropine", "tox-oxime", "tox-postacute"];
const adrenergicAgonistVisualTypes = ["adr-receptor-map", "adr-transmitter-actions", "adr-vasopressors", "adr-beta2", "adr-alpha-applications", "adr-safety"];
const adrenergicAntagonistVisualTypes = ["adr-antagonist-occupancy", "adr-alpha-blockers", "adr-beta-diversity", "adr-cardiac-selection", "adr-antagonist-safety", "adr-antagonist-toxicity"];
const adrenergicMedicinalChemistryVisualTypes = ["adr-medchem-pharmacophore", "adr-medchem-catechol", "adr-medchem-amine", "adr-medchem-stereo", "adr-medchem-beta-blockers", "adr-medchem-alpha-blockers"];
const diureticPharmacologyVisualTypes = ["diuretic-nephron-map", "diuretic-loop", "diuretic-thiazide", "diuretic-potassium", "diuretic-other", "diuretic-integration"];
const diureticMedicinalChemistryVisualTypes = ["diuretic-medchem-ca", "diuretic-medchem-loop", "diuretic-medchem-thiazide", "diuretic-medchem-mra", "diuretic-medchem-enac", "diuretic-medchem-integration"];
const glaucomaPharmacotherapyVisualTypes = ["glaucoma-flow-map", "glaucoma-prostaglandins", "glaucoma-production", "glaucoma-outflow", "glaucoma-selection", "glaucoma-technique"];
const hypertensionFoundationsVisualTypes = ["htn-measurement", "htn-risk-goal", "htn-lifestyle", "htn-first-line", "htn-combination", "htn-monitoring"];
const resistantSecondaryHypertensionVisualTypes = ["resistant-confirmation", "resistant-contributors", "secondary-screening", "primary-aldosteronism", "secondary-causes", "resistant-treatment"];
const hypertensiveEmergenciesVisualTypes = ["emergency-triage", "emergency-physiology", "emergency-neurologic", "emergency-cardiovascular", "emergency-special", "emergency-transition"];
const antihypertensiveMedicinalChemistryVisualTypes = ["htn-medchem-ace", "htn-medchem-arb", "htn-medchem-ccb", "htn-medchem-central", "htn-medchem-vasodilator", "htn-medchem-integration"];
const dyslipidemiaRiskVisualTypes = ["lipoprotein-transport", "atherogenic-burden", "triglyceride-remnants", "inherited-secondary", "risk-reclassification", "screening-lifecycle"];
const lipidLoweringPharmacologyVisualTypes = ["lipid-statin-pathway", "lipid-absorption-bile", "lipid-pcsk9", "lipid-acl", "lipid-triglyceride", "lipid-rare"];
const dyslipidemiaTherapeuticsVisualTypes = ["dyslipidemia-goal-map", "dyslipidemia-primary", "dyslipidemia-secondary", "dyslipidemia-triglycerides", "dyslipidemia-familial", "dyslipidemia-implementation"];
const chronicCoronaryDiseaseVisualTypes = ["ccd-disease-spectrum", "ccd-prevention", "ccd-antithrombotic", "ccd-angina", "ccd-testing-revascularization", "ccd-follow-up"];
const acuteCoronarySyndromesVisualTypes = ["acs-rupture-thrombosis", "acs-diagnostic-path", "acs-antithrombotic", "acs-reperfusion", "acs-pci-shock", "acs-discharge"];
const antiplateletPharmacologyVisualTypes = ["antiplatelet-platelet-cycle", "antiplatelet-aspirin", "antiplatelet-p2y12", "antiplatelet-iv-agents", "antiplatelet-variability", "antiplatelet-bleeding"];
const coagulationAnticoagulantVisualTypes = ["coagulation-hemostasis", "coagulation-targets", "coagulation-laboratory", "coagulation-selection", "coagulation-transitions", "coagulation-bleeding-hit"];
const venousThromboembolismVisualTypes = ["vte-risk-formation", "vte-dvt-diagnosis", "vte-pe-categories", "vte-initial-treatment", "vte-duration-special", "vte-follow-up"];
const warfarinManagementVisualTypes = ["warfarin-vitamin-k", "warfarin-initiation", "warfarin-inr", "warfarin-interactions", "warfarin-reversal", "warfarin-longitudinal"];
const directOralAnticoagulantsVisualTypes = ["doac-targets", "doac-factor-xa", "doac-dabigatran", "doac-selection", "doac-procedures", "doac-bleeding"];
const parenteralAnticoagulantsVisualTypes = ["parenteral-target-map", "parenteral-ufh", "parenteral-lmwh", "parenteral-fondaparinux", "parenteral-dti", "parenteral-critical-safety"];
const ecgInterpretationVisualTypes = ["ecg-signal-system", "ecg-rate-rhythm", "ecg-intervals-axis", "ecg-conduction", "ecg-ischemia-electrolytes", "ecg-emergency-workflow"];
const arrhythmiaPathophysiologyVisualTypes = ["arrhythmia-cell-electrophysiology", "arrhythmia-automaticity", "arrhythmia-triggered-activity", "arrhythmia-reentry", "arrhythmia-substrate-triggers", "arrhythmia-mechanism-treatment"];
const atrialArrhythmiasVisualTypes = ["atrial-arrhythmia-map", "atrial-af-framework", "atrial-rate-rhythm", "atrial-stroke-prevention", "atrial-svt-circuits", "atrial-special-safety"];
const ventricularArrhythmiasVisualTypes = ["ventricular-risk-map", "ventricular-monomorphic", "ventricular-polymorphic", "ventricular-arrest-storm", "ventricular-inherited", "ventricular-prevention", "ventricular-drug-strategy"];
const antiarrhythmicPharmacologyVisualTypes = ["antiarrhythmic-framework", "antiarrhythmic-sodium", "antiarrhythmic-potassium", "antiarrhythmic-multichannel", "antiarrhythmic-selection", "antiarrhythmic-monitoring"];
const heartFailurePathophysiologyVisualTypes = ["hf-definition-stages", "hf-pump-mechanics", "hf-neurohormonal", "hf-congestion-cardiorenal", "hf-phenotypes", "hf-diagnostic-trajectory"];
const chronicHeartFailureVisualTypes = ["hf-treatment-pillars", "hf-ras-mra", "hf-beta-rate", "hf-sglt2-diuresis", "hf-additional-therapy", "hf-phenotype-implementation"];
const acuteDecompensatedHeartFailureVisualTypes = ["adhf-assessment", "adhf-decongestion", "adhf-cardiorenal", "adhf-vasoactive", "adhf-shock", "adhf-transition"];
const heartFailureMedicinalChemistryVisualTypes = ["hf-medchem-ras", "hf-medchem-arni", "hf-medchem-beta", "hf-medchem-mra", "hf-medchem-renal", "hf-medchem-vasodilator", "hf-medchem-integrated"];
const peripheralArterialDiseaseVisualTypes = ["pad-spectrum", "pad-diagnosis", "pad-risk-therapy", "pad-function", "pad-revascularization", "pad-limb-emergency"];
const acuteIschemicStrokeVisualTypes = ["ais-system", "ais-diagnosis", "ais-thrombolysis", "ais-thrombectomy", "ais-support", "ais-transition"];
const secondaryStrokePreventionVisualTypes = ["ssp-mechanism", "ssp-antithrombotic", "ssp-atherosclerosis", "ssp-cardioembolic", "ssp-special", "ssp-lifelong"];
const acuteKidneyInjuryVisualTypes = ["aki-detect", "aki-cause", "aki-hemodynamic", "aki-drugs", "aki-complications", "aki-recovery"];
const chronicKidneyDiseaseVisualTypes = ["ckd-definition", "ckd-mechanism", "ckd-cga", "ckd-risk", "ckd-foundations", "ckd-therapy", "ckd-monitoring", "ckd-stewardship"];
const ckdComplicationsVisualTypes = ["ckdc-surveillance", "ckdc-anemia", "ckdc-mbd", "ckdc-electrolytes", "ckdc-volume", "ckdc-cardioskin", "ckdc-advanced"];
const renalReplacementTherapyVisualTypes = ["rrt-choice", "rrt-mechanics", "rrt-hd", "rrt-pd", "rrt-continuous", "rrt-safety", "rrt-longitudinal"];
const allergicRhinitisVisualTypes = ["ar-phenotype", "ar-immunology", "ar-technique", "ar-therapy", "ar-adjuncts", "ar-safety", "ar-followup", "ar-immunotherapy"];
const asthmaVisualTypes = ["asthma-biology", "asthma-diagnosis", "asthma-risk", "asthma-pharmacology", "asthma-adjuncts", "asthma-strategy", "asthma-severe", "asthma-acute"];
const chronicObstructivePulmonaryDiseaseVisualTypes = ["copd-biology", "copd-diagnosis", "copd-assessment", "copd-pharmacology", "copd-advanced", "copd-strategy", "copd-nonpharmacologic", "copd-acute"];
const pulmonaryArterialHypertensionVisualTypes = ["pah-hemodynamics", "pah-diagnosis", "pah-risk", "pah-supportive-care", "pah-pharmacology", "pah-delivery-safety", "pah-strategy", "pah-special"];
const cysticFibrosisVisualTypes = ["cf-biology", "cf-airway", "cf-pulmonary", "cf-infection", "cf-modulators", "cf-nutrition", "cf-systemic", "cf-longitudinal"];
const drugInducedPulmonaryDiseaseVisualTypes = ["dipd-patterns", "dipd-causality", "dipd-assessment", "dipd-classic", "dipd-oncology", "dipd-modern-oncology", "dipd-airway-vascular", "dipd-management"];
const pituitaryPharmacologyVisualTypes = ["pituitary-axis", "pituitary-acromegaly", "pituitary-prolactin", "pituitary-replacement", "pituitary-vasopressin", "pituitary-emergencies"];
const diabetesPathophysiologyMonitoringVisualTypes = ["diabetes-physiology", "diabetes-diagnosis", "diabetes-targets", "diabetes-monitoring", "diabetes-complications", "diabetes-longitudinal"];
const noninsulinDiabetesPharmacotherapyVisualTypes = ["noninsulin-selection", "noninsulin-metformin", "noninsulin-sglt2", "noninsulin-glp1", "noninsulin-dpp4", "noninsulin-secretagogues", "noninsulin-tzd", "noninsulin-other", "noninsulin-outcomes", "noninsulin-combination"];
const insulinTherapyVisualTypes = ["insulin-physiology", "insulin-profiles", "insulin-calculations", "insulin-type1", "insulin-basal", "insulin-intensification", "insulin-devices", "insulin-administration", "insulin-safety", "insulin-transitions"];
const diabeticKetoacidosisVisualTypes = ["dka-pathway", "dka-diagnosis", "dka-causes", "dka-fluids", "dka-potassium", "dka-insulin", "dka-monitoring", "dka-calculations", "dka-complications", "dka-transition"];
const hyperosmolarHyperglycemicStateVisualTypes = ["hhs-pathway", "hhs-diagnosis", "hhs-causes", "hhs-fluids", "hhs-osmolality", "hhs-insulin", "hhs-monitoring", "hhs-complications", "hhs-transition"];
const thyroidDisordersVisualTypes = ["thyroid-axis", "thyroid-hypothyroidism", "thyroid-levothyroxine", "thyroid-monitoring", "thyroid-myxedema", "thyroid-thyrotoxicosis", "thyroid-thionamides", "thyroid-adjuncts", "thyroid-definitive", "thyroid-storm", "thyroid-pregnancy"];
const thyroidMedicinalChemistryVisualTypes = ["thychem-biosynthesis", "thychem-scaffold", "thychem-stereo", "thychem-deiodination", "thychem-analogs", "thychem-thionamides", "thychem-iodine", "thychem-formulation"];
const adrenalPharmacologyVisualTypes = ["adrenal-hpa", "adrenal-zones", "adrenal-steroidogenesis", "adrenal-gr", "adrenal-mr", "adrenal-sar", "adrenal-family", "adrenal-disposition", "adrenal-formulation", "adrenal-mra", "adrenal-equivalence", "adrenal-safety"];
const cushingSyndromeVisualTypes = ["cushing-recognition", "cushing-testing", "cushing-acth", "cushing-localization", "cushing-severity", "cushing-surgery", "cushing-chemistry", "cushing-steroidogenesis", "cushing-directed", "cushing-longterm"];
const adrenalInsufficiencyVisualTypes = ["ai-levels", "ai-primary", "ai-central", "ai-patterns", "ai-testing", "ai-glucocorticoid", "ai-mineralocorticoid", "ai-formulations", "ai-preparedness", "ai-crisis", "ai-follow-up"];
const gonadalHormonePharmacologyVisualTypes = ["gonadal-hpg-axis", "gonadal-testicular", "gonadal-ovarian", "gonadal-steroidogenesis", "gonadal-receptors", "gonadal-diagnosis", "gonadal-formulations", "gonadal-safety", "gonadal-estrogen-progestogen", "gonadal-pathway-therapy"];
const gynecologicDisordersVisualTypes = ["gyn-cycle-triage", "gyn-palm-coein", "gyn-acute-aub", "gyn-hmb-selection", "gyn-pain-pathway", "gyn-pmdd-cycle", "gyn-endometriosis-map", "gyn-endometriosis-therapy", "gyn-fibroid-map", "gyn-longitudinal-care"];
const infertilityOvulationInductionVisualTypes = ["infertility-evaluation-clock", "infertility-fertile-window", "infertility-female-workup", "infertility-male-workup", "infertility-pcos-letrozole", "infertility-clomiphene-metformin", "infertility-gonadotropins", "infertility-protocol-control", "infertility-art-pathway", "infertility-ohss-care"];
const contraceptivePharmacotherapyVisualTypes = ["contraception-selection", "contraception-combined", "contraception-estrogen-risk", "contraception-progestin", "contraception-iuds", "contraception-implant", "contraception-emergency", "contraception-quick-start", "contraception-interactions", "contraception-care-loop"];
const pregnancyLactationPharmacotherapyVisualTypes = ["perinatal-context", "perinatal-pk", "perinatal-placenta", "perinatal-evidence", "perinatal-symptoms", "perinatal-diabetes", "perinatal-preeclampsia", "perinatal-vte", "perinatal-lactation-pk", "perinatal-lactation-care"];
const menopausalHormoneTherapyVisualTypes = ["mht-transition", "mht-thermoregulation", "mht-estrogen", "mht-endometrium", "mht-bleeding", "mht-nonhormonal", "mht-gsm", "mht-risk", "mht-prevention", "mht-followup"];
const benignProstaticHyperplasiaVisualTypes = ["bph-framework", "bph-evaluation", "bph-goals", "bph-alpha", "bph-fiveari", "bph-tadalafil", "bph-storage", "bph-retention", "bph-procedures", "bph-followup"];
const urinaryIncontinenceVisualTypes = ["ui-phenotypes", "ui-evaluation", "ui-neurophysiology", "ui-behavioral", "ui-antimuscarinics", "ui-beta3", "ui-combination", "ui-procedures", "ui-other-phenotypes", "ui-nocturia"];
const sexualDysfunctionVisualTypes = ["sexual-health-framework", "ed-evaluation", "erection-physiology", "pde5-selection", "pde5-safety", "pde5-response", "nonoral-ed", "hsdd-evaluation", "flibanserin-safety", "bremelanotide-safety"];
const osteoporosisVisualTypes = ["bone-remodeling", "mineral-homeostasis", "risk-screening", "dxa-frax", "prevention-foundations", "treatment-framework", "bisphosphonates", "denosumab", "bone-forming-therapy", "selective-options", "longitudinal-care"];
const shockVasoactiveVisualTypes = ["shock-recognition", "hemodynamic-phenotypes", "fluid-responsiveness", "septic-shock", "catecholamine-vasopressors", "noncatecholamine-vasopressors", "cardiogenic-inotropes", "cause-directed-shock", "vasodilators-afterload", "infusion-safety"];
const icuAnalgesiaSedationVisualTypes = ["icu-pain-assessment", "icu-opioid-selection", "icu-multimodal-analgesia", "icu-sedation-target", "icu-sedative-selection", "icu-propofol-safety", "icu-dexmedetomidine-safety", "icu-delirium-detection", "icu-delirium-management", "icu-liberation"];
const perioperativeCriticalCareVisualTypes = ["periop-stress-ulcer", "periop-local-anesthetic", "periop-last", "periop-induction", "periop-mh", "periop-nmb-foundations", "periop-succinylcholine", "periop-nondepolarizing", "periop-nmb-safety", "periop-monitoring-reversal", "periop-antifibrinolytic"];
const gastroesophagealRefluxDiseaseVisualTypes = ["gerd-barrier", "gerd-triage", "gerd-diagnosis", "gerd-lifestyle", "gerd-rapid-relief", "gerd-h2ra", "gerd-ppi", "gerd-selection", "gerd-persistent", "gerd-maintenance"];
const pepticUlcerDiseaseVisualTypes = ["pud-defense", "pud-triage", "pud-cause", "pud-testing", "pud-bqt", "pud-alternatives", "pud-confirmation", "pud-healing", "pud-nsaid", "pud-complications"];
const irritableBowelSyndromeVisualTypes = ["ibs-network", "ibs-diagnosis", "ibs-subtypes", "ibs-foundation", "ibs-pain", "ibs-c-foundation", "ibs-c-rx", "ibs-d-foundation", "ibs-d-rx", "ibs-followup"];
const chronicIdiopathicConstipationVisualTypes = ["cic-phenotype", "cic-triage", "cic-evacuation", "cic-foundation", "cic-osmotic", "cic-stimulant", "cic-secretagogues", "cic-prucalopride", "cic-refractory", "cic-longitudinal"];
const inflammatoryBowelDiseaseVisualTypes = ["ibd-biology", "ibd-diagnosis", "ibd-targets", "ibd-uc-mild", "ibd-uc-advanced", "ibd-crohn", "ibd-maintenance", "ibd-biologics", "ibd-small-molecules", "ibd-acute-severe"];
const motionSicknessVisualTypes = ["motion-biology", "motion-assessment", "motion-behavior", "motion-pharmacology", "motion-antihistamines", "motion-scopolamine", "motion-populations", "motion-recovery"];
const medicationSafetyQualityVisualTypes = ["safety-taxonomy", "safety-systems", "safety-response", "safety-improvement", "safety-communication", "safety-high-alert", "safety-reconciliation", "safety-technology", "safety-administration", "safety-governance"];
const infectionPreventionControlVisualTypes = ["ipc-chain", "ipc-standard", "ipc-transmission", "ipc-hands", "ipc-environment", "ipc-devices", "ipc-injections", "ipc-sharps", "ipc-surveillance", "ipc-governance"];
const drugAllergiesAdverseReactionsVisualTypes = ["adr-taxonomy-map", "adr-causality-map", "adr-safety-system", "adr-immune-pathways", "adr-anaphylaxis", "adr-scar-triage", "adr-beta-lactam", "adr-cross-reactivity", "adr-testing-pathway", "adr-longitudinal-record"];
const pharmacokineticsVisualTypes = ["pk-adme-map", "pk-bioavailability", "pk-distribution", "pk-metabolism", "pk-clearance", "pk-saturation", "pk-decay", "pk-half-life", "pk-dosing", "pk-tdm"];
const pharmacogenomicsVisualTypes = ["pgx-foundations", "pgx-expression", "pgx-methods", "pgx-translation", "pgx-evidence", "pgx-appraisal", "pgx-counseling", "pgx-hla", "pgx-cyp2d6", "pgx-clopidogrel", "pgx-antiseizure", "pgx-antimetabolites", "pgx-multigene", "pgx-oncology"];
const dietarySupplementsVisualTypes = ["supp-regulation", "supp-evidence", "supp-reconciliation", "supp-bleeding", "supp-organ-risk", "supp-neuroactive", "supp-cardiometabolic", "supp-vitamins", "supp-special-categories", "supp-care-plan"];
const toxicologyAntidotesVisualTypes = ["tox-stabilization", "tox-decontamination", "tox-patterns", "tox-acetaminophen", "tox-opioids", "tox-cardiotoxic", "tox-cellular", "tox-neuro", "tox-metabolic", "tox-preparedness"];
const tobaccoUseCessationVisualTypes = ["tobacco-dependence", "tobacco-plan", "tobacco-nrt-system", "tobacco-patch", "tobacco-oral-nrt", "tobacco-prescription-nrt", "tobacco-varenicline", "tobacco-bupropion", "tobacco-special-populations", "tobacco-longitudinal"];
const systemicGlucocorticoidsVisualTypes = ["gc-signaling", "gc-structure", "gc-equivalence", "gc-treatment-plan", "gc-hpa-risk", "gc-taper", "gc-stress", "gc-metabolic", "gc-infection-vaccine", "gc-bone-tissue", "gc-longitudinal"];
const rheumatoidArthritisVisualTypes = ["ra-recognition", "ra-target", "ra-methotrexate", "ra-csdmards", "ra-biologics", "ra-jak", "ra-prevention", "ra-supportive", "ra-remission", "ra-longitudinal"];
const systemicLupusErythematosusVisualTypes = ["sle-recognition", "sle-immunity", "sle-targets", "sle-hcq", "sle-organs", "sle-conventional", "sle-biologics", "sle-nephritis", "sle-prevention", "sle-longitudinal"];
const multipleSclerosisVisualTypes = ["ms-recognition", "ms-course", "ms-relapse", "ms-injectables", "ms-orals", "ms-s1p", "ms-biologics", "ms-reconstitution", "ms-rehabilitation", "ms-longitudinal"];
const raynaudPhenomenonVisualTypes = ["raynaud-recognition", "raynaud-mechanism", "raynaud-evaluation", "raynaud-prevention", "raynaud-ccb", "raynaud-pde5", "raynaud-nitrates", "raynaud-ischemia", "raynaud-secondary", "raynaud-longitudinal"];
const celiacDiseaseVisualTypes = ["celiac-mechanism", "celiac-spectrum", "celiac-serology", "celiac-biopsy", "celiac-diet", "celiac-nutrition", "celiac-dh", "celiac-medicines", "celiac-followup", "celiac-nonresponsive"];
const diarrheaAssessmentVisualTypes = ["diarrhea-phenotype", "diarrhea-triage", "diarrhea-causes", "diarrhea-rehydration", "diarrhea-testing", "diarrhea-supportive", "diarrhea-bismuth", "diarrhea-antimotility", "diarrhea-travel", "diarrhea-persistent"];
const scopedAntibioticVisualModules = new Set([
  "beta-lactam-pharmacology",
  "aminoglycoside-pharmacology",
  "fluoroquinolone-pharmacology",
  "macrolide-pharmacology",
  "tetracycline-pharmacology",
  "sulfonamide-trimethoprim-pharmacology",
  "vancomycin-pharmacology",
  "daptomycin-pharmacology",
  "linezolid-tedizolid-pharmacology",
  "tigecycline-pharmacology",
  "polymyxin-pharmacology",
]);

export function generateStaticParams() {
  return pharmacyModules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const module = getPharmacyModule(slug);
  if (!module) return {};
  return {
    title: `${module.title} | NaS Learn`,
    description: module.description,
    alternates: { canonical: `/learn/pharmacy/modules/${module.slug}` },
  };
}

export default async function PharmacyModulePage({ params }) {
  const { slug } = await params;
  const module = getPharmacyModule(slug);
  if (!module) notFound();

  const embeddedQuestions = module.submodules.map((submodule) => ({
    ...submodule.check,
    id: `${module.slug}-${submodule.slug}`,
  }));
  const questions = module.questionBank || embeddedQuestions;

  const currentIndex = pharmacyModules.findIndex((item) => item.slug === module.slug);
  const previous = pharmacyModules[currentIndex - 1];
  const next = pharmacyModules[currentIndex + 1];

  return (
    <div className="nas-page pharmacy-module-page">
      <header className="pharmacy-module-hero">
        <div className="nas-shell">
          <Link href="/learn/pharmacy#curriculum" className="learning-back">← Pharmacy curriculum</Link>
          <div className="pharmacy-module-hero__meta"><span>Module {module.number}</span><span>{module.submodules.length} lessons</span></div>
          <h1>{module.title}</h1>
          <p>{module.description}</p>
          <div className="pharmacy-module-hero__outcomes">
            {module.outcomes.map((outcome, index) => <div key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></div>)}
          </div>
        </div>
      </header>

      <main className="nas-shell pharmacy-module-layout">
        <aside className="pharmacy-module-nav" aria-label="Module contents">
          <p>In this module</p>
          <nav>{module.submodules.map((submodule) => <a href={`#${submodule.slug}`} key={submodule.slug}>{submodule.title}</a>)}</nav>
          <a className="pharmacy-module-nav__test" href="#module-test">Module test ↓</a>
        </aside>

        <article className="pharmacy-module-content">
          {module.submodules.map((submodule, index) => (
            <section className="pharmacy-submodule" id={submodule.slug} key={submodule.slug}>
              {(() => {
                const study = getPharmacyStudyContent(submodule.slug);
                return <>
              <div className="pharmacy-submodule__number">{module.number}.{String(index + 1).padStart(2, "0")}</div>
              <p className="nas-section-label">Lesson</p>
              <h2>{submodule.title}</h2>
              <p className="pharmacy-submodule__summary">{submodule.summary}</p>
              <div className="pharmacy-submodule__concepts">
                <span>What to learn</span>
                <ul>{submodule.concepts.map((concept) => <li key={concept}>{concept}</li>)}</ul>
              </div>
              {!scopedAntibioticVisualModules.has(module.slug) && <>
              {nutritionScreeningAssessmentVisualTypes.includes(submodule.visual) && <NutritionScreeningAssessmentVisual type={submodule.visual} />}
              {!nutritionScreeningAssessmentVisualTypes.includes(submodule.visual) && <>
              {submodule.visual && !submodule.visual.startsWith("acid-") && !calciumVisualTypes.includes(submodule.visual) && !enteralVisualTypes.includes(submodule.visual) && !parenteralVisualTypes.includes(submodule.visual) && !parenteralCalculationVisualTypes.includes(submodule.visual) && !pediatricParenteralVisualTypes.includes(submodule.visual) && !autonomicVisualTypes.includes(submodule.visual) && !cholinergicVisualTypes.includes(submodule.visual) && !antimuscarinicVisualTypes.includes(submodule.visual) && !cholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && !anticholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && !cholinergicToxicologyVisualTypes.includes(submodule.visual) && !adrenergicAgonistVisualTypes.includes(submodule.visual) && !adrenergicAntagonistVisualTypes.includes(submodule.visual) && !adrenergicMedicinalChemistryVisualTypes.includes(submodule.visual) && !diureticPharmacologyVisualTypes.includes(submodule.visual) && !diureticMedicinalChemistryVisualTypes.includes(submodule.visual) && !glaucomaPharmacotherapyVisualTypes.includes(submodule.visual) && !hypertensionFoundationsVisualTypes.includes(submodule.visual) && !resistantSecondaryHypertensionVisualTypes.includes(submodule.visual) && !hypertensiveEmergenciesVisualTypes.includes(submodule.visual) && !antihypertensiveMedicinalChemistryVisualTypes.includes(submodule.visual) && !dyslipidemiaRiskVisualTypes.includes(submodule.visual) && !lipidLoweringPharmacologyVisualTypes.includes(submodule.visual) && !dyslipidemiaTherapeuticsVisualTypes.includes(submodule.visual) && !chronicCoronaryDiseaseVisualTypes.includes(submodule.visual) && !acuteCoronarySyndromesVisualTypes.includes(submodule.visual) && !antiplateletPharmacologyVisualTypes.includes(submodule.visual) && !coagulationAnticoagulantVisualTypes.includes(submodule.visual) && !venousThromboembolismVisualTypes.includes(submodule.visual) && !warfarinManagementVisualTypes.includes(submodule.visual) && !directOralAnticoagulantsVisualTypes.includes(submodule.visual) && !parenteralAnticoagulantsVisualTypes.includes(submodule.visual) && !ecgInterpretationVisualTypes.includes(submodule.visual) && !arrhythmiaPathophysiologyVisualTypes.includes(submodule.visual) && !atrialArrhythmiasVisualTypes.includes(submodule.visual) && !ventricularArrhythmiasVisualTypes.includes(submodule.visual) && !antiarrhythmicPharmacologyVisualTypes.includes(submodule.visual) && !heartFailurePathophysiologyVisualTypes.includes(submodule.visual) && !diabeticKetoacidosisVisualTypes.includes(submodule.visual) && !hyperosmolarHyperglycemicStateVisualTypes.includes(submodule.visual) && !thyroidDisordersVisualTypes.includes(submodule.visual) && !thyroidMedicinalChemistryVisualTypes.includes(submodule.visual) && !adrenalPharmacologyVisualTypes.includes(submodule.visual) && !cushingSyndromeVisualTypes.includes(submodule.visual) && !adrenalInsufficiencyVisualTypes.includes(submodule.visual) && !gonadalHormonePharmacologyVisualTypes.includes(submodule.visual) && !gynecologicDisordersVisualTypes.includes(submodule.visual) && !infertilityOvulationInductionVisualTypes.includes(submodule.visual) && !contraceptivePharmacotherapyVisualTypes.includes(submodule.visual) && !gastroesophagealRefluxDiseaseVisualTypes.includes(submodule.visual) && !pepticUlcerDiseaseVisualTypes.includes(submodule.visual) && !irritableBowelSyndromeVisualTypes.includes(submodule.visual) && !chronicIdiopathicConstipationVisualTypes.includes(submodule.visual) && !diarrheaAssessmentVisualTypes.includes(submodule.visual) && !inflammatoryBowelDiseaseVisualTypes.includes(submodule.visual) && !motionSicknessVisualTypes.includes(submodule.visual) && !medicationSafetyQualityVisualTypes.includes(submodule.visual) && !infectionPreventionControlVisualTypes.includes(submodule.visual) && !drugAllergiesAdverseReactionsVisualTypes.includes(submodule.visual) && !pharmacokineticsVisualTypes.includes(submodule.visual) && !toxicologyAntidotesVisualTypes.includes(submodule.visual) && !gynecologicOncologyVisualTypes.includes(submodule.visual) && !pelvicOrganProlapseFistulaCareVisualTypes.includes(submodule.visual) && !genderAffirmingHormoneCareVisualTypes.includes(submodule.visual) && !immunoglobulinTherapyVisualTypes.includes(submodule.visual) && !anemiaVisualTypes.includes(submodule.visual) && <FluidElectrolyteVisual type={submodule.visual} />}
              </>}
              {submodule.visual?.startsWith("acid-") && <AcidBaseVisual type={submodule.visual} />}
              {calciumVisualTypes.includes(submodule.visual) && <CalciumPhosphorusVisual type={submodule.visual} />}
              {enteralVisualTypes.includes(submodule.visual) && <EnteralNutritionVisual type={submodule.visual} />}
              {parenteralVisualTypes.includes(submodule.visual) && <ParenteralNutritionVisual type={submodule.visual} />}
              {parenteralCalculationVisualTypes.includes(submodule.visual) && <ParenteralNutritionCalculationVisual type={submodule.visual} />}
              {pediatricParenteralVisualTypes.includes(submodule.visual) && <PediatricParenteralNutritionVisual type={submodule.visual} />}
              {autonomicVisualTypes.includes(submodule.visual) && <AutonomicNervousSystemVisual type={submodule.visual} />}
              {cholinergicVisualTypes.includes(submodule.visual) && <CholinergicAgonistsVisual type={submodule.visual} />}
              {antimuscarinicVisualTypes.includes(submodule.visual) && <AntimuscarinicVisual type={submodule.visual} />}
              {cholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && <CholinergicMedicinalChemistryVisual type={submodule.visual} />}
              {anticholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && <AnticholinergicMedicinalChemistryVisual type={submodule.visual} />}
              {cholinergicToxicologyVisualTypes.includes(submodule.visual) && <CholinergicToxicologyVisual type={submodule.visual} />}
              {adrenergicAgonistVisualTypes.includes(submodule.visual) && <AdrenergicAgonistsVisual type={submodule.visual} />}
              {adrenergicAntagonistVisualTypes.includes(submodule.visual) && <AdrenergicAntagonistsVisual type={submodule.visual} />}
              {adrenergicMedicinalChemistryVisualTypes.includes(submodule.visual) && <AdrenergicMedicinalChemistryVisual type={submodule.visual} />}
              {diureticPharmacologyVisualTypes.includes(submodule.visual) && <DiureticPharmacologyVisual type={submodule.visual} />}
              {diureticMedicinalChemistryVisualTypes.includes(submodule.visual) && <DiureticMedicinalChemistryVisual type={submodule.visual} />}
              {glaucomaPharmacotherapyVisualTypes.includes(submodule.visual) && <GlaucomaPharmacotherapyVisual type={submodule.visual} />}
              {hypertensionFoundationsVisualTypes.includes(submodule.visual) && <HypertensionFoundationsVisual type={submodule.visual} />}
              {resistantSecondaryHypertensionVisualTypes.includes(submodule.visual) && <ResistantSecondaryHypertensionVisual type={submodule.visual} />}
              {hypertensiveEmergenciesVisualTypes.includes(submodule.visual) && <HypertensiveEmergenciesVisual type={submodule.visual} />}
              {antihypertensiveMedicinalChemistryVisualTypes.includes(submodule.visual) && <AntihypertensiveMedicinalChemistryVisual type={submodule.visual} />}
              {dyslipidemiaRiskVisualTypes.includes(submodule.visual) && <DyslipidemiaRiskVisual type={submodule.visual} />}
              {lipidLoweringPharmacologyVisualTypes.includes(submodule.visual) && <LipidLoweringPharmacologyVisual type={submodule.visual} />}
              {dyslipidemiaTherapeuticsVisualTypes.includes(submodule.visual) && <DyslipidemiaTherapeuticsVisual type={submodule.visual} />}
              {chronicCoronaryDiseaseVisualTypes.includes(submodule.visual) && <ChronicCoronaryDiseaseVisual type={submodule.visual} />}
              {acuteCoronarySyndromesVisualTypes.includes(submodule.visual) && <AcuteCoronarySyndromesVisual type={submodule.visual} />}
              {antiplateletPharmacologyVisualTypes.includes(submodule.visual) && <AntiplateletPharmacologyVisual type={submodule.visual} />}
              {coagulationAnticoagulantVisualTypes.includes(submodule.visual) && <CoagulationAnticoagulantVisual type={submodule.visual} />}
              {venousThromboembolismVisualTypes.includes(submodule.visual) && <VenousThromboembolismVisual type={submodule.visual} />}
              {warfarinManagementVisualTypes.includes(submodule.visual) && <WarfarinManagementVisual type={submodule.visual} />}
              {directOralAnticoagulantsVisualTypes.includes(submodule.visual) && <DirectOralAnticoagulantsVisual type={submodule.visual} />}
              {parenteralAnticoagulantsVisualTypes.includes(submodule.visual) && <ParenteralAnticoagulantsVisual type={submodule.visual} />}
              {ecgInterpretationVisualTypes.includes(submodule.visual) && <EcgInterpretationVisual type={submodule.visual} />}
              {arrhythmiaPathophysiologyVisualTypes.includes(submodule.visual) && <ArrhythmiaPathophysiologyVisual type={submodule.visual} />}
              {atrialArrhythmiasVisualTypes.includes(submodule.visual) && <AtrialArrhythmiasVisual type={submodule.visual} />}
              {ventricularArrhythmiasVisualTypes.includes(submodule.visual) && <VentricularArrhythmiasVisual type={submodule.visual} />}
              {antiarrhythmicPharmacologyVisualTypes.includes(submodule.visual) && <AntiarrhythmicPharmacologyVisual type={submodule.visual} />}
              {heartFailurePathophysiologyVisualTypes.includes(submodule.visual) && <HeartFailurePathophysiologyVisual type={submodule.visual} />}
              {chronicHeartFailureVisualTypes.includes(submodule.visual) && <ChronicHeartFailureVisual type={submodule.visual} />}
              {acuteDecompensatedHeartFailureVisualTypes.includes(submodule.visual) && <AcuteDecompensatedHeartFailureVisual type={submodule.visual} />}
              {heartFailureMedicinalChemistryVisualTypes.includes(submodule.visual) && <HeartFailureMedicinalChemistryVisual type={submodule.visual} />}
              {peripheralArterialDiseaseVisualTypes.includes(submodule.visual) && <PeripheralArterialDiseaseVisual type={submodule.visual} />}
              {acuteIschemicStrokeVisualTypes.includes(submodule.visual) && <AcuteIschemicStrokeVisual type={submodule.visual} />}
              {secondaryStrokePreventionVisualTypes.includes(submodule.visual) && <SecondaryStrokePreventionVisual type={submodule.visual} />}
              {acuteKidneyInjuryVisualTypes.includes(submodule.visual) && <AcuteKidneyInjuryVisual type={submodule.visual} />}
              {chronicKidneyDiseaseVisualTypes.includes(submodule.visual) && <ChronicKidneyDiseaseVisual type={submodule.visual} />}
              {ckdComplicationsVisualTypes.includes(submodule.visual) && <CkdComplicationsVisual type={submodule.visual} />}
              {renalReplacementTherapyVisualTypes.includes(submodule.visual) && <RenalReplacementTherapyVisual type={submodule.visual} />}
              {allergicRhinitisVisualTypes.includes(submodule.visual) && <AllergicRhinitisVisual type={submodule.visual} />}
              {asthmaVisualTypes.includes(submodule.visual) && <AsthmaVisual type={submodule.visual} />}
              {chronicObstructivePulmonaryDiseaseVisualTypes.includes(submodule.visual) && <ChronicObstructivePulmonaryDiseaseVisual type={submodule.visual} />}
              {pulmonaryArterialHypertensionVisualTypes.includes(submodule.visual) && <PulmonaryArterialHypertensionVisual type={submodule.visual} />}
              {cysticFibrosisVisualTypes.includes(submodule.visual) && <CysticFibrosisVisual type={submodule.visual} />}
              {drugInducedPulmonaryDiseaseVisualTypes.includes(submodule.visual) && <DrugInducedPulmonaryDiseaseVisual type={submodule.visual} />}
              {pituitaryPharmacologyVisualTypes.includes(submodule.visual) && <PituitaryPharmacologyVisual type={submodule.visual} />}
              {diabetesPathophysiologyMonitoringVisualTypes.includes(submodule.visual) && <DiabetesPathophysiologyMonitoringVisual type={submodule.visual} />}
              {noninsulinDiabetesPharmacotherapyVisualTypes.includes(submodule.visual) && <NoninsulinDiabetesPharmacotherapyVisual type={submodule.visual} />}
              {insulinTherapyVisualTypes.includes(submodule.visual) && <InsulinTherapyVisual type={submodule.visual} />}
              {diabeticKetoacidosisVisualTypes.includes(submodule.visual) && <DiabeticKetoacidosisVisual type={submodule.visual} />}
              {hyperosmolarHyperglycemicStateVisualTypes.includes(submodule.visual) && <HyperosmolarHyperglycemicStateVisual type={submodule.visual} />}
              {thyroidDisordersVisualTypes.includes(submodule.visual) && <ThyroidDisordersVisual type={submodule.visual} />}
              {thyroidMedicinalChemistryVisualTypes.includes(submodule.visual) && <ThyroidMedicinalChemistryVisual type={submodule.visual} />}
              {adrenalPharmacologyVisualTypes.includes(submodule.visual) && <AdrenalPharmacologyVisual type={submodule.visual} />}
              {cushingSyndromeVisualTypes.includes(submodule.visual) && <CushingSyndromeVisual type={submodule.visual} />}
              {adrenalInsufficiencyVisualTypes.includes(submodule.visual) && <AdrenalInsufficiencyVisual type={submodule.visual} />}
              {gonadalHormonePharmacologyVisualTypes.includes(submodule.visual) && <GonadalHormonePharmacologyVisual type={submodule.visual} />}
              {gynecologicDisordersVisualTypes.includes(submodule.visual) && <GynecologicDisordersVisual type={submodule.visual} />}
              {infertilityOvulationInductionVisualTypes.includes(submodule.visual) && <InfertilityOvulationInductionVisual type={submodule.visual} />}
              {contraceptivePharmacotherapyVisualTypes.includes(submodule.visual) && <ContraceptivePharmacotherapyVisual type={submodule.visual} />}
              {pregnancyLactationPharmacotherapyVisualTypes.includes(submodule.visual) && <PregnancyLactationPharmacotherapyVisual type={submodule.visual} />}
              {menopausalHormoneTherapyVisualTypes.includes(submodule.visual) && <MenopausalHormoneTherapyVisual type={submodule.visual} />}
              {benignProstaticHyperplasiaVisualTypes.includes(submodule.visual) && <BenignProstaticHyperplasiaVisual type={submodule.visual} />}
              {urinaryIncontinenceVisualTypes.includes(submodule.visual) && <UrinaryIncontinenceVisual type={submodule.visual} />}
              {sexualDysfunctionVisualTypes.includes(submodule.visual) && <SexualDysfunctionVisual type={submodule.visual} />}
              {osteoporosisVisualTypes.includes(submodule.visual) && <OsteoporosisVisual type={submodule.visual} />}
              {shockVasoactiveVisualTypes.includes(submodule.visual) && <ShockVasoactiveVisual type={submodule.visual} />}
              {icuAnalgesiaSedationVisualTypes.includes(submodule.visual) && <IcuAnalgesiaSedationVisual type={submodule.visual} />}
              {perioperativeCriticalCareVisualTypes.includes(submodule.visual) && <PerioperativeCriticalCareVisual type={submodule.visual} />}
              {gastroesophagealRefluxDiseaseVisualTypes.includes(submodule.visual) && <GastroesophagealRefluxDiseaseVisual type={submodule.visual} />}
              {pepticUlcerDiseaseVisualTypes.includes(submodule.visual) && <PepticUlcerDiseaseVisual type={submodule.visual} />}
              {irritableBowelSyndromeVisualTypes.includes(submodule.visual) && <IrritableBowelSyndromeVisual type={submodule.visual} />}
              {chronicIdiopathicConstipationVisualTypes.includes(submodule.visual) && <ChronicIdiopathicConstipationVisual type={submodule.visual} />}
              {diarrheaAssessmentVisualTypes.includes(submodule.visual) && <DiarrheaAssessmentVisual type={submodule.visual} />}
              {inflammatoryBowelDiseaseVisualTypes.includes(submodule.visual) && <InflammatoryBowelDiseaseVisual type={submodule.visual} />}
              {motionSicknessVisualTypes.includes(submodule.visual) && <MotionSicknessVisual type={submodule.visual} />}
              {medicationSafetyQualityVisualTypes.includes(submodule.visual) && <MedicationSafetyQualityVisual type={submodule.visual} />}
              {infectionPreventionControlVisualTypes.includes(submodule.visual) && <InfectionPreventionControlVisual type={submodule.visual} />}
              {drugAllergiesAdverseReactionsVisualTypes.includes(submodule.visual) && <DrugAllergiesAdverseReactionsVisual type={submodule.visual} />}
              {pharmacokineticsVisualTypes.includes(submodule.visual) && <PharmacokineticsVisual type={submodule.visual} />}
              {pharmacogenomicsVisualTypes.includes(submodule.visual) && <PharmacogenomicsVisual type={submodule.visual} />}
              {dietarySupplementsVisualTypes.includes(submodule.visual) && <DietarySupplementsComplementaryMedicineVisual type={submodule.visual} />}
              {clinicalDrugInteractionsVisualTypes.includes(submodule.visual) && <ClinicalDrugInteractionsVisual type={submodule.visual} />}
              {toxicologyAntidotesVisualTypes.includes(submodule.visual) && <ToxicologyAntidotesVisual type={submodule.visual} />}
              {tobaccoUseCessationVisualTypes.includes(submodule.visual) && <TobaccoUseCessationVisual type={submodule.visual} />}
              {systemicGlucocorticoidsVisualTypes.includes(submodule.visual) && <SystemicGlucocorticoidsVisual type={submodule.visual} />}
              {rheumatoidArthritisVisualTypes.includes(submodule.visual) && <RheumatoidArthritisVisual type={submodule.visual} />}
              {systemicLupusErythematosusVisualTypes.includes(submodule.visual) && <SystemicLupusErythematosusVisual type={submodule.visual} />}
              {multipleSclerosisVisualTypes.includes(submodule.visual) && <MultipleSclerosisVisual type={submodule.visual} />}
              {raynaudPhenomenonVisualTypes.includes(submodule.visual) && <RaynaudPhenomenonVisual type={submodule.visual} />}
              {celiacDiseaseVisualTypes.includes(submodule.visual) && <CeliacDiseaseVisual type={submodule.visual} />}
              {myastheniaGravisVisualTypes.includes(submodule.visual) && <MyastheniaGravisVisual type={submodule.visual} />}
              {sjogrenDiseaseVisualTypes.includes(submodule.visual) && <SjogrenDiseaseVisual type={submodule.visual} />}
              {psoriasisVisualTypes.includes(submodule.visual) && <PsoriasisVisual type={submodule.visual} />}
              {genitourinaryMedicinalChemistryVisualTypes.includes(submodule.visual) && <GenitourinaryMedicinalChemistryVisual type={submodule.visual} />}
              {vaginitisVulvovaginalVisualTypes.includes(submodule.visual) && <VaginitisVulvovaginalVisual type={submodule.visual} />}
              {cervicitisPelvicInflammatoryDiseaseVisualTypes.includes(submodule.visual) && <CervicitisPelvicInflammatoryDiseaseVisual type={submodule.visual} />}
              {gynecologicOncologyVisualTypes.includes(submodule.visual) && <GynecologicOncologyVisual type={submodule.visual} />}
              {pelvicOrganProlapseFistulaCareVisualTypes.includes(submodule.visual) && <PelvicOrganProlapseFistulaCareVisual type={submodule.visual} />}
              {genderAffirmingHormoneCareVisualTypes.includes(submodule.visual) && <GenderAffirmingHormoneCareVisual type={submodule.visual} />}
              {immunoglobulinTherapyVisualTypes.includes(submodule.visual) && <ImmunoglobulinTherapyVisual type={submodule.visual} />}
              {anemiaVisualTypes.includes(submodule.visual) && <AnemiaVisual type={submodule.visual} />}
              {sickleCellDiseaseVisualTypes.includes(submodule.visual) && <SickleCellDiseaseVisual type={submodule.visual} />}
              {coughCommonColdVisualTypes.includes(submodule.visual) && <CoughCommonColdVisual type={submodule.visual} />}
              {commonEyeConditionsVisualTypes.includes(submodule.visual) && <CommonEyeConditionsVisual type={submodule.visual} />}
              {commonEarConditionsVisualTypes.includes(submodule.visual) && <CommonEarConditionsVisual type={submodule.visual} />}
              {acneVisualTypes.includes(submodule.visual) && <AcneVisual type={submodule.visual} />}
              {atopicDermatitisVisualTypes.includes(submodule.visual) && <AtopicDermatitisVisual type={submodule.visual} />}
              {superficialFungalSkinInfectionsVisualTypes.includes(submodule.visual) && <SuperficialFungalSkinInfectionsVisual type={submodule.visual} />}
              {liceScabiesVisualTypes.includes(submodule.visual) && <LiceScabiesVisual type={submodule.visual} />}
              {minorWoundCareVisualTypes.includes(submodule.visual) && <MinorWoundCareVisual type={submodule.visual} />}
              {animalHumanBitesVisualTypes.includes(submodule.visual) && <AnimalHumanBitesVisual type={submodule.visual} />}
              {burnAssessmentInitialCareVisualTypes.includes(submodule.visual) && <BurnAssessmentInitialCareVisual type={submodule.visual} />}
              {poisonPlantDermatitisVisualTypes.includes(submodule.visual) && <PoisonPlantDermatitisVisual type={submodule.visual} />}
              {topicalCorticosteroidVisualTypes.includes(submodule.visual) && <TopicalCorticosteroidVisual type={submodule.visual} />}
              {sunscreenPhotoprotectionVisualTypes.includes(submodule.visual) && <SunscreenPhotoprotectionVisual type={submodule.visual} />}
              {herpesLabialisVisualTypes.includes(submodule.visual) && <HerpesLabialisVisual type={submodule.visual} />}
              {seborrheicDermatitisVisualTypes.includes(submodule.visual) && <SeborrheicDermatitisVisual type={submodule.visual} />}
              {alopeciaVisualTypes.includes(submodule.visual) && <AlopeciaVisual type={submodule.visual} />}
              {diaperDermatitisVisualTypes.includes(submodule.visual) && <DiaperDermatitisVisual type={submodule.visual} />}
              {hyperhidrosisVisualTypes.includes(submodule.visual) && <HyperhidrosisVisual type={submodule.visual} />}
              {hemorrhoidsVisualTypes.includes(submodule.visual) && <HemorrhoidsVisual type={submodule.visual} />}
              {pinwormInfectionVisualTypes.includes(submodule.visual) && <PinwormInfectionVisual type={submodule.visual} />}
              {travelHealthPlanningVisualTypes.includes(submodule.visual) && <TravelHealthPlanningVisual type={submodule.visual} />}
              {antimicrobialFoundationsStewardshipVisualTypes.includes(submodule.visual) && <AntimicrobialFoundationsStewardshipVisual type={submodule.visual} />}
              </>}
              {module.slug === "beta-lactam-pharmacology" && betaLactamPharmacologyVisualTypes.includes(submodule.visual) && <BetaLactamPharmacologyVisual type={submodule.visual} />}
              {module.slug === "aminoglycoside-pharmacology" && aminoglycosidePharmacologyVisualTypes.includes(submodule.visual) && <AminoglycosidePharmacologyVisual type={submodule.visual} />}
              {module.slug === "fluoroquinolone-pharmacology" && fluoroquinolonePharmacologyVisualTypes.includes(submodule.visual) && <FluoroquinolonePharmacologyVisual type={submodule.visual} />}
              {module.slug === "macrolide-pharmacology" && macrolidePharmacologyVisualTypes.includes(submodule.visual) && <MacrolidePharmacologyVisual type={submodule.visual} />}
              {module.slug === "tetracycline-pharmacology" && tetracyclinePharmacologyVisualTypes.includes(submodule.visual) && <TetracyclinePharmacologyVisual type={submodule.visual} />}
              {module.slug === "sulfonamide-trimethoprim-pharmacology" && sulfonamideTrimethoprimPharmacologyVisualTypes.includes(submodule.visual) && <SulfonamideTrimethoprimPharmacologyVisual type={submodule.visual} />}
              {module.slug === "vancomycin-pharmacology" && vancomycinPharmacologyVisualTypes.includes(submodule.visual) && <VancomycinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "daptomycin-pharmacology" && daptomycinPharmacologyVisualTypes.includes(submodule.visual) && <DaptomycinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "linezolid-tedizolid-pharmacology" && linezolidTedizolidPharmacologyVisualTypes.includes(submodule.visual) && <LinezolidTedizolidPharmacologyVisual type={submodule.visual} />}
              {module.slug === "tigecycline-pharmacology" && tigecyclinePharmacologyVisualTypes.includes(submodule.visual) && <TigecyclinePharmacologyVisual type={submodule.visual} />}
              {module.slug === "polymyxin-pharmacology" && polymyxinPharmacologyVisualTypes.includes(submodule.visual) && <PolymyxinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "clindamycin-pharmacology" && clindamycinPharmacologyVisualTypes.includes(submodule.visual) && <ClindamycinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "nitroimidazole-pharmacology" && nitroimidazolePharmacologyVisualTypes.includes(submodule.visual) && <NitroimidazolePharmacologyVisual type={submodule.visual} />}
              {module.slug === "lefamulin-pharmacology" && lefamulinPharmacologyVisualTypes.includes(submodule.visual) && <LefamulinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "fidaxomicin-pharmacology" && fidaxomicinPharmacologyVisualTypes.includes(submodule.visual) && <FidaxomicinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "rifaximin-pharmacology" && rifaximinPharmacologyVisualTypes.includes(submodule.visual) && <RifaximinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "fosfomycin-pharmacology" && fosfomycinPharmacologyVisualTypes.includes(submodule.visual) && <FosfomycinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "nitrofurantoin-pharmacology" && nitrofurantoinPharmacologyVisualTypes.includes(submodule.visual) && <NitrofurantoinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "mupirocin-decolonization" && mupirocinDecolonizationVisualTypes.includes(submodule.visual) && <MupirocinDecolonizationVisual type={submodule.visual} />}
              {module.slug === "perioperative-antimicrobial-prophylaxis" && perioperativeAntimicrobialProphylaxisVisualTypes.includes(submodule.visual) && <PerioperativeAntimicrobialProphylaxisVisual type={submodule.visual} />}
              {module.slug === "acute-bacterial-meningitis" && acuteBacterialMeningitisVisualTypes.includes(submodule.visual) && <AcuteBacterialMeningitisVisual type={submodule.visual} />}
              {module.slug === "acute-otitis-media" && acuteOtitisMediaVisualTypes.includes(submodule.visual) && <AcuteOtitisMediaVisual type={submodule.visual} />}
              {module.slug === "streptococcal-pharyngitis" && streptococcalPharyngitisVisualTypes.includes(submodule.visual) && <StreptococcalPharyngitisVisual type={submodule.visual} />}
              {module.slug === "acute-bacterial-rhinosinusitis" && acuteBacterialRhinosinusitisVisualTypes.includes(submodule.visual) && <AcuteBacterialRhinosinusitisVisual type={submodule.visual} />}
              {module.slug === "community-acquired-pneumonia-adults" && communityAcquiredPneumoniaAdultsVisualTypes.includes(submodule.visual) && <CommunityAcquiredPneumoniaAdultsVisual type={submodule.visual} />}
              {module.slug === "hospital-ventilator-associated-pneumonia" && hospitalVentilatorAssociatedPneumoniaVisualTypes.includes(submodule.visual) && <HospitalVentilatorAssociatedPneumoniaVisual type={submodule.visual} />}
              {module.slug === "tuberculosis" && tuberculosisVisualTypes.includes(submodule.visual) && <TuberculosisVisual type={submodule.visual} />}
              {module.slug === "infective-endocarditis" && infectiveEndocarditisVisualTypes.includes(submodule.visual) && <InfectiveEndocarditisVisual type={submodule.visual} />}
              {module.slug === "intra-abdominal-infections" && intraAbdominalInfectionsVisualTypes.includes(submodule.visual) && <IntraAbdominalInfectionsVisual type={submodule.visual} />}
              {module.slug === "skin-soft-tissue-infections" && skinSoftTissueInfectionsVisualTypes.includes(submodule.visual) && <SkinSoftTissueInfectionsVisual type={submodule.visual} />}
              {module.slug === "urinary-tract-infections" && urinaryTractInfectionsVisualTypes.includes(submodule.visual) && <UrinaryTractInfectionsVisual type={submodule.visual} />}
              {module.slug === "clostridioides-difficile-infection" && clostridioidesDifficileInfectionVisualTypes.includes(submodule.visual) && <ClostridioidesDifficileInfectionVisual type={submodule.visual} />}
              {module.slug === "travelers-diarrhea" && travelersDiarrheaVisualTypes.includes(submodule.visual) && <TravelersDiarrheaVisual type={submodule.visual} />}
              {module.slug === "syphilis" && syphilisVisualTypes.includes(submodule.visual) && <SyphilisVisual type={submodule.visual} />}
              {module.slug === "gonococcal-infections" && gonococcalInfectionsVisualTypes.includes(submodule.visual) && <GonococcalInfectionsVisual type={submodule.visual} />}
              {module.slug === "chlamydial-infections" && chlamydialInfectionsVisualTypes.includes(submodule.visual) && <ChlamydialInfectionsVisual type={submodule.visual} />}
              {module.slug === "genital-herpes" && genitalHerpesVisualTypes.includes(submodule.visual) && <GenitalHerpesVisual type={submodule.visual} />}
              {module.slug === "anogenital-hpv-warts" && anogenitalHpvWartsVisualTypes.includes(submodule.visual) && <AnogenitalHpvWartsVisual type={submodule.visual} />}
              {module.slug === "rickettsial-ehrlichial-anaplasma-infections" && rickettsialEhrlichialAnaplasmaVisualTypes.includes(submodule.visual) && <RickettsialEhrlichialAnaplasmaVisual type={submodule.visual} />}
              {module.slug === "lyme-disease" && lymeDiseaseVisualTypes.includes(submodule.visual) && <LymeDiseaseVisual type={submodule.visual} />}
              {module.slug === "tularemia" && tularemiaVisualTypes.includes(submodule.visual) && <TularemiaVisual type={submodule.visual} />}
              {module.slug === "systemic-antifungal-foundations" && systemicAntifungalFoundationsVisualTypes.includes(submodule.visual) && <SystemicAntifungalFoundationsVisual type={submodule.visual} />}
              {module.slug === "amphotericin-flucytosine-pharmacology" && amphotericinFlucytosinePharmacologyVisualTypes.includes(submodule.visual) && <AmphotericinFlucytosinePharmacologyVisual type={submodule.visual} />}
              {module.slug === "triazole-antifungal-pharmacology" && triazoleAntifungalPharmacologyVisualTypes.includes(submodule.visual) && <TriazoleAntifungalPharmacologyVisual type={submodule.visual} />}
              {module.slug === "echinocandin-pharmacology" && echinocandinPharmacologyVisualTypes.includes(submodule.visual) && <EchinocandinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "terbinafine-griseofulvin-pharmacology" && terbinafineGriseofulvinPharmacologyVisualTypes.includes(submodule.visual) && <TerbinafineGriseofulvinPharmacologyVisual type={submodule.visual} />}
              {module.slug === "local-oropharyngeal-antifungal-pharmacology" && localOropharyngealAntifungalPharmacologyVisualTypes.includes(submodule.visual) && <LocalOropharyngealAntifungalPharmacologyVisual type={submodule.visual} />}
              {module.slug === "influenza-antiviral-pharmacology" && influenzaAntiviralPharmacologyVisualTypes.includes(submodule.visual) && <InfluenzaAntiviralPharmacologyVisual type={submodule.visual} />}
              {module.slug === "herpes-simplex-varicella-antiviral-pharmacology" && herpesSimplexVaricellaAntiviralPharmacologyVisualTypes.includes(submodule.visual) && <HerpesSimplexVaricellaAntiviralPharmacologyVisual type={submodule.visual} />}
              {module.slug === "cytomegalovirus-pharmacotherapy" && cytomegalovirusPharmacotherapyVisualTypes.includes(submodule.visual) && <CytomegalovirusPharmacotherapyVisual type={submodule.visual} />}
              {module.slug === "pneumocystis-jirovecii-pneumonia" && pneumocystisJiroveciiPneumoniaVisualTypes.includes(submodule.visual) && <PneumocystisJiroveciiPneumoniaVisual type={submodule.visual} />}
              {module.slug === "hiv-foundations-diagnosis-care" && hivFoundationsCareVisualTypes.includes(submodule.visual) && <HivFoundationsCareVisual type={submodule.visual} />}
              {module.slug === "nucleoside-reverse-transcriptase-inhibitors" && nucleosideReverseTranscriptaseInhibitorVisualTypes.includes(submodule.visual) && <NucleosideReverseTranscriptaseInhibitorVisual type={submodule.visual} />}
              {module.slug === "non-nucleoside-reverse-transcriptase-inhibitors" && nonNucleosideReverseTranscriptaseInhibitorVisualTypes.includes(submodule.visual) && <NonNucleosideReverseTranscriptaseInhibitorVisual type={submodule.visual} />}
              {module.slug === "hiv-protease-inhibitors" && hivProteaseInhibitorVisualTypes.includes(submodule.visual) && <HivProteaseInhibitorVisual type={submodule.visual} />}
              {module.slug === "hiv-entry-attachment-inhibitors" && hivEntryAttachmentInhibitorVisualTypes.includes(submodule.visual) && <HivEntryAttachmentInhibitorVisual type={submodule.visual} />}
              {module.slug === "integrase-strand-transfer-inhibitors" && integraseStrandTransferInhibitorVisualTypes.includes(submodule.visual) && <IntegraseStrandTransferInhibitorVisual type={submodule.visual} />}
              {module.slug === "hiv-prevention-prep-pep" && hivPreventionPrepPepVisualTypes.includes(submodule.visual) && <HivPreventionPrepPepVisual type={submodule.visual} />}
              {module.slug === "disseminated-mycobacterium-avium-complex" && disseminatedMacVisualTypes.includes(submodule.visual) && <DisseminatedMacVisual type={submodule.visual} />}
              {module.slug === "toxoplasma-gondii-encephalitis" && toxoplasmaEncephalitisVisualTypes.includes(submodule.visual) && <ToxoplasmaEncephalitisVisual type={submodule.visual} />}
              {module.slug === "cryptococcal-meningitis" && cryptococcalMeningitisVisualTypes.includes(submodule.visual) && <CryptococcalMeningitisVisual type={submodule.visual} />}
              {module.slug === "histoplasmosis" && histoplasmosisVisualTypes.includes(submodule.visual) && <HistoplasmosisVisual type={submodule.visual} />}
              {module.slug === "mucosal-esophageal-candidiasis" && mucosalEsophagealCandidiasisVisualTypes.includes(submodule.visual) && <MucosalEsophagealCandidiasisVisual type={submodule.visual} />}
              {module.slug === "coccidioidomycosis" && coccidioidomycosisVisualTypes.includes(submodule.visual) && <CoccidioidomycosisVisual type={submodule.visual} />}
              {module.slug === "blastomycosis" && blastomycosisVisualTypes.includes(submodule.visual) && <BlastomycosisVisual type={submodule.visual} />}
              {module.slug === "aspergillosis" && aspergillosisVisualTypes.includes(submodule.visual) && <AspergillosisVisual type={submodule.visual} />}
              {module.slug === "mucormycosis" && mucormycosisVisualTypes.includes(submodule.visual) && <MucormycosisVisual type={submodule.visual} />}
              {module.slug === "candidemia-invasive-candidiasis" && invasiveCandidiasisVisualTypes.includes(submodule.visual) && <InvasiveCandidiasisVisual type={submodule.visual} />}
              {module.slug === "chronic-hepatitis-b" && chronicHepatitisBVisualTypes.includes(submodule.visual) && <ChronicHepatitisBVisual type={submodule.visual} />}
              {module.slug === "hepatitis-c" && hepatitisCVisualTypes.includes(submodule.visual) && <HepatitisCVisual type={submodule.visual} />}
              {module.slug === "cirrhosis-decompensated-liver-disease" && cirrhosisDecompensatedVisualTypes.includes(submodule.visual) && <CirrhosisDecompensatedVisual type={submodule.visual} />}
              {module.slug === "metabolic-dysfunction-associated-steatotic-liver-disease" && masldVisualTypes.includes(submodule.visual) && <MasldVisual type={submodule.visual} />}
              {module.slug === "nonsteroidal-anti-inflammatory-drug-pharmacology" && nonsteroidalAntiInflammatoryDrugVisualTypes.includes(submodule.visual) && <NonsteroidalAntiInflammatoryDrugVisual type={submodule.visual} />}
              {module.slug === "alcohol-associated-liver-disease" && alcoholAssociatedLiverDiseaseVisualTypes.includes(submodule.visual) && <AlcoholAssociatedLiverDiseaseVisual type={submodule.visual} />}
              {module.slug === "drug-induced-liver-injury" && drugInducedLiverInjuryVisualTypes.includes(submodule.visual) && <DrugInducedLiverInjuryVisual type={submodule.visual} />}
              {module.slug === "acute-liver-failure" && acuteLiverFailureVisualTypes.includes(submodule.visual) && <AcuteLiverFailureVisual type={submodule.visual} />}
              {module.slug === "major-depressive-disorder" && majorDepressiveDisorderVisualTypes.includes(submodule.visual) && <MajorDepressiveDisorderVisual type={submodule.visual} />}
              {module.slug === "schizophrenia-psychosis" && schizophreniaPsychosisVisualTypes.includes(submodule.visual) && <SchizophreniaPsychosisVisual type={submodule.visual} />}
              {module.slug === "bipolar-disorder" && bipolarDisorderVisualTypes.includes(submodule.visual) && <BipolarDisorderVisual type={submodule.visual} />}
              {module.slug === "attention-deficit-hyperactivity-disorder" && attentionDeficitHyperactivityDisorderVisualTypes.includes(submodule.visual) && <AttentionDeficitHyperactivityDisorderVisual type={submodule.visual} />}
              {module.slug === "anxiety-disorders" && anxietyDisordersVisualTypes.includes(submodule.visual) && <AnxietyDisordersVisual type={submodule.visual} />}
              {module.slug === "sleep-disorders" && sleepDisordersVisualTypes.includes(submodule.visual) && <SleepDisordersVisual type={submodule.visual} />}
              {module.slug === "parkinson-disease" && parkinsonDiseaseVisualTypes.includes(submodule.visual) && <ParkinsonDiseaseVisual type={submodule.visual} />}
              {module.slug === "alzheimer-disease-related-dementias" && alzheimerDiseaseDementiasVisualTypes.includes(submodule.visual) && <AlzheimerDiseaseDementiasVisual type={submodule.visual} />}
              {module.slug === "seizures-epilepsy" && seizuresEpilepsyVisualTypes.includes(submodule.visual) && <SeizuresEpilepsyVisual type={submodule.visual} />}
              {submodule.lesson && <div className="pharmacy-submodule__lesson">
                {submodule.lesson.map((section) => <section key={section.heading}>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </section>)}
                {submodule.keyPoints && <aside>
                  <span>Decision points</span>
                  <ul>{submodule.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul>
                </aside>}
              </div>}
              {study && <div className="pharmacy-submodule__study">
                <div className="pharmacy-submodule__study-heading">
                  <span>High-yield study notes</span>
                  <p>{study.sourceTopics.join(" · ")}</p>
                </div>
                <div className="pharmacy-submodule__study-grid">
                  {study.mustKnow.map((point, pointIndex) => <article key={point}><span>{String(pointIndex + 1).padStart(2, "0")}</span><p>{point}</p></article>)}
                </div>
                <aside className="pharmacy-submodule__exam-focus">
                  <span>NAPLEX focus</span>
                  <ul>{study.examFocus.map((point) => <li key={point}>{point}</li>)}</ul>
                </aside>
              </div>}
              <aside className="pharmacy-submodule__application"><span>Clinical lens</span><p>{submodule.application}</p></aside>
              {submodule.href && <Link className="pharmacy-submodule__guide" href={submodule.href}>Open the full study guide <span aria-hidden="true">↗</span></Link>}
              {submodule.lesson && <div className="pharmacy-submodule__check">
                <p className="nas-section-label">Quick check</p>
                <PharmacyAssessment questions={[{ ...submodule.check, id: `${module.slug}-${submodule.slug}-check` }]} compact moduleId={`${module.slug}:${submodule.slug}`} />
              </div>}
                </>;
              })()}
            </section>
          ))}

          <section className="pharmacy-module-test" id="module-test">
            <p className="nas-section-label">Module test</p>
            <h2>Check the connections.</h2>
            <p>{module.questionBank ? `Each attempt draws 10 questions from the complete ${module.questionBank.length} question bank.` : "Answer one question from each lesson. Submit the full set to reveal the reasoning."}</p>
            <PharmacyAssessment questions={questions} compact moduleId={module.slug} questionCount={module.questionBank ? 10 : questions.length} randomize={Boolean(module.questionBank)} />
          </section>

          {module.references && <section className="pharmacy-module-references" aria-labelledby="module-references-title">
            <p className="nas-section-label">References</p>
            <h2 id="module-references-title">Current clinical foundation.</h2>
            <p>Core source material was synthesized with the following contemporary guidance. Verify local policy and current guidance before applying clinical information.</p>
            <ol>{module.references.map((reference) => <li key={reference.href}><a href={reference.href} target="_blank" rel="noreferrer">{reference.label}<span aria-hidden="true">↗</span></a></li>)}</ol>
          </section>}

          <nav className="pharmacy-module-sequence" aria-label="Module sequence">
            {previous ? <Link href={`/learn/pharmacy/modules/${previous.slug}`}><span>Previous</span><strong>{previous.title}</strong></Link> : <span />}
            {next ? <Link href={`/learn/pharmacy/modules/${next.slug}`}><span>Next</span><strong>{next.title}</strong></Link> : <Link href="/learn/pharmacy/review"><span>Next</span><strong>Final review</strong></Link>}
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
}
