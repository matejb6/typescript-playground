# TypeScript Playground

![GitHub package.json version](https://img.shields.io/github/package-json/v/matejb6/typescript-custom-setup)
![GitHub Release Date](https://img.shields.io/github/release-date/matejb6/typescript-custom-setup)
![GitHub last commit](https://img.shields.io/github/last-commit/matejb6/typescript-custom-setup)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/matejb6/typescript-custom-setup/CI)
![GitHub repo size](https://img.shields.io/github/repo-size/matejb6/typescript-custom-setup)
![GitHub](https://img.shields.io/github/license/matejb6/typescript-custom-setup)

## About
A TypeScript app extended with additional libraries and setup to help develop better apps.
Main idea is to present a standalone TypeScript app with additional setup so developers can have it as a reference.
Includes GitHub Actions workflows, code formatting, code linting, pre commit hooks, unit tests, etc.

## Content
The app consists of simple example logic which is in works.

## App creation
The app was created manually by initializing npm and adding packages and setup.

## Additional packages
* `ESLint` added with: `npm init @eslint/config`
* `Prettier` added with: `npm install prettier --save-dev`
* `Husky` added with: `npm install husky --save-dev`

## About package
### Scripts
* `start`: Runs app
* `build`: Builds app
* `prettier:check`: Checks code formatting with Prettier
* `prettier:write`: Formats code with Prettier
* `lint`: Lints code with ESLint
* `test`: Tests app with Jest
* `prepare`: Prepare script to install Husky

## GitHub Actions
Defined workflows:
* `CI` as a general CI workflow
* `Version` for creating new versions

For more details see `.github/workflows/`.

## Commit hooks
Pre commit hooks are used to check code with `Prettier` and `ESLint`.
Before each commit, staged files are checked with defined scripts and committing of unchecked code will be prevented.
To commit code successfully, check `Prettier` and `Lint` paragraphs of this file.

## Requirements
* node.js v14.0 and higher
* npm v6.0 and higher

## Setup
* In root run `npm install` to install dependencies
* Script `prepare` should run with `npm install` to install husky, if not, run `npm run prepare`

## Start
* In root run `npm start` to run the app with node

## Build
* In root run `npm run build` to build the app, outputs JavaScript code in `.dist` folder

## Prettier
* In root run `npm run prettier:check` to check if files are formatted with [Prettier](https://prettier.io)
* In root run `npm run prettier:write` to format files

## Lint
* In root run `npm run lint` to lint the app with [ESLint](https://eslint.org)

## Test
* In root run `npm test` to execute the unit tests via [Jest](https://jestjs.io)

## New version
* Go to GitHub repo
* Click on `Actions`
* Click on `Version` workflow
* Click `Run workflow`
* Select branch and enter next version (eg. major, minor, patch)
* New version is created, commit and tag are pushed to repo

## New release
* Go to GitHub repo
* Click on `Releases`
* Click on `Create a new release`
* Select a tag
* Enter release title
* Add release description from changelog notes

## Developer
**Matej Buljan**
