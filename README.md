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

# Web Frontend react router Pages 2-5

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

---

# Web Frontend MERN React Router { useRouteError } 2-7

> > App.jsx

errorElement: <Error />,

> > Error.jsx

import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
const error = useRouteError();
console.log(error);
if (error.status === 404)
return (

<main className='grid min-h-[100vh] place-items-center px-8 '>
<div className='text-center'>
<p className='text-9xl font-semibold text-primary'>404</p>
<h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
Page not found
</h1>
<p className='mt-6 text-lg leading-7 '>
Sorry, we couldn’t find the page you’re looking for.
</p>
<div className='mt-10 '>
<Link to='/' className='btn btn-secondary'>
Go back home
</Link>
</div>
</div>
</main>
);

return (

<main className='grid min-h-[100vh] place-items-center px-8 '>
<h4 className='text-center font-bold text-4xl'>there was an error... </h4>
</main>
);
};
export default Error;

---

# Web Frontend MERN react-icons 2-8

https://react-icons.github.io/react-icons/

https://www.npmjs.com/package/react-icons

npm i react-icons

> > HomeLayout.jsx

import { FaFacebookSquare } from "react-icons/fa";
<FaFacebookSquare />

---

# Web Frontend MERN NavBar 2-9

- create folder components
- create file Navbar.jsx
- create file index.js

> > index.js
> > export { default as Navbar } from './Navbar';

> > HomeLayout

 <Navbar />

> > Navbar.jsx

 <nav className="bg-base-200">
      <div className="navbar align-element ">
        <div className="navbar-start">start</div>
        <div className="navbar-center">center</div>
        <div className="navbar-end">end</div>
      </div>
    </nav>

----> start

> > Navbar.jsx
> > {/_ TITLE _/}

          <NavLink
            to="/"
            className=" lg:flex btn btn-primary text-3xl items-center"
          >
            P
          </NavLink>

----> center

         <<ul className="menu menu-horizontal">
            <NavLinks />
          </ul>

-create file NavLinks.jsx

> > NavLinks.jsx

import { NavLink } from 'react-router-dom';

const links = [
{ id: 1, url: '/', text: 'home' },
{ id: 2, url: 'about', text: 'about' },
{ id: 3, url: 'products', text: 'products' },
];

const NavLinks = () => {
return (
<>
{links.map((link) => {
const { id, url, text } = link;
return (

<li key={id}>
<NavLink className='capitalize' to={url}>
{text}
</NavLink>
</li>
);
})}
</>
);
};
export default NavLinks;

> > Navbar.jsx

import NavLinks from './NavLinks';

<NavLinks />

---

# Web Frontend MERN Header 2-10

- create Header.jsx
- add to index.js

> > HomeLayout.jsx

<Header/>

> > Header.jsx

import { Link } from 'react-router-dom';

const Header = () => {
return (
<header className=" bg-neutral py-2 text-neutral-content ">
<div className="align-element flex justify-center sm:justify-end ">
{/_ USER _/}
{/_ LINKS _/}
<div className="flex gap-x-6 justify-center items-center">
<div className="flex gap-x-6 justify-center items-center">
<Link to="/login" className="link link-hover text-xs sm:text-sm">
Sign in / Guest
</Link>
<Link to="/register" className="link link-hover text-xs sm:text-sm">
Create an Account
</Link>
</div>
</div>
</div>
</header> <header className=" bg-neutral py-2 text-neutral-content ">
<div className="align-element flex justify-center sm:justify-end ">
{/_ USER _/}
{/_ LINKS _/}
<div className="flex gap-x-6 justify-center items-center">
<div className="flex gap-x-6 justify-center items-center">
<Link to="/login" className="link link-hover text-xs sm:text-sm">
Sign in / Guest
</Link>
<Link to="/register" className="link link-hover text-xs sm:text-sm">
Create an Account
</Link>
</div>
</div>
</div>
</header> <header className=" bg-neutral py-2 text-neutral-content ">
<div className="align-element flex justify-center sm:justify-end ">
{/_ USER _/}
{/_ LINKS _/}
<div className="flex gap-x-6 justify-center items-center">
<div className="flex gap-x-6 justify-center items-center">
<Link to="/login" className="link link-hover text-xs sm:text-sm">
Sign in / Guest
</Link>
<Link to="/register" className="link link-hover text-xs sm:text-sm">
Create an Account
</Link>
</div>
</div>
</div>
</header>
);
};
export default Header;

---

# Web Frontend MERN Custom Class 2-11

-create custom class
-align content
-add to HomeLayout Outlet component

> > index.css

@layer components {
.align-element {
@apply mx-auto max-w-6xl px-8;
}
}

> > HomeLayout.jsx

<section className='align-element py-20'>
  <Outlet />
</section>

> > about.jsx

<Fragment>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We create
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Our Application
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </Fragment>

    -------------------------------------------
    # Web Frontend MERN Landing page 2-12

-create Hero.jsx

    >> Hero.jsx

     <div className='grid lg:grid-cols-2 gap-24 items-center'>
    <div>
      <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
        We are learning web developer how to create Apps
      </h1>
      <p className='mt-8 max-w-xl text-lg leading-8'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        repellat explicabo enim soluta temporibus asperiores aut obcaecati
        perferendis porro nobis.
      </p>
      <div className='mt-10'>
        <Link to='/products' className='btn btn-primary'>
          Our Products
        </Link>
      </div>
    </div>

  </div>

> > Landing.jsx

   <Fragment>

      <Hero />
    </Fragment>
