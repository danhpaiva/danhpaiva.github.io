// ─── Accent color palette shared across sections ────────────────────────────
export type AccentColor = 'blue' | 'cyan' | 'green' | 'purple' | 'orange';

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── Hero / Personal ─────────────────────────────────────────────────────────
export interface HeroTag {
  label: string;
  color?: AccentColor;
}

export interface SocialLink {
  label: string;
  href: string;
  /** Raw SVG string */
  icon: string;
}

// ─── About ───────────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  /** Se informado, o valor é calculado em runtime: (anoAtual - startYear)+ */
  startYear?: number;
}

export interface LocationInfo {
  city: string;
  region: string;
  workMode: string;
  workModeDetail: string;
}

export interface AboutLink {
  label: string;
  href: string;
  /** Raw SVG string */
  icon: string;
}

// ─── Experience ──────────────────────────────────────────────────────────────
export interface Job {
  role: string;
  /** Secondary title shown after a · separator */
  subtitle: string;
  company: string;
  /** Human-readable date range, e.g. "Jan 2026 — Presente" */
  period: string;
  /** Human-readable duration, e.g. "6 meses" */
  duration: string;
  location: string;
  current: boolean;
  color: AccentColor;
  /** HTML strings — <strong> tags allowed for emphasis */
  highlights: string[];
  stack: string[];
}

// ─── Skills ──────────────────────────────────────────────────────────────────
export interface Skill {
  name: string;
  /** 0–100 proficiency percentage */
  level: number;
}

export interface SkillGroup {
  category: string;
  /** Emoji icon */
  icon: string;
  color: AccentColor;
  skills: Skill[];
}

// ─── Education ───────────────────────────────────────────────────────────────
export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  /** Human-readable date range */
  period: string;
  /** Short level label, e.g. "Specialist" */
  level: string;
  color: AccentColor;
  /** Emoji icon */
  icon: string;
  skills: string[];
  description: string;
}

// ─── Contact ─────────────────────────────────────────────────────────────────
export interface ContactLink {
  label: string;
  value: string;
  href: string;
  /** Raw SVG string */
  icon: string;
  color: AccentColor;
  primary: boolean;
}
