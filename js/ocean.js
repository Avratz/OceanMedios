if ($(window).width() > 992){
  vardet = 85;
} else{
  vardet = 0;
}

$(function() {

  $('.nav a').click(function() {


    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top - vardet}, 1000);
        return false;
      }
    }
  });
});
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
   $('.collapse').removeClass("show");
});

var visible = false;
$(".boxfq").on("click", function(){
  if (visible === false) {
    $(this).css('background-color', '#0D809B');
       $("p", this).show();
     visible = true;
  }else{
    $(this).css('background-color', '#0AADD9');
     $("p", this).hide();
     visible = false;
  }
});


$(window).on('load', function() {
  $(".se-pre-con").fadeOut("slow");
 });



$(".col-md-4").hover(function(){
    $(".hide-info", this).show();
    $('i', this).hide();
    $('h3', this).hide();
});
$(".col-md-4").mouseleave(function(){
    $(".hide-info", this).hide()
    $('i', this).show()
    $('h3', this).show()
});
