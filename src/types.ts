export interface BenchmarkItem {
  id: string;
  name: string;
  category: 'coding' | 'reasoning' | 'knowledge' | 'science' | 'agents';
  description: string;
  metric: string;
  fable51: number;
  mythos51: number;
  fable5: number;
  opus5: number;
  gpt56Sol: number;
  gemini25Ultra: number;
  unit: '%' | 'Elo' | 'Score';
  higherIsBetter: boolean;
  notes?: string;
}

export interface PricingTier {
  model: string;
  inputPerMillion: number;
  cacheWritePerMillion: number;
  cacheReadPerMillion: number;
  outputPerMillion: number;
  contextWindow: string;
  maxOutput: string;
}

export interface SafeguardFeature {
  title: string;
  fable51: string;
  mythos51: string;
  description: string;
}
