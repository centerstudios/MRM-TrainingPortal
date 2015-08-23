$(function(){
  //Toggle
  $('.sign-in, .sign-up').on('click', function(){
    $('.sign-in.active, .sign-up.active').removeClass('active');
    $(this).addClass('active');
    if($('.sign-in').hasClass('active')) {
      $('.register').hide();
      $('.login').show();
    }else if($('.sign-up').hasClass('active')) {
      $('.login').hide();
      $('.register').show();
    }
  });

  // Inputs

  $('#fancy-inputs input[type="text"], input[type="password"]').blur(function(){
    if($(this).val().length > 0){
      $(this).addClass('white');
    } else {
      $(this).removeClass('white');
    }
  });

  // Radios

  $("#fancy-radio input[type=radio]").click(function() {
    $('label.radio').removeClass('selected');
    var inputID = $(this).attr('id');
    if ($(this).is(':checked')) {
      $('.' + inputID).addClass('selected');
    } else {
      $('.' + inputID).removeClass('selected');
    }
  });

  $('.btn.login').attr('disabled', 'true');
});
