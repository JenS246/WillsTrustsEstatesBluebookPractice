export enum View {
  DASHBOARD = 'DASHBOARD',
  WILLS = 'WILLS',
  TRUSTS = 'TRUSTS',
  ESTATES = 'ESTATES',
  BLUEBOOK = 'BLUEBOOK',
  TECH = 'TECH',
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface DraftingScenario {
  id: string;
  title: string;
  instruction: string;
  context: string;
  modelAnswer: string;
  keyPoints: string[];
}

export interface CitationChallenge {
  id: string;
  sourceDescription: string;
  correctCitation: string;
  hint: string;
}

export interface SoftwareItem {
  name: string;
  category: string;
  description: string;
  relevance: string;
}
