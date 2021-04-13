/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark")
}

document.getElementById("toggleTheme").addEventListener("click",() => {
  document.documentElement.classList.toggle("dark")
})

function wrapWindowByMask() { 
  //화면의 높이와 너비를 구한다. 
  var maskHeight = $(document).height();
  var maskWidth = $(window).width(); 
  //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다. 
  
  $('#fade').css({ 'width': maskWidth, 'height': maskHeight }); } 
  /// 화면의 중앙에 레이어띄움 
  function showLayer() { 
    wrapWindowByMask(); 
    
    $("#light").css("position", "absolute"); 
    $("#light").css("top", Math.max(0, (($(window).height() - $("#light").outerHeight()) / 2) + $(window).scrollTop() - 100) + "px"); 
    $("#light").css("left", Math.max(0, (($(window).width() - $("#light").outerWidth()) / 2) + $(window).scrollLeft()) + "px"); 
    $('#fade').show(); 
    $('#light').show(); 
  } 
  
  function clolse() { 
    $('#fade').hide();
    $('#light').hide(); 
  }

  jQuery(function($)
{
    var ticker = function()
    {
        timer = setTimeout(function(){
            $('#ticker li:first').animate( {marginTop: '-20px'}, 400, function()
            {
                $(this).detach().appendTo('ul#ticker').removeAttr('style');
            });
            ticker();
        }, 2000);         
      };
// 0번 이전 기능
      $(document).on('click','.prev',function(){
        $('#ticker li:last').hide().prependTo($('#ticker')).slideDown();
        clearTimeout(timer);
        ticker();
        if($('#pause').text() == 'Unpause'){
          $('#pause').text('Pause');
        };
      }); // 0번 기능 끝
  
// 1. 클릭하면 다음 요소 보여주기... 클릭할 경우 setTimeout 을 clearTimeout 해줘야 하는데 어떻게 하지..
      $(document).on('click','.next',function(){
            $('#ticker li:first').animate( {marginTop: '-20px'}, 400, function()
                    {
                        $(this).detach().appendTo('ul#ticker').removeAttr('style');
                    });
            clearTimeout(timer);
            ticker();
            //3 함수와 연계 시작
            if($('#pause').text() == 'Unpause'){
              $('#pause').text('Pause');
            }; //3 함수와 연계
          }); // next 끝. timer 를 전연변수보다 지역변수 사용하는게 나을 것 같은데 방법을 모르겠네요.

  //2. 재생정지기능 시작, 아직 다음 기능과 연동은 안됨...그래서 3을 만듦
  var autoplay = true;
      $(document).on('click','.pause',function(){
            if(autoplay==true){
              clearTimeout(timer);
              $(this).text('재생');
              autoplay=false;
            }else{
              autoplay=true;
              $(this).text('정지');
              ticker();
            }
          }); // 재생정지기능 끝  
  // 3. 재생정지 함수 시작. 2와 기능 동일함.
    var tickerpause = function()
  {
    $('#pause').click(function(){
      $this = $(this);
      if($this.text() == 'Pause'){
        $this.text('Unpause');
        clearTimeout(timer);
      }
      else {
        ticker();
        $this.text('Pause');
      }
    });
   
  };
  tickerpause();
  //3 재생정지 함수 끝
  //4 마우스를 올렸을 때 기능 정지
  var tickerover = function()
  {
    $('#ticker').mouseover(function(){
      clearTimeout(timer);
    });
    $('#ticker').mouseout(function(){
      ticker();
    });  
  };
  tickerover();
  // 4 끝
    ticker();
    
});

var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
//liIndex 인덱스로 구분해 한줄씩 가져옴

typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다

if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.
  
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ //한문장이끝나면
     if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
          
          //1초후
          setTimeout(function(){
            //사용했던 변수 초기화
            typingBool = false; 
          liIndex=0;
          typingIdx=-0;
            
            //첫번째 문장으로 셋팅
          typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
               //타이핑 결과 모두 지우기
          $(".typing ul li").html("")
            
            //반복시작
            tyInt = setInterval(typing,100);
          }, 1000);
          
          
        }
    } 
}  
$("#img1").show();
$("#img2").hide();

/*img1을 클릭했을 때 img2를 보여줌*/
  $("#img1").click(function(){
      $("#img1").hide();
      $("#img2").show();
  });

  /*img2를 클릭했을 때 img1을 보여줌*/
  $("#img2").click(function(){
      $("#img1").show();
      $("#img2").hide();
  });

  $("#img3").show();
  $("#img4").hide();
  
  /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img3").click(function(){
        $("#img3").hide();
        $("#img4").show();
    });
  
    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#img4").click(function(){
        $("#img3").show();
        $("#img4").hide();
    });

var cnt = 1;
function imgToggle() {
  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");
  var moon1 = document.getElementById("moon").style.display = "none";
  if(cnt%2==1){
    sun.src="assets/img/Mode/Moon.png";
  } else {
    sun.src="assets/img/Mode/sun.png";
  }
  cnt++;
}
