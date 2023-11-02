
"use strict";
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  
/* 表　スクロールの案内
***************************************************************/
  new ScrollHint('.js-table', {
    suggestiveShadow: true,
    remainingTime: 5000,
    i18n: {
      scrollable: 'スクロール'
    },
  });


/* ふわっと表示
***************************************************************/
  $(window).on("scroll", function () {
    let e = $(window).scrollTop() + $(window).height();
    $(".fadeup").each(function () {
      var t = $(this).offset().top;
      e > t + 100 && $(this).addClass("show");
    });
  })
  
  function load_effect() {
    var element = document.getElementsByClassName('load-fade');
    if(!element) return; // 要素がない場合は終了
    
    for(var i = 0; i < element.length; i++) { 
      element[i].classList.add('is-show');
    }
  }
  setTimeout(load_effect, 100); // 100ミリ秒経過後に実行

  

});

