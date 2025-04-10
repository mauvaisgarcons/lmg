import * as path from 'path';
import * as fs from 'fs';
import { Theme, Js2ScssConfig } from './TypeJs2Scss';
import { hexToHSL } from './utils';

// Main function to generate SCSS configuration
export default function Js2Scss(config: Js2ScssConfig) {

  return {
    name: 'lmg-js2scss',
    buildStart() {
      const scriptPath = path.resolve(process.cwd(), 'theme.config.js');
      // Load the JavaScript configuration file
      // Check if the con/figuration file exists
      if (!fs.existsSync(scriptPath)) {
        console.log(`Warning: File not found: ${scriptPath}`);
      } else {
        import('./theme.config.js').then((module) => () => {
            // Convert the theme object to SCSS format
            const scssConfig = convertConfigToScss(module.default.theme.theme);
            const scssFileOutput = config.output || '/resources/sass/framework/_config.scss';
            const scssPath = path.resolve(process.cwd(), scssFileOutput);

            const scssPathRoot = path.resolve(process.cwd(), '/resources/sass/framework/_root.scss');

            // Write the SCSS configuration to the output file
            fs.writeFileSync(process.cwd() + scssFileOutput, scssConfig.config);
            fs.writeFileSync(process.cwd() + scssPathRoot, scssConfig.root);

            console.log(`SCSS configuration file generated: ${scssPath}`);
        });
      }
    },
  };
}

// Function to convert a JavaScript object to SCSS variables
function convertConfigToScss(obj: Theme, indent = '   '): any{

  const array = {
    config: "",
    root: "",
  }

  ///////////////////////////////////////////////////////
  //////////// Generate SCSS breakpoints ////////////////
  ///////////////////////////////////////////////////////
  const SCSS_BREAKPOINTS = Object.entries(obj.breakpoints)
    .map(([key, value]) => `${indent}${key}: ${value},`)
    .join('\n');
  array.config += `$breakpoints: (\n${SCSS_BREAKPOINTS}\n);\n`;

  ///////////////////////////////////////////////////////
  //////////// Generate SCSS Colors /////////////////////
  ///////////////////////////////////////////////////////
  const SCSS_COLORS = Object.entries(obj.colors)
    .map(([key, { background, foreground }]) => {
      let string = '';
      const hsl = hexToHSL(background);
      const shadeLight = [400, 300, 200, 100, 50];
      const shadeDark = [600, 700, 800, 900, 950];

      // Base color variables
      string += `${indent}--${key}: ${background};\n`;
      string += `${indent}--${key}-500: ${background};\n`;
      string += `${indent}--${key}-h: ${hsl.h};\n`;
      string += `${indent}--${key}-s: ${hsl.s}%;\n`;
      string += `${indent}--${key}-l: ${hsl.l};\n`;
      string += `${indent}--${key}-text-foreground: ${foreground || '#000'};\n`;

      // Generate dark shades
      const darkStep = hsl.l / 6.5;
      shadeDark.forEach((shade, index) => {
        string += `${indent}--${key}-${shade}: hsl(var(--${key}-h), var(--${key}-s), ${hsl.l - darkStep * (index + 2)}%);\n`;
      });

      // Generate light shades
      const lightStep = (100 - hsl.l) / 6.5;
      shadeLight.forEach((shade, index) => {
        string += `${indent}--${key}-${shade}: hsl(var(--${key}-h), var(--${key}-s), ${hsl.l + lightStep * (index + 2)}%);\n`;
      });

      return string;
    })
    .join('\n');
    array.root += `:root{\n${SCSS_COLORS}\n};\n`;


  ///////////////////////////////////////////////////////
  //////////// Generate SCSS Font base///////////////////
  ///////////////////////////////////////////////////////
  const SCSS_FONTS = Object.entries(obj.fonts.base)
  .map(([key, value]) => `${indent}${key}: ${value},`)
  .join('\n');
  array.config += `$font-base: (\n${SCSS_FONTS}\n);\n`;
  //`${SCSS_BREAKPOINTS_OUTPUT}\n${SCSS_FONTS_OUTPUT}\n${SCSS_COLORS_OUTPUT}`;
  // Combine breakpoints and colors into the final SCSS output
  return array;
}

