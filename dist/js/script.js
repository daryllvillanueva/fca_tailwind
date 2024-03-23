const links = document.querySelectorAll(".coffee_text h5");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});

const starNav = document.querySelectorAll(".coffee_nav_link");
const starContent = document.querySelectorAll(".coffee_item");
starNav.forEach((star) => {
  star.addEventListener("click", () => {
    removeActiveStar();
    star.classList.add("active");
    const activeContent = document.querySelector(`#${star.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  starNav.forEach((star) => {
    star.classList.remove("active");
  });
}

function removeActiveContent() {
  starContent.forEach((content) => {
    content.classList.remove("active");
  });
}

const navBurger = document.querySelector(".burger_menu");
const headNav = document.querySelector(".header_nav");

navBurger.addEventListener("click", () => {
  navBurger.classList.toggle("open");
  headNav.classList.toggle("open");
});
