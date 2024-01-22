$(document).ready(function () {
            $('nav ul li').click(function () {
                // Remove 'active' class from all list items
                $('nav ul li').removeClass('active');

                // Add 'active' class to the clicked list item
                $(this).addClass('active');
            });
        });