# React Redux boilerplate

## Introduction

A boilerplate __React__ application with __Redux__. It has been _bootstrapped_ with `create-react-app`.

## How to start

To start this project perform the follwing steps

1. Install dependencies

    `npm install` _or_ `yarn`, if you _also_ prefer __Yarn__ like the developer of this boilerplate project.

2. Run development server

    `npm start` _or_ `yarn start`

## Installed Dependencies

Some dependencies are aready installed to get you going quickly.

1. __React Bootstrap__

    For your basic styling needs, package `react-bootstrap` and `bootstrap` are installed

2. __Styled components__

    For your custom styling needs, package `styled-components` is installed.

    Some __example components__ are already built with `styled-components`. These are just for demo and __are not meant for use in production__

3. __React Icons__

    For all your icon needs, package `@react-icons/all-files` is installed.

    It gives you __all the icons__ from major providers like `Bootstrap`, `Material UI`, `Font Awesome` and many more, all ready to be imported directly.

    __Example__ import statements

    ```javascript
    // Load icon `AccountBox` from `Material UI`
    import { MdAccountBox } from '@react-icons/all-files/md/MdAccountBox';

    // Load icon `ArrowLeft` from `Font Awesome`
    import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
    ```

4. __Redux__

    For all your state management needs, package `redux`, and `react-redux` are installed.

    A demo __Authentication__ service is set up that uses __Redux__ to maintain user state is already set up. You can modify it or start new.

    Redux code for `store`, `reducers` and `actions`, `actionTypes` are placed inside `redux` directory in project root.

5. __Formik__

    For all your _form_ handling needs, __React__ recommended package `formik` is installed.

    The demo _authentication_ service uses __Formik__ for its `Sign In` form.

6. __React Router__

    For all your routing needs, package `react-router-dom` is already installed.

## Environment files

The following _environment files_ are set up

1. `.env.production`

    Used in __production__ cases. When you run `npm run build` _or_ `yarn build`, React automatically uses any environment variables that starts with `REACT_APP_`

    Example demo environment variable `REACT_APP_API_BASE_URL` is already setup.

2. `.env.development`

    Used in __development__ cases. When you run `npm start` _or_ `yarn start`, React automatically uses any environment variables that starts with `REACT_APP_`

    Example demo environment variable `REACT_APP_API_BASE_URL` is already setup.

## LocalStorage Usage

The demo _authentication_ service uses `localStorage` to store variable `APP_USER` for persisting user sessions.