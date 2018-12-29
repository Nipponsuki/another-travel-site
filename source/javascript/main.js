window.addEventListener('load', () => {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
  });


  var el = document.querySelectorAll('.idea--1, .idea--2, .idea--3');
  anime({
    targets: el,
    translateX: 0, 
    scale: 1, 
    rotate: '1turn',
    delay: 3000
  });



    var keyframes = anime({
      targets: '.sns-icons',
      translateX: [
        { value: 0, duration: 1000, delay: 500, elasticity: 0 },
        { value: 0, duration: 1000, delay: 500, elasticity: 0 }
      ],
      translateY: [
        { value: 0, duration: 500, elasticity: 100 },
        { value: 0, duration: 500, delay: 1000, elasticity: 100 },
        { value: 0, duration: 500, delay: 1000, elasticity: 100 }
      ],
      scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900, elasticity: 300 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900, elasticity: 300 }
      ],
      scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 }
      ],
      loop: true
    });


    var unitlessValue = anime({
      targets: '.feature__icon',
      translateY: 0,
      rotate: 360,
      loop: true
    });
  

 (function($){
    var searchForm = $('.header__search'),
        nav = $('.header__nav'),
        heroHeading = $('.header__heading'),
        heroHeading = $('.header__heading'),
        nav_responsive = $('.header__nav--responsive');

    TweenLite.from(heroHeading, 2, {autoAlpha: 0});
    TweenLite.from(nav, 1.5, {autoAlpha: 0,x: -200, ease:Power1.easeIn});
    TweenLite.from(searchForm, 1.5, {autoAlpha: 0, x: -200, delay: 1,ease:Back.easeOut.config(10)});
    TweenLite.from(nav_responsive, 1.5, {autoAlpha: 0, y: -200,ease:Power1.easeIn});
    
    $('.header__nav__icon').click(function(){
      $('.header__nav').toggleClass("header__nav--responsive");
      $('.header__nav__link').toggleClass("header__nav__link--responsive");
    });

    
    // var aboutEl = $('.locations'),
    //   aboutElOffset = aboutEl.offset().top/2 + 200,
    //   documentEl = $(document);
                
    //   documentEl.on('scroll', function() {
    //     if ( documentEl.scrollTop() > aboutElOffset) aboutEl.addClass('locations--is-showing'); 
    //   });
    
    
      var aboutEl = $('.locations'),
      aboutElOffset = aboutEl.offset().top/2 + 200,
      documentEl = $(document);

                
      documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffset) 
        var duration = anime({
          targets: '.location',
          translateX: 20,
          duration: 3000
        });
      });


    var features = $('.features'),
      aboutElOffsetFeat = features.offset().top/2 + 300,
      documentEl = $(document);
                
      documentEl.on('scroll', function() {
        if ( documentEl.scrollTop() > aboutElOffsetFeat) features.addClass('features--is-showing'); 
      });

 })(jQuery); 


