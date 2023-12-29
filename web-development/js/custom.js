
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });

  
//   function injectCodeBasedOnScreenSize() {
//       const myFormDiv = document.querySelector('.myform');

//       if (window.innerWidth <= 400) {
          
//           myFormDiv.innerHTML = '<iframe src="https://fm.addxt.com/form/?vf=1FAIpQLSfcBR7DAEx7Xa7F8fFyDo3gozz-P0UBnRROJenbZOaKckFeRg" width="350" height="550" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
//       } else {
          
//           myFormDiv.innerHTML = '<iframe src="https://fm.addxt.com/form/?vf=1FAIpQLSfcBR7DAEx7Xa7F8fFyDo3gozz-P0UBnRROJenbZOaKckFeRg" width="650" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
//       }
//   }

  
//   injectCodeBasedOnScreenSize();
//   window.addEventListener('resize', injectCodeBasedOnScreenSize);
