import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';
import replace from 'postcss-replace';
import tailwindcss from 'tailwindcss';
import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';

const purge = purgecss({
  content: ['./src/**/*.tsx'],
  safelist: [':root', ':host', ':shadow', '/deep/', '::part', '::theme'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'altitude-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
      footer: 'Altitude UI',
      dir: 'docs',
    },
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'stats',
    },
  ],
  plugins: [
    postcss({
      // add postcss plugins
      plugins: [
        // add tailwind css. Config file was added using `npx tailwindcss init`
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
        // shadow dom does not respect 'html' and 'body' styling, so we replace it with ':host' instead
        replace({ pattern: /^(html|body)$/gm, commentsOnly: false, data: { replaceAll: ':host' } }),
        // purge and cssnano if production build
        ...(!process.argv.includes('--dev') ? [purge, cssnano()] : []),
      ],
    }),
  ],
};
