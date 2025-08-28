## About

This is a sample project demonstrating the use of single-spa with Vue.js microfrontends.

## What is Micro-Frontends?

Micro-frontend is an architectural style where a single application is composed of multiple smaller applications, each developed and deployed independently. This approach allows teams to work on different parts of the application simultaneously, using different technologies if needed.

## What is Single-SPA

Single-SPA is a JavaScript framework for building micro-frontends. It allows you to combine multiple frameworks (like React, Vue, Angular, etc.) into a single application, enabling independent deployment and development of each micro-frontend.

Single-SPA is consist of root-config and multiple micro-frontends.

- root-config is the main entry point for the single-spa. It is responsible for loading and managing the root micro-frontends.
- micro-frontends is javascript module that wrapping frontend framework.
- micro-frontends has some types:
  - application : activate by page route.
  - parcel : active when mount explicitly in code.
  - utility : it may or may not rendering UI.

<https://single-spa.js.org/docs/getting-started-overview>

## Purpose Of This Project

The purpose of this project is to demonstrate the use of single-spa with Multiple frameworks.

## Project Structure

```md
packages
├── react-app : React micro-frontend
├── vue-app : Vue3 micro-frontend
└── root-config : Root config for single-spa
```

## Getting Started

```sh
# Install Dependencies
pnpm install
# Build React And Vue Microfrontends
pnpm build
# Start Microfrontends Application
pnpm start
```
