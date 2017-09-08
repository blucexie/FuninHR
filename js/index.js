


$.noConflict();
jQuery('.zy-Slide').zySlide({ speed: 500 })
.css('border', '0px solid red');
    // $('#Slide2').zySlide({delay : 2000,speed : 2000})

    // var divs = $('.zy-Slide')
    // divs.each(function(i, ele){
    //     Slide(ele)
    // })
    // (function () {
    //     alert(arguments[0])
    // })

    // (function () {
    //     alert(1)
    // })
jQuery(window).scroll(function (){
    var clientH = jQuery(window).height();
    var scrollH = jQuery(window).scrollTop();
    var checkoutT = jQuery('.checkout').offset().top;
    var attestationT = jQuery('#attestation>img').offset().top;
    var orderInterviewT = jQuery('.orderInterview').offset().top;
    if(clientH+scrollH>=checkoutT-100){
        jQuery('#content .empower .sidebar').slideDown(1000)
    }

    if(clientH+scrollH>attestationT){
        jQuery('#attestation .title1').slideDown(1000);
    }
    if(clientH+scrollH>=orderInterviewT){

        jQuery('#content .checkout .sidebar').animate({
            opacity:1
        },1500)
    }
});