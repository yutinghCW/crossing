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