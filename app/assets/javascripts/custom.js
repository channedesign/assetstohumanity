$(document).ready(function() {
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