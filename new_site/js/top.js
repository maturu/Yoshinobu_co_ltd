var $win = $(window),
    $about = $('.about').offset().top
$('.about .row').css('opacity', 0)

$(() => {
  $('.top').vegas({
    slides: [
      {src: 'images/top01.jpg'},
      {src: 'images/top02.jpg'},
      {src: 'images/top03.jpg'},
      {src: 'images/top04.jpg'},
      {src: 'images/top05.jpg'},
      {src: 'images/top06.jpg'}
    ],
    delay: 5000,
    timer: true,
    overlay: 'images/bg-color.png'
  })
})

$win.on('scroll', () => {
  if($win.scrollTop() > Math.floor($about) - 400){
    $('.about .row').addClass('animation')
    $('.about .row').css('opacity', 1)
  }
});
