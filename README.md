# TypeScript Playground

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/matejb6/typescript-playground/ci.yml)
![GitHub last commit](https://img.shields.io/github/last-commit/matejb6/typescript-playground)
![GitHub package.json version](https://img.shields.io/github/package-json/v/matejb6/typescript-playground)
![GitHub repo size](https://img.shields.io/github/repo-size/matejb6/typescript-playground)
![GitHub](https://img.shields.io/github/license/matejb6/typescript-playground)

## About
A TypeScript app extended with additional libraries and setup to help develop better apps.
Main idea is to present a TypeScript app with additional setup and practices as a reference for developers.
Includes GitHub Actions workflows, code formatting, code linting, pre commit hooks, unit tests, etc.

## Content
This app consists of simple example logic.

## App creation
This app was created manually by initializing npm and adding packages and setup.

## Package
### Scripts
* `start`: Runs app
* `build`: Builds app
* `prettier:check`: Checks code formatting with Prettier
* `prettier:write`: Formats code with Prettier
* `lint`: Lints code with ESLint
* `test`: Tests app with Jest
* `prepare`: Prepare script to install Husky

### Additional packages
* `ESLint` added with: `npm init @eslint/config@latest`
* `Husky` added with: `npx husky init`
* `Jest` added with: `npm init jest --save-dev`
* `Prettier` added with: `npm install prettier --save-dev`

## Commit hooks
Pre commit hooks are used to check code with `Prettier` and `ESLint`.
Before each commit, staged files are checked with defined scripts and committing of unchecked code will be prevented.
To commit code successfully, check `Prettier` and `Lint` paragraphs of this file.

## Git branching strategy
Two branches are present always and they should be merged from pull request:
* `main` branch containing code ready for new versions
* `dev` branch containing development advancements

Other branches (dynamic branches) contain specific changes should have following prefixes, depending on type of changes they contain. Brief and descriptive description should be added after slash (e.g. feature/about-view):
* `feature/` for new features
* `issue/` for issues
* `update/` for updates (files, dependencies, code, etc.)
* `other/` for other changes

## GitHub Actions
Defined workflows:
* `CI` as a general CI workflow
* `Version` for creating new versions

For more details see `.github/workflows/`.

## Requirements
* node.js ^20.18.0

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
