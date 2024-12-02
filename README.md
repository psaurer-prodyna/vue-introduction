# Vue Introduction

Small repository with multiple branches, to gradually explain differences and try out vue.  

## Pre-requisites

- HTML, CSS, JavaScript knowledge
- Node.js (>= 18)
- Package manager (preferred pnpm, but also npm works fine)
- some IDE with Vue support (e.g. Visual Studio Code, IntelliJ IDEA or WebStorm)
- TypeScript knowledge is a plus (used in the examples)

## Branches

The branches should go from simple to more complex examples.  
Most of them are based on the previous ones, they will be shown here in sequence.  

### 1) vue-create/all-options-deselected
- demonstrates the basic setup of a Vue project without any extras (all options answered with "no") with the command: 
  ```bash
  pnpm create vue@latest
  ``` 


### 2) vue-create/various-options-selected
- demonstrates the basic setup of a Vue project with some extras selected with the create vue command, the following options were selected:  
    ```
      ✔ Project name: … vue-introduction  
      ✔ Add TypeScript? … Yes
      ✔ Add JSX Support? … No
      ✔ Add Vue Router for Single Page Application development? … Yes
      ✔ Add Pinia for state management? … Yes
      ✔ Add Vitest for Unit Testing? … Yes
      ✔ Add an End-to-End Testing Solution? › No
      ✔ Add ESLint for code quality? › Yes
      ✔ Add Prettier for code formatting? Yes  
    ```
    This branch is the base project setup for all following branches.

### 3) feature/side-nav-bar
- moved the default navigation links into a separate component, which is styled as a side navigation bar

### 4) feature/persons-page-simple-fetch
- added a simple persons page, which fetches data from a free users API and displays it in a table.  
The fetch is done within the component in the onMounted hook.

### 5) feature/persons-page-use-fetch-composable
- this is an approach to show how composables work. The logic of fetch is moved into a composable called useFetch, to which you simply pass the URL to the get request.  
All the logic is encapsulated in the composable, which makes the component code cleaner and more readable.  
The hook was taken from the vue documentations and adjusted a bit, it returns the data, error, and loading state.

### 6) feature/tailwindcss
- added tailwindcss to the project, to show how to use it with Vue.  
The sidebar was re-created with tailwind utility classes and the style part was removed.

### 7) feature/vuetify
- added Vuetify to the project, to show how to use it with Vue.  
The sidebar is re-created with Vuetify components, though not 100% finalized, but it is a good starting point.

### 8) feature/dockerize-app
- added a Dockerfile (+ .dockerignore) to the project, to show how to dockerize a Vue application.

