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
