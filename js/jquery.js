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





var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
        center: new kakao.maps.LatLng(36.00705068778919, 127.66083707955092), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'images/map-icon.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(60, 70), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(31, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(36.00705068778919, 127.66083707955092); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    '    <span class="title">무주군</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(36.00705068778919, 127.66083707955092);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});
// section6 지도