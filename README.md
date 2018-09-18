# Product Listing Project

## Technology Stack

- Next.js (for server side rendering)
- React JS (Isomorphic Behaviour)
- Style Component (for Component Style Reusability)
- Isomorphic Unfetch (for serverside API call)
- YARN / NPM for package Dependencies
- ES6

## Setup

- git clone https://github.com/anilkumarsheoran/ecommerce-listing.git
- cd ecommerce-listing
- Yarn install or npm install
- yarn run dev or npm run dev
- open url [http://localhost:3000/](http://localhost:3000/)

## Scalable Frontend Architecture

This Architecture with the methodology Atomic Design using a few cool things, like Styled-compomemt,ES6 and Next.js and ReactJS.

[**Read full article**](https://medium.com/@danilowoznica/atomic-design-with-react-e7aea8152957)

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

## React.js

React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.

## Next.js

Next.js is a universal JavaScript framework that runs in the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating it is also a straightforward way for developers with React experience to get productive fast.

### How Next can improve your life

- Ease of use. Forget about setting up webpack, react router, react and react-dom. It’s all included right out of the box!
- Code splitting out of the box.
- Performance for first page load.
- Improved SEO.
- Server Side Rendering to achive isomorphic Behaviour.

## Styled-Component

We were drawn to CSS-in-JS for the reasons mentioned above, but Styled Components in particular has been a great tool for team. Below are the main reasons we chose it.

### Large & Thriving Community

Being on the edge of a new technology is inherently risky, but we were really encouraged by the community surrounding Styled Components. The team is connected to the community and always asking for feedback. We recently started contributing back to this community by open sourcing our internal styled-components-modifiers library, and have other internal tooling we are hoping to open source when it’s ready.

### Template Literal Syntax

Using template literals to write CSS syntax in our components is a huge boost to our team’s productivity. Developers who were brand new to CSS-in-JS could immediately hop in and start writing styles. I probably could get used to writing { fontSize: “24px” }, but having a familiar syntax is really a great feature.

###

Sass Support & Polished
We also really liked that Sass support was bundled into the lib.

```
const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
```
# ecommerce-listing
