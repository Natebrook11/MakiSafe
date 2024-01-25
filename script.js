$(document).ready(function () {
    $('nav ul li').click(function () {
        // Remove 'active' class from all list items
        $('nav ul li').removeClass('active');

        // Add 'active' class to the clicked list item
        $(this).addClass('active');
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
           // Remove 'active' class from all list items
                    $('nav ul li').removeClass('active');

                    // Add 'active' class to the clicked list item
                    $('#menuinfo').addClass('active');
        } else if ($(this).scrollTop() > 200) {
           // Remove 'active' class from all list items
                    $('nav ul li').removeClass('active');

                    // Add 'active' class to the clicked list item
                    $('#menucontact').addClass('active');
        }
    });
});
