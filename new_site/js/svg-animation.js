var $doc = $(document),
    $win = $(window),
    $svg = $('svg').drawsvg(),
    $flow = $('.flow').offset().top
    max = $doc.height() - $win.height() - $flow;

$win.on('scroll', () => {
  var p = ($win.scrollTop() - $flow +600) / max;
  if(p < 0){
    p = 0
  }else if(p > 1){
    p = 1
  }
  $svg.drawsvg('progress', p)
});
