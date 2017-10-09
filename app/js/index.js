// Tooltips
$(function () {
  $("[data-toggle=\"tooltip\"]").tooltip();
});

$("#contactForm").submit(function(e) {
  e.preventDefault();
  $.post( "https://api.millergeek.xyz/sendmail", {
    "bodyData": $("#contactBody").val(),
    "subjectData": $("#contactSubject").val(),
    "replyToAddresses": [$("#contactEmail").val()]
  })
  .done(function() {
    console.log("sent successfully");
    $("#emailSuccess").addClass("show");
    setTimeout( function(){ $("#emailSuccess").removeClass("show"); }, 2000 );
  })
  .fail(function(err) {
    console.error("Failed: ", err);
    $("#emailFail").addClass("show");
    setTimeout( function(){ $("#emailFail").removeClass("show"); }, 2000 );
  });
});

// Ripple-effect animation
$(function($) {
  $(".ripple-effect").click(function(e){
    var rippler = $(this);

        // create .ink element if it doesn't exist
    if(rippler.find(".ink").length == 0) {
      rippler.append("<span class='ink'></span>");
    }

    var ink = rippler.find(".ink");

        // prevent quick double clicks
    ink.removeClass("animate");

        // set .ink diametr
    if(!ink.height() && !ink.width())
        {
      var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
      ink.css({height: d, width: d});
    }

        // get click coordinates
    var x = e.pageX - rippler.offset().left - ink.width()/2;
    var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
    ink.css({
      top: y+"px",
      left:x+"px"
    }).addClass("animate");
  });
});