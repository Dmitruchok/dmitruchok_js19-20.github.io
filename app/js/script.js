$(function () {

$(document).ready(function(){
    $(".accordion h5:first").addClass("active");
    $(".accordion p:not(:first)").hide();

    $(".accordion h5").click(function(){

  $(this).next("p").slideToggle("slow")
  .siblings("p:visible").slideUp("slow");
  $(this).toggleClass("active");
  $(this).siblings("h5").removeClass("active");
  });

 });
});
