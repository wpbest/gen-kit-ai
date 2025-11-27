# gen-kit-ai
gen-kit-ai test project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.19.

npm i --save genkit @genkit-ai/googleai

export GOOGLE_GENAI_API_KEY=<your API key>

// import the Genkit and Google AI plugin libraries
import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';

// configure a Genkit instance
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, // set default model
});

const helloFlow = ai.defineFlow('helloFlow', async (name) => {
  // make a generation request
  const { text } = await ai.generate(`Hello Gemini, my name is ${name}`);
  console.log(text);
});

helloFlow('Chris');

```bash
firebase init genkit
```

```bash
ng new gen-kit-ai --routing --style scss --skip-tests --skip-install --skip-git --strict
```
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No  
CREATE gen-kit-ai/angular.json (3493 bytes)  
CREATE gen-kit-ai/package.json (1042 bytes)  
CREATE gen-kit-ai/README.md (1531 bytes)  
CREATE gen-kit-ai/tsconfig.json (942 bytes)  
CREATE gen-kit-ai/.editorconfig (331 bytes)  
CREATE gen-kit-ai/.gitignore (629 bytes)  
CREATE gen-kit-ai/tsconfig.app.json (439 bytes)  
CREATE gen-kit-ai/tsconfig.spec.json (449 bytes)  
CREATE gen-kit-ai/.vscode/extensions.json (134 bytes)  
CREATE gen-kit-ai/.vscode/launch.json (490 bytes)  
CREATE gen-kit-ai/.vscode/tasks.json (980 bytes)  
CREATE gen-kit-ai/src/main.ts (256 bytes)  
CREATE gen-kit-ai/src/index.html (307 bytes)  
CREATE gen-kit-ai/src/styles.scss (81 bytes)  
CREATE gen-kit-ai/src/app/app.component.html (20239 bytes)  
CREATE gen-kit-ai/src/app/app.component.ts (299 bytes)  
CREATE gen-kit-ai/src/app/app.component.scss (0 bytes)  
CREATE gen-kit-ai/src/app/app.config.ts (318 bytes)  
CREATE gen-kit-ai/src/app/app.routes.ts (80 bytes)  
CREATE gen-kit-ai/public/favicon.ico (15086 bytes)  

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
