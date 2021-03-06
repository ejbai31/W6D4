
let Router = require("./router");

document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector(".content");
  // router = new Router(content, routes);
  router.start();
  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      let name = navItem.innerText.toLowerCase();
      location.hash = name;
    });
  });
}); 