/*nav*/

$(document).ready(function () {
  const box = document.querySelector(".hamburger");
  const navlist = document.querySelector(".navlist");
  box.addEventListener("click", () => {
    box.classList.toggle("active");
    navlist.classList.toggle("active");
  });
});
