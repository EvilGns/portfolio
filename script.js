$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");

        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");

        }else{
            $('.scroll-up-btn').removeClass("show");
        }S

    });

    //slide up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });







    // Toggle Menu

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })

    // owl carousel script
   $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayhoverPause: true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
   });
    
});