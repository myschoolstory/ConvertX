export interface ConversionSettings {
  compression: number;
  losslessMode: boolean;
}

export interface ConverterState {
  originalFile: File | null;
  originalPreview: string | null;
  convertedPreview: string | null;
  converting: boolean;
  errorMessage: string | null;
  showComparison: boolean;
}