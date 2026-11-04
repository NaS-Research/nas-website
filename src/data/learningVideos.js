// Last verified public regular Videos tab and subject-playlist snapshot, reverified 2026-11-02.
// Runtime refreshes hourly; see docs/learn-video-feed-policy.md.
import { verifiedFallback } from '../lib/learningVideoCollection.mjs';
const reviewedLearningVideos = [
  {
    "id": "QtJ11zS1uHQ",
    "title": "Asthma Track 2: Relievers, Controllers and ICS–SABA | GINA 2026",
    "description": "Quick relief and control of airway inflammation are different jobs.",
    "publishedAt": "2026-11-01T16:00:26+00:00",
    "subject": "Pharmacology",
    "format": "regular",
    "subjectPlaylistId": "PLXbt4CC9ZiBg"
  },
  {
    "id": "28zwXoBpzsw",
    "title": "Asthma Track 1: AIR-only, MART and Inhaler Options | GINA 2026",
    "description": "Why can one prescribed inhaler have one role—or two?",
    "publishedAt": "2026-11-01T01:54:38+00:00",
    "subject": "Pharmacology",
    "format": "regular",
    "subjectPlaylistId": "PLXbt4CC9ZiBg"
  },
  {
    "id": "4UXz8KnGvSo",
    "title": "How Heart Muscle Works: Filling, Pumping & Timing",
    "description": "One heartbeat depends on teamwork. Atrial muscle helps with filling, ventricular muscle provides the main pumping force, and specialized heart muscle cells help organize electrical timing.",
    "publishedAt": "2026-10-30T05:11:44+00:00",
    "subject": "Life Sciences Fundamentals",
    "format": "regular",
    "subjectPlaylistId": "PLMBgDyxRzUag"
  },
  {
    "id": "Q42HJYwdXXk",
    "title": "Inside a Blood Vessel: Red Cells, White Cells, Platelets & Plasma",
    "description": "What would you notice if you could travel inside your own blood?",
    "publishedAt": "2026-10-28T13:13:13+00:00",
    "subject": "Life Sciences Fundamentals",
    "format": "regular",
    "subjectPlaylistId": "PLMBgDyxRzUag"
  },
  {
    "id": "HNftmft7T0s",
    "title": "How the Heart Works: Chambers, Valves & Blood Flow",
    "subject": "Life Sciences Fundamentals",
    "description": "Follow blood through the heart, lungs, and body. Explore how chambers and valves keep circulation moving.",
    "publishedAt": "2026-10-08T16:10:40+00:00",
    "format": "regular",
    "subjectPlaylistId": "PLMBgDyxRzUag"
  },
  {
    "id": "TyBZvTlBrys",
    "title": "Agonists vs Antagonists: How Drugs Activate or Block Receptors",
    "subject": "Pharmacology",
    "description": "Explore how agonists activate receptors and antagonists block agonist action, and why binding and activation differ.",
    "publishedAt": "2026-10-05T22:40:35+00:00",
    "format": "regular",
    "subjectPlaylistId": "PLXbt4CC9ZiBg"
  },
  {
    "id": "wMJuoJkX5eM",
    "title": "Ionotropic vs Metabotropic Receptors: Gate or Relay?",
    "subject": "Pharmacology",
    "duration": "2:38",
    "description": "Two ways receptors turn a signal into a response: an ion channel or a cellular relay.",
    "publishedAt": "2026-10-04T17:07:28+00:00",
    "format": "regular",
    "subjectPlaylistId": "PLXbt4CC9ZiBg"
  },
  {
    "id": "e3WmNwY95h0",
    "title": "How Opioids Work: Pain Relief, Breathing Risk & Naloxone",
    "subject": "Pharmacology",
    "duration": "4:06",
    "description": "Explore opioid action, respiratory depression, and the role of naloxone.",
    "publishedAt": "2026-10-02T03:49:07+00:00",
    "format": "regular",
    "subjectPlaylistId": "PLXbt4CC9ZiBg"
  },
  {
    "id": "zdM7I6EG8kY",
    "title": "What Are the Life Sciences? A Simple Introduction",
    "subject": "Life Sciences Fundamentals",
    "duration": "4:25",
    "description": "An introduction to the fields that study life, from molecules to living systems.",
    "publishedAt": "2026-09-28T21:51:39+00:00",
    "format": "regular",
    "subjectPlaylistId": "PLMBgDyxRzUag"
  }
];
export const learningVideos = verifiedFallback(reviewedLearningVideos, Number.POSITIVE_INFINITY);
export const learningChannelUrl = "https://www.youtube.com/@NaS_Research";
export const videoWatchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
