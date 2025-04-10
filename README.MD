# @lmg-agence/framework

## Installation

Installez le package via npm :

```bash
npm install @lmg-agence/framework
```

## Utilisation

### Plugin Vite

Pour utiliser le plugin Vite, ajoutez-le à votre `vite.config.js` :
Le plugin Js2Scss de vite va générer 2 fichiers scss _config.scss & _root.scss

Pour le moment il doivent abslument être placé dans la structure de dossier a l'endroit suivant. "/resources/sass/framework/_config.scss", "/resources/sass/framework/_root.scss". 

Seulement fonctionnel avec le setup Laravel des Mauvais Garçons. La raison est simple, le framework import directement les 2 fichiers à la dure. Ca permet de lier un fichier de configuration dans les fichiers du package. 

```javascript
import { defineConfig } from 'vite';
import Js2Scss from '@lmg-agence/framework';

export default defineConfig({
    plugins: [Js2Scss({
        output: <pathToOutputScssConfig>
    })],
});
```

### Framework SCSS

Importez le framework SCSS dans votre feuille de style principale :

```scss
@use "framework/root";
@use "@lmg-agence/framework";
```

### Configuration
Ajouter un fichier theme.config.js à la racine du projet. Cela permettra de générer les fichiers de configuration. 

```js
module.exports = {
    theme : {
        breakpoints: {
            xs: "400px",
            sm: "600px",
            mobile: "600px",
            md: "820px",
            tablet: "820px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1440px",
            menu: "1100px",
        },
        colors: {
            primary: {
                background: "#9155ce",
                foreground: "#ffffff",   
            },
            secondary: {
                background: "#2f4e64",  
            },
            accent: {
                background: "#ca3f85",
                foreground: "#ffffff",   
            },
            gray: {
                background: "#808080",
                foreground: "#ffffff",   
            },
            success: {
                background: "#51cc48",
                foreground: "#ffffff",   
            },
            warning: {
                background:"#ffc46d",
                foreground: "#ffffff",   
            },
            error: {
                background: "#F04F44",
                foreground: "#ffffff",   
            },

        },
        fonts: {
            // The base number that font will be claculated from
            base: {
                desktop: 16,
                mobile: 14,
            }
        }

    }
};
```

## Fonctionnalités

- **Plugin Vite** 
- **Framework SCSS**
- **PostCss** 

## Documentation

Pour une documentation complète, visitez le [site officiel](https://lesmauvaisgarons.mintlify.app/introduction).

## Licence

Ce projet est sous licence MIT.