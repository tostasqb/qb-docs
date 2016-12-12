$(function() {
  $('.drawer .section').click(function() {
    isto = $(this).siblings('ul');
    $('.drawer .toc > ul > li > ul').not(isto).slideUp();
    isto.slideToggle();
  });

  $('.drawer .toc > ul > li > ul a.current').parents('ul').show();

  $('.article a[href^="http://"], .article a[href^="https://"], .img-preview').attr('target','_blank');
});
