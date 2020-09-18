import { nav, validation, toggles } from "./lib/index.js";

nav();
switch (location.pathname) {
  case "/form/":
    validation();
    toggles();
}
// const nav = document.querySelector('nav');
