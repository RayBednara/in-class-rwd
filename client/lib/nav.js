const nav = document.querySelector("nav");

export default () => {
  document.querySelector(".fa-hamburger").addEventListener("click", () => {
    nav.classList.replace("is-collapsed", "is-expanded") ||
      nav.classList.replace("is-expanded", "is-collapsed");
  });
};
