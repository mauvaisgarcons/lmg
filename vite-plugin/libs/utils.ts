/**
 * Convert a hex color string to HSL format.
 * @param hex - Hex color string (e.g. "#ff0000" or "ff0000")
 * @returns An object containing HSL values
 */
export function hexToHSL(hex: string): { h: number; s: number; l: number } {
    hex = hex.replace(/^#/, '');
  
    let r: number, g: number, b: number;
  
    // Parse the hex color
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    } else {
      throw new Error('Invalid HEX color.');
    }
  
    // Normalize RGB values
    r /= 255;
    g /= 255;
    b /= 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number, s: number, l: number = (max + min) / 2;
  
    // Calculate HSL values
    if (max === min) {
      h = s = 0; // Achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
  
      h /= 6;
    }
  
    // Convert to percentages
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
  
    return { h, s, l };
  }