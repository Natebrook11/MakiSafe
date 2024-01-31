$(document).ready(function () {
    $('nav ul li').click(function () {
        // Remove 'active' class from all list items
        $('nav ul li').removeClass('active');

        // Add 'active' class to the clicked list item
        $(this).addClass('active');
    });

    const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
});

const tl = gsap.timeline();

tl.to("body", {
  overflow: "hidden"
})
  .to(".preloader .text-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut"
  })
  .from(".preloader .text-container h5", {
    duration: 1.5,
    delay: 1,
    y: 70,
    stagger: 0.4,
    ease: "Power3.easeOut"
  })
  .to(".preloader .text-container h5", {
    duration: 1.2,
    y: 70,
    stagger: 0.2,
    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "auto"
    },
    "-=2"
  )
  .to(".preloader", {
    display: "none"
  });
