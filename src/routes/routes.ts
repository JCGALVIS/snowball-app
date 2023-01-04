import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Routes {
  name: string;
  path: string;
  to: string;
  Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
}

const Login = lazy(
  () => import(/*webpackChunkName: "Login"*/ "../pages/login/Login")
);
const Categories = lazy(
  () =>
    import(/*webpackChunkName: "Categories"*/ "../pages/categories/Categories")
);

export const routes: Routes[] = [
  {
    to: "/login",
    path: "login",
    Component: Login,
    name: "login",
  },
  {
    to: "/categories",
    path: "categories",
    Component: Categories,
    name: "categories",
  },
];
