# Ecommerce Listing Project

## Feature

- Next.js (for server side rendering)
- React JS (Isomorphic Behaviour)
- Style Component (for Component Style Reusability)
- Isomorphic Unfetch (for serverside API call)
- YARN / NPM for package Dependencies
- ES6

## Installation

- git clone https://github.com/anilkumarsheoran/ecommerce-listing.git
- cd ecommerce-listing
- Yarn install or npm install
- yarn run dev or npm run dev
- open url [http://localhost:3000/](http://localhost:3000/)

##Test Cases

- npm run test

## Scalable Frontend Architecture

This Architecture is based on the Atomic Design methodology.

```
├── components
│   ├── atoms
│   │   ├── Image
│   │   │   ├── Image.js
│   │   │   └── index.js
│   │   ├── SelectBox
│   │   │   ├── SelectBox.js
│   │   │   ├── SelectBox.style.js
│   │   │   └── index.js
│   ├── molecules
│   │   ├── Header
│   │   │   ├── Header
│   │   │   ├── Header.style.js
│   │   │   └── index.js
│   │   └── Product
│   │       ├── Product.js
│   │       ├── Product.style.js
│   │       └── index.js
│   ├── organisms
│   │   └── ProductList
│   │       ├── ProductList.js
│   │       ├── ProductList.style.js
│   │       └── index.js
│   └── templates
│   │   └── Productlisting
│   │       ├── Productlisting.js
│   │       └── index.js
├── constants
│   └── index.js
│   └── serviceURL.js
├── global
│   └── withStyle.js
├── locales
│   └── en-US.js
└── styles
    ├── theme
    │   └── colors.js
    |   └── index.js
    └── typography.js
```
