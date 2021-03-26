(function($) {
  var allDESKTOP = window.matchMedia('(min-width: 769px)');
  var allMOBILE = window.matchMedia("(max-width: 768px)");

  // HEADER -----
  // 展開選單
  $('.main-header .icon-burger').bind('click', function(event) {
    $('body').addClass('hidden');
    $('.main-header').addClass('main-header--show');
    return false;
  });

  // 關閉選單
  $('.main-header .icon-close').bind('click', function(event) {
    $('body').removeClass('hidden');
    $('.main-header').removeClass('main-header--show');
    // 關閉 Searchbar
    $('.main-header').removeClass('main-header--search');
    return false;
  });

  // HEADER / Searchbar -----
  // 展開 Searchbar
  $('#hSearch').bind('click', function(event) {
    $('.main-header').addClass('main-header--search');
    return false;
  });

  // 點空白處關閉 Searchbar （$(document).bind(...）
  $('main').bind('click',function(){
    $('.main-header').removeClass('main-header--search');
  });

  if (allMOBILE.matches) {
    // 展開 Searchbar
    $('#hSearch').bind('click', function(event) {
      $('body').addClass('hidden');
      return false;
    });
  }

  // 訪客訂閱電子報 -----
  // 展開 Lightbox
  $('.icon-epaper').each(function(){
    $(this).on('click', function () {
      $('#message-newsletter, .black').fadeIn();
    });
  });

  // 用 close(X) 關閉 Lightbox
  $('#message-newsletter .icon-close').on('click', function () {
    $(this).parent().fadeOut();
    $('.black').fadeOut();
  });

  // 判斷 button 是否 disabled
  $('#newsletter-input, #newsletter-privacy').on('change keyup copy paste cut', function() {
    if ( $('#newsletter-privacy').is(":checked") && $('#newsletter-input').val() != '' ) {
      $('#newsletter-submit').removeClass('btn--disable').addClass('btn--primary').prop("disabled", false);
    } else {
      $('#newsletter-submit').removeClass('btn--primary').addClass('btn--disable').prop("disabled", true);
    }
  });

  // 判斷 mail 格式及隱私權後，是否繼續 form
  $('#newsletter-submit').on('click', function() {
    var mail = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test($(this).siblings('input').val()),
      privacy = $(this).siblings('label').children('input').is(":checked");
    if(!mail) {
      $(this).siblings('input').addClass('error-status');
      $(this).siblings('.help').addClass('help--error').show();
      return false;
    } else {
      $(this).siblings('input').removeClass('error-status');
      $(this).siblings('.help').removeClass('help--error').hide();
      if (privacy) {
        $('.loader').fadeIn();
        $('#message-newsletter').addClass('message-loading');
        setTimeout(function(){
          $('#message-newsletter').removeClass('message-loading');
          $('#message-newsletter, .loader').hide();
          $('#message-validation').fadeIn();
        }, 1000);
        return false; // 靜態用
        // return true; // 進正式機打開
      } else {
        return false;
      }
    }
  });

  // 用 button 關閉 Lightbox
  $('.newsletter-close').each(function() {
    $(this).on('click', function() {
      $(this).parent().parent().fadeOut();
      $('.black').fadeOut();
    });
  });

  // Do IE stuff 超過行數文字變... -----
  if (window.document.documentMode) {
    var ellipsisText = function (e, etc) {
        var wordArray = e.innerHTML.split("");
        while (e.scrollHeight > e.offsetHeight) {
            wordArray.pop();
            e.innerHTML = wordArray.join("") + (etc || "...");
        }
    };
    [].forEach.call(document.querySelectorAll(".card .card__body .foreword"), function(elem) {
        ellipsisText(elem);
    });
  }


  // 導搜尋頁 -----
  $("#hSearchBTN").on('click',function() {
    window.location.href = "search.html";
  });


  // Go to top -----
  $('.icon-goTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function(){
    if($(window).scrollTop()>300){
      $('.goTop').addClass('active');
      }
      else{$('.goTop').removeClass('active');
    }
  });


  // Make a div into a link
  $(document).ready(function() {
    $("[data-link]").click(function() {
      window.location.href = $(this).attr("data-link");
    });

    $("[data-link-blank]").click(function() {
      blank = $(this).attr("data-link-blank");
      window.open(blank)
    });
  });
})(jQuery);