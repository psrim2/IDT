 /* ui.menu.js */
var $currentMenu ;
$(function(){
	
	sitemap();
	
	 var windowWidth = $(window).width();
		tgWidth = (windowWidth > 585)  ? true : false;
	if (tgWidth) {
		gnb();
	};
	
	$currentMenu = $('.gnb .depth1 > li > a.current');

	$(window).on('resize', function() {
		var windowWidth = $(window).width() ;
			if (windowWidth > 601 != windowWidth) {
				//location.reload(true);
				gnb();
			};
		});
	});

	/* gnb 2022 수정*/
	function gnb() {
		
		
		var $wrap = $('#wrap'),
			$headerArea = $('.headerArea'),
			
			$gnb = $('.gnb'),
			$depth1 = $gnb.find('.depth1'),
			$depth3 = $gnb.find('.depth3'),
			$depth2Wrap = $depth1.find('.depth2Wrap'),
			$depth1Item = $depth1.find(' > li'),
			$depth1Anc = $depth1Item.find('> a'),
			$depth3Anc = $depth3.find('li > a'),
			$gnbLayer = $('.gnbLayer'),
			$header = $('.headerArea'),
			$headerWrap = $('.header'),
			$navi = $('.navigation'),  //2022추가
		    $naviMenu = $navi.find(' > li'),  //2022추가
		    $naviSubMenu = $naviMenu.find('.naviDepth2'),  //2022추가
		    navilHeight = $naviSubMenu.height()
			totalHeight = 500,
			currentClass = 'current',
			lowlightClass= 'lowlight';
		$depth1Anc.on('mouseenter focus', function(){
			
			var $this = $(this),
			$tgMenu = $this.next($depth2Wrap);
			$depth1Anc.removeClass(currentClass);
			$depth1Anc.addClass(lowlightClass);
			$this.removeClass(lowlightClass);
			$this.addClass(currentClass);
			$depth2Wrap.css('visibility','hidden');
			$header.addClass("overHeader");
			$gnbLayer.css('display','block');
			$gnbLayer.stop().animate ({
				height: totalHeight
			}, 300);
			$('.gnbLayerInner').stop().animate ({
				height: 500
			}, 300);
			$depth2Wrap.stop().animate ({
				height: 406
			}, 400);
			/*$headerArea.addClass('current');*/
			$tgMenu.css('visibility', 'visible');
		});
		$headerWrap.on('mouseleave', function(){
			
			$depth1Anc.removeClass(currentClass).removeClass(lowlightClass);
			$currentMenu.addClass(currentClass);
			$header.removeClass("overHeader")
			$gnbLayer.add('.gnbLayerInner').stop().animate({
				height: 0
			}, 400);
			$depth2Wrap.stop().animate({
				height: 0
			}, 300, function(){
				$depth2Wrap.css('visibility','hidden');
				$headerArea.removeClass('current');
			});
		});
		$depth3Anc.on('click', function(){
			var $this = $(this);
			$depth3Anc.removeClass(currentClass);
			$this.addClass(currentClass);
		});
		
		/*navigation menu 2022 추가*/
	     $naviMenu.on('mouseenter focus', function(){
	    	 var $this = $(this),
	    	 	 $tgNaviSubMenu = $this.find($naviSubMenu),
	    	 	 $tgHeight =  $tgNaviSubMenu.find('ul').height();
	    	 	 $this.addClass('active');
	    	 	 $tgNaviSubMenu.css('height',$tgHeight + 30);
			});
	     $naviMenu.on('mouseleave', function(){    	 	
	    	 	 $(this).removeClass('active');
	    	 	 $naviSubMenu.css('height','0');
			});
	     $('#wrap').click(function(e){
	    	    if( !$('#menu').has(e.target).length ) $('#menu').hide();
	    	});

	     
	     
	     
	     
		/*navigation menu 2022 추가*/
		
		 /* 스크롤시, 메뉴 고정 2022 추가*/	  
		 $(window).on('scroll',function(){ 
		      	if($(window).scrollTop()){ 
		      		$('.headerArea').addClass('active'); 
		      	}else{ 
		      		$('.headerArea').removeClass('active');
		      	} 
		      });		      		      
		     $(window).on('scroll',function(){ 
		     	 if($(window).scrollTop() > 345){
		     		$('.subGnb .headerArea').addClass('move');
		     	}else{ 
		     		$('.subGnb .headerArea').removeClass('move');
		     		$('.subGnb .headerArea').removeClass('scrollEvent');
		     	} 
		     });
		     $(window).on('scroll',function(){ 
		     	 if($(window).scrollTop() > 439){
		      		$('.subGnb .navWrap').addClass('active');
		      		$('.subGnb .headerArea').addClass('scrollEvent');
		      		$('.headerArea').removeClass('move');
		      	}else{ 
		      		$('.subGnb .navWrap').removeClass('active');
		      	} 
		      });
		     
		     var last_scrollTop = 0;
		     
		     $(window).scroll(function () {
		         var tmp = $(this).scrollTop();
		         if (tmp > last_scrollTop) {
		        	 $('.headerArea').removeClass('scrollUp'); 
		         } else {
		        	 $('.headerArea').addClass('scrollUp'); 
		         }
		         last_scrollTop = tmp;
		     });
		     
		     /* 스크롤시, 메뉴 고정 2022 추가*/
		     
//		     navigation 메뉴명 동적 
		     var $naviD1MenuTxt = $("#naviD1Txt .current").text();
		     var $naviD2MenuTxt = $("#naviD2Txt .current").text();
		     var $naviD3MenuTxt = $("#naviD3Txt .current").text();
		     $("#naviD1Txt .title").text($naviD1MenuTxt);
		     $("#naviD2Txt .title").text($naviD2MenuTxt);
		     $("#naviD3Txt .title").text($naviD3MenuTxt);
		     /*navagation menu title*/
		     

		    		
	}
	

	function sitemap() {
		
		$('.siteMapBtn').click(function(){
	    	 $('.headerArea').addClass("siteMapActive");
	   	     $('body').addClass("siteMapBody");
	   	     $('.headerArea').removeClass('overFlowVisivle');
	   	     $('.depth2Wrap').css('height','auto');
	   	     $('.depth2Wrap').css('visibility','visible');
	   	     $('.depth1 > li > a').on('mouseenter focus',function(){
	   	    	$('.depth1 > li > a').removeClass("current");
	   	    	$('.depth1 > li > a').removeClass("lowlight");
	   	    	$('.gnbLayer').css('display','none');
	   	     });
	     });
		 $('.siteMapClose').click(function(){
	    	 $('.headerArea').removeClass("siteMapActive");
	    	 $('.headerArea').removeClass("overHeader");
	   	     $('body').removeClass("siteMapBody");
	   	     $('.headerArea').addClass('overFlowVisible');
	   	     $('.depth2Wrap').css('height','0');
	   	     $('.depth2Wrap').css('visibility','hidden');
	   	  $('.depth1 > li > a').on('mouseenter focus',function(){
	   	    	$('.depth1 > li > a').addClass("lowlight");
	   	    	$(this).addClass("current");
	   	    	$('.gnbLayer').css('display','block');
	   	     });
	     });
		
	}