// Adding method to jQuery
$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function(e) {
            e.preventDefault;
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};
$(document).ready(function() {
  var $tm = TweenMax;
  var oneT = 1;
  var fastT = 0.2;
  if ($(window).width() > 767) {
    $("#splash").css("min-height", $(window).height());
  }

	// Preloader
  $(window).load(function(){
    TweenMax.to($('.preloader'), 1, { opacity: 0, ease: Power1.easeIn, zIndex: "-9999" });
  });

   // Nav show/hide
  $('.nav-buttons img').clicktoggle(function() {
    $('.info-button').addClass('blue');
    $tm.to($('.hide-on-click'), oneT, { opacity: 0 });
    $tm.to($('.show-on-click'), oneT, { opacity: 1 });
    $tm.to($('.slide-on-click'), oneT, { opacity: 1, right: 120, zIndex: 99999 });
  }, function() {
    $('.contact-button').removeClass('blue');
    $tm.to($('.hide-on-click'), oneT, { opacity: 1 });
    $tm.to($('.show-on-click'), oneT, { opacity: 0 });
    $tm.to($('.slide-on-click'), oneT, { opacity: 0, right: -300, zIndex: 9 });
    $tm.to($(".show-on-click-info"), oneT, { opacity: 1, delay: 0.5 });
    $tm.to($(".show-on-click-contact"), oneT, { opacity: 0 });
  });

   // Nav Menu
    $('.info-button').click(function() {
      $(this).addClass('blue');
      $('.contact-button').removeClass('blue');
      $tm.to($(".show-on-click-info"), oneT, { opacity: 1, delay: 0.5 });
      $tm.to($(".show-on-click-contact"), oneT, { opacity: 0 });
    });
    
    $(".contact-button").click(function() {
      $(this).addClass('blue');
      $('.info-button').removeClass('blue');
      $tm.to($(".show-on-click-info"), oneT, { opacity: 0 });
      $tm.to($(".show-on-click-contact"), oneT, { opacity: 1, delay: 0.5 });
    })

	// Subscriptions
  $(".enter-email, .angle-right").click(function() {
    var subscribingAnimation = new TimelineMax()
              .to($(".borderTopBottom"), 0.5, { height: 0, padding: 0 })
              .to($(".enter-email, .angle-right"), 0.1, { opacity: 0, display: 'none' }, "-=0.5")
              .to($(".borderTopBottom"), 0.5, { height: 55, padding: 10 })
              .to($(".show-on-click-subscribe"), 0.5, { display: "inline-block" });

  });
  $(".angle-right-submit").click(function(){
    $('#subscribing').submit();
    return false;
  });
  $("#subscribe-email").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      $("#subscribing").submit();
    }
  });
  $(document).ajaxStart(function(){
    $(".uil-spin-css").show();
    $(".angle-right-submit").hide();
  });
 
  $(document).ajaxStop(function(){
    $(".uil-spin-css").hide();
    $(".angle-right-submit").show();
  });


});