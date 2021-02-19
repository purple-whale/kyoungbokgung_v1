$(function(){
	
	// menu01 변수선언
	var $slideImg=$('section .menu01 #slideBg #slideImg li');
	var currentIndex=0;
	var count=$slideImg.length;
	var $timer;
	var $slideNav=$('.slideNav');
	var $slideNavPrev=$slideNav.find('.prev');
	var $slideNavNext=$slideNav.find('.next');
	// menu02 변수선언
	var $reservTxt=$('section .menu02 #reserve ul .bannerTxt .txtBg');


	// menu01
	$slideImg.eq(currentIndex).fadeIn();
	//slideShow
	function slideShow(index){
		$slideImg.eq(currentIndex%count).fadeOut(1000);
		$slideImg.eq(index%count).fadeIn(1000);
		currentIndex=index;
	}
	// 재생함수
	function startTimer(){
		$timer=setInterval(function(){
			var nextIndex=(currentIndex+1);
			slideShow(nextIndex);
		},6000);//timer 끝.
	}//startTimer 끝.
	//정지 함수		
	function stopTimer(){
		clearInterval($timer);
	}
	//바로 재생
	startTimer();
	//slideNav
	$slideNav.find('a').on('click',function(){
		if($(this).hasClass('prev')){
			slideShow(currentIndex-1);
		}else{
			slideShow(currentIndex+1);
		}
	}).on('mouseover focus',function(){
		$(this).animate({'opacity':1},300);
	}).on('mouseout blur',function(){
		$(this).stop(true).animate({'opacity':0.7},300);
	});//slideNav 끝. 
	// 마우스 오버 정지, 마우스 아웃 재생
	$slideNav.on({
		mouseover:stopTimer,
		mouseout:startTimer
	});
	

	//menu02
	$reservTxt.on('mouseover focus', function(){
		$(this).find('h3 a').css({
			'color':'#fff',
			'line-height':'110px',
		});
		$(this).find('p').show();
	}).on('mouseout blur', function(){
		$(this).find('h3 a').css({
			'color':'#595959',
			'line-height':'230px',
		});
		$(this).find('p').hide();
	});//reservTxt 끝.
	$('section .menu02 #reserve h2 a img').on('mouseover focus', function(){
		$(this).attr('src',$(this).attr('src').replace('eng','kor'));
	}).on('mouseout blur', function(){
		$(this).attr('src',$(this).attr('src').replace('kor','eng'));
	});

	//menu03
	$('section .menu03 h2 a img').on('mouseover focus', function(){
		$(this).attr('src',$(this).attr('src').replace('eng','kor'));
	}).on('mouseout blur', function(){
		$(this).attr('src',$(this).attr('src').replace('kor','eng'));
	});


	
	
});//문장 끝.
