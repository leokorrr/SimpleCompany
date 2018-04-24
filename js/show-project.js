$('.project-card').click(function(){
  $('.project-card').not(this).hide(1000);
  $(this).animate({
    width: "75%",
    position: "absolute",
    zIndex: "9999"
  }, 1000);
  $('.purple-layout').hide();
  var id = '#' + $(this).attr('id') + '-data';
  $(id).delay(900).animate({
    width:"25%"
  },1000);
});
