$(document).ready(function () {
  // $('nav ul li').click(function () {
  //     // Remove 'active' class from all list items
  //     $('nav ul li').removeClass('active');

  //     // Add 'active' class to the clicked list item
  //     $(this).addClass('active');  
  //     if ($(this).hasClass('info')) {
  //       $('.nav-slider').css("transform", "translateX(100%)");
  //     }else if($(this).hasClass('contactus')){

  //       $('.nav-slider').css("transform", "translateX(200%)");
  //     }else if($(this).hasClass('home')){

  //       $('.nav-slider').css("transform", "translateX(0%)");
  //     }


  //   })

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");
  window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 500) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
        if (current == 'info') {
          $('.nav-slider').css("transform", "translateX(100%)");
        } else if (current == 'contactus') {

          $('.nav-slider').css("transform", "translateX(200%)");
        } else {

          $('.nav-slider').css("transform", "translateX(0%)");
        }
      }
    });
  };
});


const preloader = document.querySelector('.preloader');
const subpreloader = document.querySelector('.subpreloader');

addListener(document, "DOMContentLoaded", function () {
  preloader.classList.toggle('hide');
  subpreloader.classList.toggle('hide');
});  //Dom parsing is finished