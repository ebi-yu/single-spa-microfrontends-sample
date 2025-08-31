# Sample Project: Single-SPA with Vue.js Microfrontends

## About

This is a sample project demonstrating the use of **[single-spa](https://single-spa.js.org/)** with Vue.js and React micro-frontends.

## What is Micro-Frontends?

**Micro-frontends** is an architectural style where a single frontend application is composed of multiple smaller, independently developed and deployed frontend applications. Each micro-frontend is responsible for a specific feature or domain of the overall application.

## What is Single-SPA?

**Single-SPA (Single Single-Page Application)** is a JavaScript framework for building micro-frontends. It allows you to combine multiple frameworks (React, Vue, Angular, etc.) into a single cohesive application, enabling independent development and deployment of each micro-frontend.

<https://single-spa.js.org/>

### Key Features

Using Single-SPA for micro-frontends offers several advantages:

- **Framework Agnostic**: Combine React, Vue, Angular, and others in one application.  
- **Independent Development & Deployment**: Teams can build and release micro-frontends separately.  
- **Incremental Migration**: Migrate from one framework to another gradually (e.g., Vue 2 → Vue 3).  
- **Scalability**: Modular structure scales well as the app grows.  
- **Flexibility**: Micro-frontends can run independently during development or testing.

### Key Concepts

- **Root Config**:
  The main entry point of your Single-SPA application. It is responsible for loading and managing the lifecycle of micro-frontends.

- **Micro-Frontends**:
  Individual frontend modules wrapped as JavaScript modules. These can be:

  - **Application**: Activated based on the route (e.g., `/dashboard`).
  - **Parcel**: Manually mounted and unmounted in the code.
  - **Utility**: May or may not render a UI (used for shared logic or services).

### Lifecycle in Single-SPA

Each micro-frontend in Single-SPA follows a clear lifecycle:

- **load**: The module is loaded when it becomes necessary.  
- **bootstrap**: One-time initialization (e.g., setting up dependencies).  
- **mount**: The micro-frontend is rendered into the DOM and becomes visible to the user.  
- **unmount**: The micro-frontend is removed from the DOM.  

The **Root Config** coordinates these lifecycles and decides which applications to activate based on routing or explicit code instructions.  
Because of this structure, React and Vue apps (or any other micro-frontends) can be developed, tested, and even run independently, while still integrating seamlessly under Single-SPA.

## Purpose of This Project

The purpose of this project is to demonstrate how to use **Single-SPA** with multiple frontend frameworks (Vue 3 and React) in a single cohesive application.

## Project Structure

```text
packages/
├── react-app     # React-based micro-frontend
├── vue-app       # Vue 3-based micro-frontend
└── root-config   # Single-SPA root configuration
```

## Getting Started

To run this project locally:

```bash
# Install dependencies for all packages
pnpm install

# Build both React and Vue micro-frontends
pnpm build

# Start the micro-frontend application (usually runs the root-config)
pnpm start
```
