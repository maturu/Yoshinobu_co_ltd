// scroll
$('.motion-nav').css('display', 'none')
$(window).scroll(() => {
  let conceptTop = $('.concept').offset().top
  let winTop = $(this).scrollTop()
  if(winTop >= conceptTop){
      $('.motion-nav').css('display', 'block')
  }else if(winTop <= conceptTop){
      $('.motion-nav').css('display', 'none')
  }
})
