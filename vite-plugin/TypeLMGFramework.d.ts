
// Define the structure of a color object
export interface Color {
  background: string;
  foreground: string;
}

// Define the structure of the theme object
export interface Theme {
  breakpoints: Record<string, string>;
  colors: Record<string, Color>;
  fonts: {
    base:  Record<string, string>;
  }
}

export interface LMGFrameworkConfig {
  output?: {
    config?: string;
    root?: string;
  };
}