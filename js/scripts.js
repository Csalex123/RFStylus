$(document).ready(function(e) {

  var online;
  $('.server').each(function(i, el) {
      online = $(el).attr('data-online')/$(el).attr('data-max-online');
      if (online > 100) {
        online = 100;
      }
      $(el).circleProgress({
          value: online,
          startAngle: 0,
          size: $(el).width(),
          thickness: 6,
          emptyFill: 'transparent',
          fill: { color: $(el).css('color') }
      });
  });

  $(".various").fancybox({
    maxWidth  : 800,
    maxHeight : 600,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });


  $('.news').hover(function(e) {
    $(this).addClass('active');
    $('.news:not(.active)').addClass('pasive');
    }, function(){ 
    $('.news').removeClass('pasive').removeClass('active');
  });

  $(window).scroll(function() {
      slowShow($('.header .top-bar'),-1);
      slowShow($('.header .logo'),-1);
      slowShow($('.start'),-1);
      slowShow($('.nav li'),-1);
      slowShow($('.servers'),-1);
      slowShow($('.forum .item'),-1);
      slowShow($('.news'),-1);
      slowShow($('.about-block'),-1);
      slowShow($('.footer .col'),-1);
      slowShow($('.copyright'),-1);
      slowShow($('.devs'),-1);
      slowShow($('.counters'),-1);
  });
  
  $(window).scroll();
});

function slowShow(el, i) {
  setTimeout(function(){
    i++
    if(i <= $(el).length) {
      $(el).eq(i).addClass('show');
    }
    slowShow(el, i);
  },150);
  
}
