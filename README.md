Web Frontend MERN React Vite 2-1
=================================
https://vite.dev/


npm create vite@latest . -- --template react

npm install

npm run dev
----------------------------------------------------------
Web Frontend MERN Tailwind 2-2
===================================
https://tailwindcss.com/


```sh
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p
```
- rename to tailwind.config.cjs
Key Differences:
Syntax:

tailwind.config.js uses export default.

tailwind.config.cjs uses module.exports.

Use Case:

Use tailwind.config.js if your project supports ES modules.

Use tailwind.config.cjs if your project uses CommonJS or if you encounter issues with ES modules.


- add following content

tailwind.config.cjs

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
- remove App.css
- delete contents of index.css
- delete contents of App.jsx
- change title

```js
const App = () => {
  return <div>App</div>;
};
export default App;
```

- Add the Tailwind directives to your CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.

- start the project "npm run dev"
- setup first tailwind classes in App.jsx
- remove StrictMode

  App.jsx

```js
const App = () => {
  return <h1 className='text-7xl font-bold underline'>Tailwind project</h1>;
};
export default App;
```

----------------------------------------------------------
Web Frontend MERN Favicon 2-3
===================================
https://favicon.io/

