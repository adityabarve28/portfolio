$(document).ready(function() {
    // Show About tab by default
    $('#about_tab').show();

    // Click event for navbar links
    $('.nav-link').click(function(e) {
        e.preventDefault();
        var section = $(this).data('section') + '_tab';
        $('.section').hide();
        $('#' + section).show().addClass('animate__animated animate__fadeIn');
    });

    // Scroll event to load sections
    $(window).on('scroll', function() {
        $('.section').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var scrollPos = $(window).scrollTop();
            var windowBottom = scrollPos + $(window).height();

            if (windowBottom > sectionTop && scrollPos < sectionBottom) {
                $(this).show().addClass('animate__animated animate__fadeIn');
            }
        });
    });
});
