
/*if (window.matchMedia("(max-width: 490px)").matches) {
   
  
$(document).ready(function(){
    $('.box_catalog').slick({
        dots:true,
        arrows:false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 490,
                settings: {
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true
                }
            }
        ]
    });

})
*/

var clientWidth = document.body.clientWidth;

$('.box_catalog').slick({
    dots:true,
    arrows:false,
    slidesToScroll: 1,
    
});

function resizeTaleSlider(clientWidth) {
    if (clientWidth < 600) {
        $('.box_catalog').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        variableWidth: true,
        slidesToShow: 4
        });
    } else {
        $('.box_catalog').slick("unslick");
    }
}

resizeTaleSlider(clientWidth);

$(window).resize(function() {
    let clientWidth = document.body.clientWidth;
    resizeTaleSlider(clientWidth);
});