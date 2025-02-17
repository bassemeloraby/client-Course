# Web Frontend MERN React Vite 2-1

https://vite.dev/

npm create vite@latest . -- --template react

npm install

## npm run dev

# Web Frontend MERN Tailwind 2-2

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
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
  return <h1 className="text-7xl font-bold underline">Tailwind project</h1>;
};
export default App;
```

---

# Web Frontend MERN Favicon 2-3

https://favicon.io/

> > assets folder
> > favicon.ico

> > index.html

<link rel="icon" type="image/svg+xml" href="/src/assets/favicon.ico" />

---

# Web Frontend MERN daisyui 2-4

https://daisyui.com/

```sh
npm i  -D daisyui@latest @tailwindcss/typography
```

> > tailwind.config.cjs

```js
{
 plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
```

---

# Web Frontend MERN Pages 2-5

https://reactrouter.com/home

https://www.npmjs.com/package/react-router-dom

- create pages directory
- create all pages and export from index.js
- About, Error,
  HomeLayout, Landing,
  Products, SingleProduct, Login,
  Register,

> > pages/index.js

export { default as HomeLayout } from './HomeLayout';

> > terminal
> > npm i react-router-dom

- import in app.jsx

> > App.jsx

```js
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  About,
  Login,
  Register,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
```

---
# Web Frontend MERN React Router { Outlet } 2-6


 children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
      },
      { path: "about", element: <About /> },
    ],


    >> HomeLayout.jsx
import { Fragment } from "react";
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <Fragment>
      <nav>
        <span className="text-4xl text-primary">My App</span>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default HomeLayout;
