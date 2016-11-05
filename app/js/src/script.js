$(function () {
  /*$('#panel1').click(function () {
    if ($('',this).css("display") == "none") {
      $("ul.accordion li ul").slideUp(500);
      $("ul",this).slideDown(500);
    }
    return false;
    $('#text1').css('display', 'block')
  });*/
  console.log('hi');

  $("#accordion section h1").click(function(e) {
  $(this).parents().siblings("section").addClass("ac_hidden");
  $(this).parents("section").removeClass("ac_hidden");

  e.preventDefault();
});
});
