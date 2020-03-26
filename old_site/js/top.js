//background slide
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
    timer: false,
    overlay: 'images/bg-color.png'
  })
})

