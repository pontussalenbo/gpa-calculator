<!-- markdownlint-disable-next-line -->
<p align="center">
<img width="150" src="docs/icon.png" alt="logo">
</P>
# GPA Calculator

This is a simple GPA calculator that was made for educational purposes. It calculates the GPA of a students grades they have received in their courses, based on LTH grading system. The project made using React and TypeScript with a dependency minimalistic approach, where the main purpose was to learn how to develop a React application from scratch, using no component library.

## Status

The project is considered stabled and functional, however I will continue the development when new feature requests or bugs are detected. The project will undergo refactors and improvements continously, as I learn more about React and TypeScript.

## Codebase

### Technologies

- [React](https://reactjs.org/): Frontend Framework for the web application. Utilizing the [Functional Components](https://reactjs.org/docs/components-and-props.html) and [Hooks](https://reactjs.org/docs/hooks-intro.html) API.
- [TypeScript](https://www.typescriptlang.org/): Superset of JavaScript that adds static typing to the language.
- [Styled Components](https://styled-components.com/): CSS-in-JS library that allows you to write actual CSS code to style your components. A framework with modularity and flexibility for html elements.
- [Vite](https://vitejs.dev/): Next generation frontend tooling. It is fast, lightweight and easy to use. Used as the build tool for the project, along with providing a development server and testing using vitest.

#### Folder structure

```bash
docs/          # Markdown Documentation files
public/        # N/A
src/           # Source code
├── assets     # public static files to be bundled
├── components # React generic html components 
├── hooks      # React hooks used in components
├── pages      # All the pages of the application along with their components and styling
├── styles     # CSS-modules and theme files
├── utils      # Utility functions
└── App.tsx  # Entry point of the application
```

**_Please note:_**
A quick note on the structure of the project. Components, such as containers, buttons, inputs, etc. are placed in the `components` folder. However, if the component is only used in a specific page, it is placed in the `pages` folder, inside the `components` subfolder of that page. This is done to keep the components folder clean and easy to navigate. If unsure, feel free to browse the codebase or ask.

### Installation

#### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14.17.0 or higher). You can check your version by running `node -v` in your terminal.

clone the repository:

```bash
git clone https://github.com/pontussalenbo/gpa-calculator.git
```

or with ssh:

```bash
git clone git@github.com:pontussalenbo/gpa-calculator.git
```

Install all the project dependencies:

```bash
npm install
```

You can now run the project in development mode:

```bash
npm run dev
```

You can now access the application at <http://localhost:5173>. Everything is now ready for development, Happy coding!

### Scripts

Here is a list of scripts that can be run within the project, followed by a description of what they do.

- `npm run dev` - start a development server with hot reload. To be used when developing for continous updates in realtime when changes are saved.
- `npm run build` - Generates a build for production. The generated files will be on the `build` folder.
- `npm run preview` - locally preview the production build.
- `npm run test` - run unit and integration tests related to changed files based on git.
- `npm run lint` - runs TypeScript, ESLint and Stylelint validation. Useful for checking if there are any errors in the code and formatting numerous files at once.

### Code style

Prettier is run on-commit, which means you can write code in whatever style you want and it will be automatically formatted according to the common style when you run git commit. We also have ESLint set up, in order to enforce a common style across the codebase. If there are any warnings, the commit will be allowed, but you should fix the warnings before pushing. If there are any errors, the CI will fail if it is not able to auto-fix them, which then will require you to fix them manually before a merge can happen.The ESLint configuration is based on the Airbnb JavaScript Style Guide.

#### Rules

All files must be typed: Since this is a TypeScript project, all files must be typed. If you are unsure about how to type a file, you can use the `any` type, but you should always try to type it as much as possible. Props and state should **always** be typed.

No `console.log`s in any file: We use the debug module across the codebase to log debugging information in development only. Never commit a file that contains a console.log as CI will fail your build. The only exceptions are errors, which you can log, but you have to use console.error to be explicit about it.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb’s Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

For more info on what scripts are available for linting and what the involve, see the [Scripts](#scripts) section.


### Testing

TBA.

### License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.
