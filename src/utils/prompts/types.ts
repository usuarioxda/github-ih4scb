export interface PromptEvaluationResult {
  score: number;
  details: PromptDetails;
  feedback: string[];
  analysis: {
    context: PromptContext;
    semantics: SemanticAnalysis;
    structure: StructureAnalysis;
  };
}

export interface PromptDetails {
  detailLevel: number;
  clarity: number;
  specificity: number;
}

export interface PromptContext {
  area: string;
  level: string;
  purpose: string;
}

export interface SemanticAnalysis {
  clarity: number;
  coherence: number;
  relevance: number;
  intentionality: number;
}

export interface StructureAnalysis {
  format: string;
  complexity: number;
  organization: number;
  completeness: number;
}

export type PromptType = 
  | 'creative'
  | 'technical'
  | 'analytical'
  | 'descriptive';

export type AnalysisLevel = 'basic' | 'intermediate' | 'advanced';