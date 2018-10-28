var owl = $('.owl-carousel');
    owl.owlCarousel({
        center : true,
        stagePadding:0,
        loop:true,
        margin:30,
        nav:true,
    });
    $('.NextButton').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.BackButton').click(function() {
        owl.trigger('prev.owl.carousel');
    })
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.paddingLeft = "5%"
        document.getElementById("mySidenav").style.paddingRight = "5%"
        document.getElementById("Slider").style.visibility = "hidden"
        document.getElementById("SliderBack").style.visibility = "hidden"
        document.getElementById("SliderLeftArrow").style.visibility = "hidden"
        document.getElementById("SliderRightArrow").style.visibility = "hidden"
        document.getElementById("rotateRight").style.visibility  = "hidden";
    
        
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.paddingLeft = "0%"
        document.getElementById("mySidenav").style.paddingRight = "0%"
        document.getElementById("Slider").style.visibility = "visible"
        document.getElementById("SliderBack").style.visibility = "visible"
        document.getElementById("SliderLeftArrow").style.visibility = "visible"
        document.getElementById("SliderRightArrow").style.visibility = "visible"
        document.getElementById("rotateRight").style.visibility  = "visible";
    }
    $(document).ready(function(){
        $(this).scrollTop(0);
    });