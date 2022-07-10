// Action slideToggle //
$(document).ready(function(){
    // Active Menu
    function NxtActiveMenu(){
      var urlNow=window.location.href;
      var allA=$('.nxtActiveMenu').find('a');
      $.each(allA, function(k, v) {
            var self=$(this);
            if(self.attr('href')==urlNow){
                $('.nxtActiveMenu').find('li.active').removeClass('active');
                self.parents('li').addClass('active');
            }
      });
    };
    NxtActiveMenu();
});
// End Action slideToggle //

// Owl2 SlideShow //
$(document).ready(function(){
    $('.owl-slideshow-item').owlCarousel({
        items:1,
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:3000,
        mouseDrag:false,
        nav:false,
        dots:false,
        autoplayHoverPause:false,
        navText: ['<span>‹</span>','<span>›</span>']
    });
    $('.owl-single-item').owlCarousel({
        items:1,
        smartSpeed:1000,
        nav:false,
        dots:false,
        autoHeight:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.owl-product-home').owlCarousel({
        loop:true,
        margin:20,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1024:{
                items:3,
            },
            1190:{
                items:4,
            }
        }
    });
    $('.owl-products-details-center').owlCarousel({
        center: true,
        loop:true,
        dots:false,
        responsiveClass:true,
        nav:true,
        margin:30,
        navText: ['<svg viewBox="0 0 20 20" id="left-arrow"><path d="M5 11h14V9H5V6l-4 4 4 4z" stroke="#23232c" fill="#23232c"></path></svg>','<svg viewBox="0 0 20 20" id="right-arrow"><path d="M15 9H1v2h14v3l4-4-4-4z" stroke="#23232c" fill="#23232c"></path></svg>'],
        dots:false,
        responsive:{
            0:{
                items:2 ,
            },
            600:{
                items:3,
            },
            768:{
                items:3,
            },
            1024:{
                items:2,
            }
        }
    });
    $('.owl-brands-item').owlCarousel({
        loop:true,
        dots:false,
        responsiveClass:true,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2 ,
            },
            600:{
                items:3,
            },
            768:{
                items:4,
            },
            1024:{
                items:8,
            }
        }
    });
    $('.owl-news-item').owlCarousel({
        loop:true,
        dots:true,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1 ,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            },
            1025:{
                items:4,
            }
        }
    });
    $('.owl-feedback-item').owlCarousel({
        loop:true,
        autoHeight:true,
        responsiveClass:true,
        nav:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots:true,
        responsive:{
            0:{
                items:1 ,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        }
    });
    $('.owl-3-collum-item').owlCarousel({
        loop:true,
        dots:false,
        responsiveClass:true,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],       
        dots:false,
        responsive:{
            0:{
                items:1 ,
            },
            600:{
                items:3,
            },
            768:{
                items:3,
            },
            1024:{
                items:3,
            }
        }
    });
    $('.owl-news-list-home').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:3000,
        responsiveClass:true,
        nav:false,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],       
        responsive:{
            0:{
                items:1 ,
            },
            600:{
                items:2,
            },
            768:{
                items:2,
            },
            1024:{
                items:2,
            }
        }
    });
    $('.owl-cate-top-items').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:1000,
        smartSpeed:1000,
        responsiveClass:true,
        nav:true,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],       
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            768:{
                items:4,
            },
            1024:{
                items:4,
            },
            1025:{
                items:5,
            }
        }
    });
});
// End Owl2 Slideshow //

// Scroll To Top //
$(document).ready(function(){
  $(".v2_bnc_icon_scrolltop").click(function(event){
   $('html, body').animate({ scrollTop: 0 }, 1000);
  });
  // Hide,Show ScrollToTop
  var num = 100;  
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {   
          $('.v2_bnc_scrolltop,.v2_bnc_header,.v2_bnc_social_fixed').addClass('fixed');
      }
      else
      {
          $('.v2_bnc_scrolltop,.v2_bnc_header,.v2_bnc_social_fixed').removeClass('fixed');
      }
  });
});  
// End Scroll To Top //

// ToolTip //
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// End ToolTip //

// Btn Toogle //
$(document).ready(function(){
    $('.v2_bnc_search_icon_action').click(function(event) {
        $('.v2_bnc_search_form').slideToggle(400);
    });
    // $('body').delegate('.f-miniCart-miniv2-toolbar','click',function(){
    //     $('.wrap_cart').toggleClass('active');
    //     $(this).toggleClass('active');
    // });
    // $('body').delegate('.wrap_cart_close','click',function(){
    //      $('.wrap_cart').removeClass('active');
    // });
    // $('.v2_bnc_products_filter_icon').click(function(event) {
    //     $('.filter').toggleClass('active');
    //     $(this).toggleClass('active');
    // });
    // $('.filter_close').click(function(event) {
    //      $('.filter').removeClass('active');
    // });
}); 
// End Btn Toogle //

// Custom Base Website //
var WebCommon = function () {
    var LangSwitch = function () {
        $('.flag_language').bind('click',function(){
            var lang = $(this).attr('data-language');
            var home_url = $('base').attr('href');
            $.ajax({
                url:home_url+'/language.html',
                type:'POST',
                dataType:'json',
                data:{redirect:$('#langRedirectUrl').val(),lang:lang},
                success:function (res) {
                    if (res.status==true) {
                        window.location.href=res.redirect;
                    }
                },
                error:function (error) {
                    console.log(error);
                }
            });
           
        });
    }
    var searchBasic = function(){
        $('body').on('click','#BNC_btn_search',function(){
            redirectUrl();
        });
        $('#BNC_txt_search').keypress(function(event){
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == 13){
                redirectUrl();
            }
        });
    }
    var redirectUrl = function(){
        var base_url = $('base').attr('href');
        var cate = $('select[name="BNC_searchCategory"]').val();
            var text = $('#BNC_txt_search').val();
            if (text!='') {
                if (cate=='product') {
                    var url = '/product.html?title='+encodeURIComponent(text);
                }
                if (cate=='news') {
                    var url = '/news.html?title='+encodeURIComponent(text);
                }
                if (cate=='video') {
                    var url = '/video.html?title='+encodeURIComponent(text);
                }
                if (cate=='album') {
                    var url = '/album.html?q='+encodeURIComponent(text);
                }
                if (cate=='recruit') {
                    var url = '/recruit.html?q='+encodeURIComponent(text);
                }
                window.location.href= base_url+url;
            }
    }
    return {
        init: function () {
            LangSwitch();
            searchBasic();
        }
    };

}();
// End Custom Base Website //