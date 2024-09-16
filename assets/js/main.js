$(document).ready(function(){
    var header = $('header .header-bottom');
    var sticky = header.offset().top*10;
    $(window).scroll(function() {
        if ($(window).scrollTop() > sticky) {
            header.addClass('fixed top-0 shadow-sm animate-slide-down');
        } else {
            header.removeClass('fixed top-0 shadow-sm animate-slide-down');
        }
        var elements = $('[data-scroll-animation]');
        
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        elements.each(function(index, element){
            var elementOffset = $(element).offset().top;
            if (scrollTop + windowHeight > elementOffset) {
                console.log($(element));
                if(!$(element).hasClass('animation-custom')){
                    $(element).addClass('animation-custom');
                }
            }
        })
    });
    $('body').on('click', 'header .open-menu-mobile', function(){
        console.log(1);
        $('header .menu-mobile').toggleClass('-translate-x-full')
        $('#overlay').show()
    })
    $('body').on('click', '#overlay', function(){
        $(this).hide()
        $('header .menu-mobile').toggleClass('-translate-x-full')
    })
    $('.slide-top').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.slide-service').slick({
        infinite: true,
        slidesToShow: 4, // Mặc định hiển thị 1 slide
        slidesToScroll: 1, // Mặc định cuộn 1 slide
        responsive: [
            {
                breakpoint: 575, // Khi màn hình nhỏ hơn 1170px
                settings: {
                  slidesToShow: 1, // Hiển thị 1 slide
                  slidesToScroll: 1
                }
              },
            {
                breakpoint: 768, // Khi màn hình nhỏ hơn 1170px
                settings: {
                  slidesToShow: 2, // Hiển thị 1 slide
                  slidesToScroll: 1
                }
            },
            {
              breakpoint: 1171, // Khi màn hình lớn hơn hoặc bằng 1170px
              settings: {
                slidesToShow: 4, // Hiển thị 4 slide
                slidesToScroll: 1
              }
            }
          ]
    });
    $('.slide-post').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 575, // Khi màn hình nhỏ hơn 1170px
                settings: {
                  slidesToShow: 1, // Hiển thị 1 slide
                  slidesToScroll: 1
                }
              },
            {
                breakpoint: 768, // Khi màn hình nhỏ hơn 1170px
                settings: {
                  slidesToShow: 2, // Hiển thị 1 slide
                  slidesToScroll: 1
                }
            },
            {
              breakpoint: 1171, // Khi màn hình lớn hơn hoặc bằng 1170px
              settings: {
                slidesToShow: 4, // Hiển thị 4 slide
                slidesToScroll: 1
              }
            }
          ]
    });
})
function alertText(text='', type='success') {
    switch (type) {
        case 'success': 
            toastr.success(text);
        break;
        case 'info': 
            toastr.info(text);
        break;
        case 'error': 
            toastr.error(text);
        break;
        case 'warning': 
            toastr.warning(text);
        break;
    }
}
