$(function() {

  // Menu Toggle

  $('#MenuButton').on('click', function () {
    $(this).toggleClass('open');
    $('#MenuList').slideToggle();
  });

  $('#MenuList a').on('click', function () {
    if( window.innerWidth <= 768){
      $('#MenuButton').removeClass('open');
      $('#MenuList').slideToggle();
    }
  });

  // Window Resize Function

  $(window).resize(function(){

    if( window.innerWidth <= 768){

      $('#MenuList').hide();
      $('#MenuButton').show();
      $('#MenuButton').removeClass('open');

    } else {

      $('#MenuButton').hide();
      $('#MenuList').show();

    }

  });



   $('.slider').bxSlider({
      auto:true,
      speed:1000,
      pager:true
   });
});
