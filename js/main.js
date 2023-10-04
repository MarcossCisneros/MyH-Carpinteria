const nav = document.querySelector(".items");
const abrirMenu = document.querySelector(".menu-open");
const cerrarMenu = document.querySelector(".menu-close");
abrirMenu.addEventListener("click", () => mostrarMenu(nav, abrirMenu));
cerrarMenu.addEventListener("click", () => mostrarMenu(nav, abrirMenu));

function mostrarMenu() {
  nav.classList.toggle("visible");
}
