
console.log('init');

$('.pg').hover(function() {
  console.log('hover');
  $(this).find('.pg-thumbs-group').show();
}, function() {
  $('.pg-thumbs-group').hide();
});
