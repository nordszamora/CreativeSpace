$(document).ready(function() {
  $('.francis').click(function() {
     $('#francis').fadeToggle();
     $('.txt').fadeOut();
     $('#carla, #kayron, #mary, #allen').fadeOut();
  });

  $('.carla').click(function() {
    $('#carla').fadeToggle();
    $('.txt').fadeOut();
    $('#francis, #kayron, #mary, #allen').fadeOut();
  });

  $('.kayron').click(function() {
    $('#kayron').fadeToggle();
    $('.txt').fadeOut();
    $('#francis, #carla, #mary, #allen').fadeOut();
  });

  $('.mary').click(function() {
    $('#mary').fadeToggle();
    $('.txt').fadeOut();
    $('#francis, #carla, #kayron, #allen').fadeOut();
  });

  $('.allen').click(function() {
    $('#allen').fadeToggle();
    $('.txt').fadeOut();
    $('#francis, #carla, #kayron, #mary').fadeOut();
  });
});