/**
 * Created by 1 on 04.09.2016.
 */
var $openButton = $('.burger-icon');
var $openMainHeaderNav = $('.main-header-nav');
var $closePageWrapper = $('.page-wrapper');

$openButton.click(function (event) {
    event.preventDefault();

    if($openMainHeaderNav.hasClass('open') && $closePageWrapper.hasClass('close')) {
        $openMainHeaderNav.removeClass('open');
        $closePageWrapper.removeClass('close');
    } else {
        $openMainHeaderNav.addClass('open');
        $closePageWrapper.addClass('close');
    }
});