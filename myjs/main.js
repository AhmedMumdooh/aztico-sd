let backToTop = document.querySelector(".back-to-top");
addEventListener("scroll", function () {
  if (window.scrollY >= document.querySelector(".features").offsetTop) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
let lis = document.querySelectorAll("#Portfolio ul li");
let imgs = document.querySelectorAll("#Portfolio .row .work-holder");
lis.forEach((li) => {
  li.addEventListener("click", function () {
    lis.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
    imgs.forEach((img) => {
      img.dataset.work === li.textContent
        ? (img.parentElement.style.display = "block")
        : (img.parentElement.style.display = "none");
    });
    li.textContent === "All"
      ? imgs.forEach((img) => (img.parentElement.style.display = "block"))
      : false;
  });
});
// console.log(typeof lis[1].textContent);
// console.log(typeof imgs[1].dataset.work);
console.log(lis);
console.log(imgs);
