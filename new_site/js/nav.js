var $win = $(window)

$win.on('scroll', () => {
  if($win.scrollTop() > 0){
    $('.nav-effect').css('top', '0')
    $('.static-nav .nav-item a').css('color', 'black')
    $('#logo').attr('src', 'images/logo-black.png')
    $('.static-nav .nav-item a').removeClass('not-select') 
    $('.static-nav .nav-item a').addClass('select') 
  }else{
    $('.nav-effect').css('top', '-80px')
    $('.static-nav .nav-item a').css('color', 'white')
    $('#logo').attr('src', 'images/logo-white.png')
    $('.static-nav .nav-item a').removeClass('select') 
    $('.static-nav .nav-item a').addClass('not-select') 
  }
});
