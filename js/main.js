const elDarkModeButton = document.querySelector(".site-header-dark");
const elLightModeButton = document.querySelector(".site-header-light");
// const elModetoggler = document.querySelector(".site-header-dark-mode-toggler");

elDarkModeButton.addEventListener("click", function () {
  document.body.classList.add("dark-mode");
});

elLightModeButton.addEventListener("click", function() {
  document.body.classList.remove("dark-mode");
});