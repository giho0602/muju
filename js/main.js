AOS.init();
// 아이콘 불러오기

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav');
  const main = document.querySelector('.main-menu');
  nav.classList.toggle("sticky", window.scrollY > 0);
  main.classList.toggle("sticky", window.scrollY > 0);
});
// pc 메뉴 효과

$(function () {
  $('.xi-bars').click(function () {
    $('.sub-menu').stop().slideToggle();
  });
});

$(function(){
  $('.sub-menu li').click(function(){
    $('.sub-menu').hide();
  })
})
// 반응형 메뉴

$(function(){
  $('.slide>div:gt(0)').hide();
  setInterval(function(){
      $('.slide>div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.slide');
  }, 3000);
});

$(function () {
  $('.sec03-btn1').click(function () {
    $('.sec03-img1').fadeIn(500).css('display', 'block');
    $('.sec03-img2').css('display', 'none');
    $('.sec03-img3').css('display', 'none');
    $('.sec03-img4').css('display', 'none');
    $('.sec03-img1-text').fadeIn(500).css('display', 'block')
    $('.sec03-img2-text').css('display', 'none')
    $('.sec03-img3-text').css('display', 'none')
    $('.sec03-img4-text').css('display', 'none')
  });
  $('.sec03-btn2').click(function () {
    $('.sec03-img2').fadeIn(500).css('display', 'block');
    $('.sec03-img1').css('display', 'none');
    $('.sec03-img3').css('display', 'none');
    $('.sec03-img4').css('display', 'none');
    $('.sec03-img2-text').fadeIn(500).css('display', 'block')
    $('.sec03-img1-text').css('display', 'none')
    $('.sec03-img3-text').css('display', 'none')
    $('.sec03-img4-text').css('display', 'none')
  });
  $('.sec03-btn3').click(function () {
    $('.sec03-img3').fadeIn(500).css('display', 'block');
    $('.sec03-img1').css('display', 'none');
    $('.sec03-img2').css('display', 'none');
    $('.sec03-img4').css('display', 'none');
    $('.sec03-img3-text').fadeIn(500).css('display', 'block')
    $('.sec03-img1-text').css('display', 'none')
    $('.sec03-img2-text').css('display', 'none')
    $('.sec03-img4-text').css('display', 'none')
  });
  $('.sec03-btn4').click(function () {
    $('.sec03-img4').fadeIn(500).css('display', 'block');
    $('.sec03-img1').css('display', 'none');
    $('.sec03-img2').css('display', 'none');
    $('.sec03-img3').css('display', 'none');
    $('.sec03-img4-text').fadeIn(500).css('display', 'block')
    $('.sec03-img1-text').css('display', 'none')
    $('.sec03-img2-text').css('display', 'none')
    $('.sec03-img3-text').css('display', 'none')
  });
});
// section3 컨텐츠

$(function () {
  $('.sec03-btn1').click(function () {
    $('.sec03-btn1').css('background', '#2F344E');
    $('.sec03-btn1').css('color', '#fff');
    $('.sec03-btn1').css('border', 'none');
    $('.sec03-btn2, .sec03-btn3, .sec03-btn4').css('background', '#fff').css('color', '#000').css('border', '1px solid #000');
  });
  $('.sec03-btn2').click(function () {
    $('.sec03-btn2').css('background', '#2F344E');
    $('.sec03-btn2').css('color', '#fff');
    $('.sec03-btn2').css('border', 'none');
    $('.sec03-btn1, .sec03-btn3, .sec03-btn4').css('background', '#fff').css('color', '#000').css('border', '1px solid #000');
  });
  $('.sec03-btn3').click(function () {
    $('.sec03-btn3').css('background', '#2F344E');
    $('.sec03-btn3').css('color', '#fff');
    $('.sec03-btn3').css('border', 'none');
    $('.sec03-btn1, .sec03-btn2, .sec03-btn4').css('background', '#fff').css('color', '#000').css('border', '1px solid #000');
  });
  $('.sec03-btn4').click(function () {
    $('.sec03-btn4').css('background', '#2F344E');
    $('.sec03-btn4').css('color', '#fff');
    $('.sec03-btn4').css('border', 'none');
    $('.sec03-btn1, .sec03-btn2, .sec03-btn3').css('background', '#fff').css('color', '#000').css('border', '1px solid #000');
  });
});
// section3 버튼

var swiper = new Swiper(".sec05-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: { //반응형 조건 속성
    0: { //640 이상일 경우
      slidesPerView: 1, //레이아웃 2열
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});


$(function(){
  $('.black').css('display', 'none');
  $('.sec05-img1').mouseover(function(){
    $('.sec05-img1 .black').css('display', 'flex');
  })
  $('.sec05-img1').mouseleave(function(){
    $('.sec05-img1 .black').css('display', 'none');
  })
  $('.sec05-img2').mouseover(function(){
    $('.sec05-img2 .black').css('display', 'flex');
  })
  $('.sec05-img2').mouseleave(function(){
    $('.sec05-img2 .black').css('display', 'none');
  })
  $('.sec05-img3').mouseover(function(){
    $('.sec05-img3 .black').css('display', 'flex');
  })
  $('.sec05-img3').mouseleave(function(){
    $('.sec05-img3 .black').css('display', 'none');
  })
  $('.sec05-img4').mouseover(function(){
    $('.sec05-img4 .black').css('display', 'flex');
  })
  $('.sec05-img4').mouseleave(function(){
    $('.sec05-img4 .black').css('display', 'none');
  })
  $('.sec05-img5').mouseover(function(){
    $('.sec05-img5 .black').css('display', 'flex');
  })
  $('.sec05-img5').mouseleave(function(){
    $('.sec05-img5 .black').css('display', 'none');
  })
  $('.sec05-img6').mouseover(function(){
    $('.sec05-img6 .black').css('display', 'flex');
  })
  $('.sec05-img6').mouseleave(function(){
    $('.sec05-img6 .black').css('display', 'none');
  })
})
//section5 슬라이드





