import { nav } from "./lib/index.js";
import { validation } from "./lib/index.js";

nav();
switch (location.pathname) {
  case "/form/":
    validation();
}
// const nav = document.querySelector('nav');
