$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('.team > .row').on('mouseover', function(){
  	$('.team > .row').addClass('active');
  	$(this).removeClass('active')
  }).on('mouseleave', function(){
  	$('.team > .row').removeClass('active');
  })
})
