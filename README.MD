# @lmg-agence/framework

## Installation

Install the package via npm:

```bash
npm install @lmg-agence/framework
```

## Usage

### Vite Plugin

To use the Vite plugin, add it to your `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import Js2Scss from '@lmg-agence/framework';

export default defineConfig({
    plugins: [Js2Scss({
        output: <pathToOutputScssConfig>
    })],
});
```

### SCSS Framework

Import the SCSS framework in your main stylesheet:

```scss
@use "framework/root";
@use "@lmg-agence/framework";
```

## Features

- **Vite Plugin**: Seamlessly integrates with Vite for optimized builds.
- **SCSS Framework**: A powerful and customizable SCSS-based design system.

## Documentation

For full documentation, visit the [official website](https://example.com).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.