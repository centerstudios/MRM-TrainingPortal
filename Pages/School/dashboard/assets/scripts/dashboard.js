$(function(){
  //Accordion
  $('.prog-tile').on('click',function(e){
    var $tile = $(this).parent();
    var openClass = $tile.hasClass('drawer-open') ? '':'drawer-open';
    $('.drawer-open').not($tile).removeClass('drawer-open');
      $tile.addClass(openClass);
      e.stopImmediatePropagation();
  });
});
