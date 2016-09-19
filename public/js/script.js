$(document).ready(function () {
    var $openButton = $('.burger-icon');
    var $openMainHeaderNav = $('.main-header-nav');
    var $closePageWrapper = $('.page-wrapper');
    var $openSearch = $('.nav-search-btn');
    var $searchInput = $('input[type="search"]');

    $openButton.click(function (event) {
        event.preventDefault();

        if ($openMainHeaderNav.hasClass('open') && $closePageWrapper.hasClass('close')) {
            $openMainHeaderNav.removeClass('open');
            $closePageWrapper.removeClass('close');
        } else {
            $openMainHeaderNav.addClass('open');
            $closePageWrapper.addClass('close');
        }
    });

    $openSearch.click(function (event) {
        var $windowWidth = $(window).width();
        event.preventDefault();

        if ($windowWidth >= '544') {
            $searchInput.toggle();
        } else {
            $searchInput.addClass('small-screen');
        }
    });

    $('.intro-bxslider').bxSlider({
        auto: true,
        pause: 3000,
    });

});
