$(document).ready(function (){
  $('#nav-mobile').html($('#nav-main').html());
  $('#nav-trigger span').click(function(){
    if ($('nav#nav-mobile ul').hasClass('expanded')) {
      $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
      $('#logo').animate({top: '13%'}, 250);
      $('.cta-buy').animate({top: '13%'}, 250);
      $(this).removeClass('open');
    } else {
      $('nav#nav-mobile ul').addClass('expanded').slideDown(250);
      $('#logo').animate({top: '43%'}, 250);
      $('.cta-buy').animate({top: '43%'}, 250);
      $(this).addClass('open');
    }
  });

  $(".share-gplus").click( function() {
    event.preventDefault();
    current_page =  window.location.pathname;
    $(this).attr("href", $(this).attr("href") + current_page);
    window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
  });

  (function () {
    current_page =  window.location.pathname;
    link = "http://docs.tah.io" + current_page;
    title = $(".page_heading").text() + " " ;
    default_share = "Check%20out%20this%20post%20by%20@tah_io%20:%20" + title + link;
    $(".share-tw").attr("href", $(".share-tw").attr("href") + default_share);
  })();

  (function () {
    current_page =  window.location.pathname;
    fb_link = "http://docs.tah.io" + current_page;
    title_link  = "&amp;p[title]=" + $(".page_heading").text(); 
    $(".share-fb").attr("href", $(".share-fb").attr("href") + fb_link + title_link);
  })();

  $(".share-btn").click(function(){
    if ($(".share-tw, .share-gplus, .share-fb").is(":visible")) {
      $(".share-tw, .share-gplus, .share-fb").fadeOut(500);
    } else {
      $(".share-tw, .share-gplus, .share-fb").fadeIn(500);
    }
  });

});
