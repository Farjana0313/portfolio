$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });
    // Typed Js
    var typed = new Typed(".typed", {
  // Waits 1000ms after typing "First"
    strings: ["Web Developer","App Developer"],
            loop: true,
            showCursor:false,
            typeSpeed:20,
            startDelay:3000
  });
        // Owl Carousel
        $('.owl-carousel').owlCarousel({
        loop: true,
       
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
        // Easy Pie Chart
        
        
        var skillsTopOffset = $('.skillsSection').offset().top;
        $(window).scroll(function(){
            if(window.pageYOffset > skillsTopOffset - $(window).height()+200){
                 $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor:false,
                    scaleColor:false,
                    lineWidth:4,
                    size: 152,
                    onStep:function(from,to,percent){
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }
        });
            // Fancy App
            $("[data-fancybox]").fancybox();
            // Isotope
            $('.items').isotope({
                filter: '*',
                animationOptions:{
                    duration:1500,
                    easing: 'linear',
                    queue: false
                }
            });
            
            // Filtering Isotope
            $('.filters a').click(function(){
                $('.filters a').removeClass('current');
                $(this).addClass('current');
                
                var selector = $(this).attr('data-filter');
                        $('.items').isotope({
                        filter: selector,
                        animationOptions:{
                            duration:1500,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    return false;
            });
            
            // Scroll Animation
            $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});
        
        
});














