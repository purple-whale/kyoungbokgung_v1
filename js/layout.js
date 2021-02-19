$(function(){

	var $nav=$('header .gnb nav ul .mainNav');
	var $subNav=$('header .gnb nav ul .mainNav ul');
	
	$nav.on('mouseover focus',function(){
		$(this).find('ul').show();
	}).on('mouseout blur',function(){
		$(this).find('ul').hide();
	});//nav 끝.
	
	$subNav.on('mouseover focus',function(){
		$(this).show();
	}).on('mouseout blur',function(){
		$(this).hide();
	});//subNav 끝.
	
	$subNav.find('li').on('mouseover focus',function(){
		$(this).css({
			'backgroundColor':'#fff'
		});
	}).on('mouseout blur',function(){
		$(this).css({
			'backgroundColor':'#003964'
		});
	});//subNav Li 끝.

	// 고정헤더
	$('.page-header').each(function(){
		var $wd=$(window),
			$header=$(this),
			headerOffsetTop=$header.offset().top;
		$wd.on('scroll',function(){
			if($wd.scrollTop()>headerOffsetTop){
				$header.addClass('sticky');
			}else{
				$header.removeClass('sticky');
			}
		});

		$wd.trigger('scroll');

	});




});//문장 끝.
