$(function(){
	
	/*멀티라인말줄임*/
	 (function($) {
	        $.fn.ellipsis = function()
	        {
	                return this.each(function()
	                {
	                        var el = $(this);

	                        if(el.css("overflow") == "hidden")
	                        {
	                                var text = el.html();
	                                var multiline = el.hasClass('multiline');
	                                var t = $(this.cloneNode(true))
	                                        .hide()
	                                        .css('position', 'absolute')
	                                        .css('overflow', 'visible')
	                                        .width(multiline ? el.width() : 'auto')
	                                        .height(multiline ? 'auto' : el.height())
	                                        ;

	                                el.after(t);

	                                function height() { return t.height() > el.height(); };
	                                function width() { return t.width() > el.width(); };

	                                var func = multiline ? height : width;

	                                while (text.length > 0 && func())
	                                {
	                                        text = text.substr(0, text.length - 1);
	                                        t.html(text + "...");
	                                }

	                                el.html(t.html());
	                                t.remove();
	                        }
	                });
	        };
	})(jQuery);
	$(".ellipsis").ellipsis();

	
	
	
	
	
	//main_Solution
	$(".tab_content").hide();
    $(".tab_content:first").show();
    $(".tab_btn").hide();
    $(".tab_btn:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css({"color" : "#222","text-decoration":"none"});
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active").css({"color" : "#f80008","text-decoration":"underline"});
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
    $("ul.tabs li").mouseover(function () {
        $("ul.tabs li").removeClass("active").css({"color" : "#222","text-decoration":"none"});
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active").css({"color" : "#f80008","text-decoration":"underline"});
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
    
    
	// serviceSlide
	$ ('.serviceSlide').flexisel({
		visibleItems : 6,
		animationSpeed : 200,
		autoPlay : false,
		autoPlaySpeed : 3000,
		pauseOnHover : true,
		setMaxWidthAndHeight : false,
		enableResponsiveBreakpoints : true,
		clone : true,
		enableResponsiveBreakpoints: true,
			responsiveBreakpoints: {
				portrait: {
				changePoint:600,
				visibleItems: 3
			},
			landscape: {
				changePoint:850,
				visibleItems: 4
			},
			tablet: {
				changePoint:851,
				visibleItems: 6
			}
		}
	});
	// serviceSlide
	$ ('.solutionSlide').flexisel({
			visibleItems: 3,
	        animationSpeed : 200,
	        autoPlay : false,
	        autoPlaySpeed : 3000,
	        pauseOnHover : true,
	        setMaxWidthAndHeight : false,
	        enableResponsiveBreakpoints : true,
	        clone : true,
			responsiveBreakpoints: {
				portrait: {
				changePoint:600,
				visibleItems: 2
			},
			landscape: {
				changePoint:850,
				visibleItems: 3
			},
			tablet: {
				changePoint:851,
				visibleItems: 3
			}
		}
	});
	$('.idtSlide').feSlide({
		vertical: false,
		circular: false,
		pagingBtn: true,
		aniSpeed: 2000,
		autoPlay: true,
		easing: "easeInOutQuint",
		disableNavi: true,
		fixedLayout: false,
		prevBtnTxt: '이전뉴스',
		nextBtnTxt: '다음뉴스'
	});
	// move slideNavi
	var moveBtn = {
		init : function(){
			var $naviArea = $('.mainContents'),
				$feSlNavi = $('.idtSlide .feSlNavi, .idtSlide .feSlPaging');
			$feSlNavi
				.wrapAll('<div class="wrapNavi"/>');
		}
	};
	moveBtn.init();
	// main : solutionSlide
	// var windowWidth = $(window).width();
	// 	tgWidth = (windowWidth > 600)  ? true : false;
	// if (tgWidth) {
	// 	//return false
	// } else if (!tgWidth) {
	// 	$('.solutionSlide').als({
	// 		visible_items: 2,
	// 		scrolling_items: 1,
	// 		circular: 'yes',
	// 		speed: 400
	// 	});
	// };
	// mainPop
	$('.mainPop .popClose').on('click', function(e){
		e.preventDefault();
		$(this).parent($('.mainPop')).fadeOut();
	});
	// offerSolution li addClass
	$('.offerSolution li:nth-child(odd)').addClass('odd');
	$('.offerSolution li:nth-child(3n+1)').addClass('wThree');
	// custom select
	 $('.styled').selectbox();

/*		// familySite
		var familySite = {
			init : function(){
				var $btnfamily = $('.familySite'),
					$tgList = $('.siteList'),
					$tgListAnchor = $tgList.find(' >li > a'),
						tgListHeight = $tgList.outerHeight(true);
				$btnfamily.on('click focus', function(e){
					e.preventDefault();
					var $this = $(this);
					$this
						.toggleClass('current')
						.next($tgList)
						.fadeToggle()
						.css('top',-tgListHeight);
					});
				$tgList.on('mouseleave', function(){
					$tgList.hide();
					$btnfamily.removeClass('current');
				});
				$tgListAnchor.on('click', function(){
					$tgList.hide();
					$btnfamily.removeClass('current');
				});
			}
		};
		familySite.init();*/
	 //그룹사 바로가기 슬라이드 수정_160824
	 $(document).ready(function() {
			$('.footerGroupSet > a').click(function() {
				$('.siteList', $(this).parent()).slideToggle();
				return false;
			});

			$('.siteList').mouseleave(function() {
				$(this).slideUp();
			});

			$('.footerGroupSet').hover(function(e) {
				if (e.type == 'mouseleave') {
					$('.siteList').slideUp();
				}
			});
		});
	// goTop
	var goTop = {
		init : function(){
			var $btnGotop = $('.btnGoTop');
			$(window).on('scroll', function(){
				var notAnimated = !$btnGotop.is(':animated');
				if ( $(window).scrollTop() > 0 && notAnimated) {
					$btnGotop.fadeIn();
				} else if (notAnimated){
					$btnGotop.fadeOut();
				}
			});
			$btnGotop.on('click', function(e){
				e.preventDefault();
				$(window).scrollTop(0);
			});
		}
	};
	goTop.init();
	// prLayer
	var prLayer = {
	 init : function(){
	 	var $prBtn = $('.section.pr button'),
	 		$prLayer = $('.prLayer'),
	 		$layerClose = $prLayer.find('.layerClose');
	 		$prBtn.on('click', function(){
	 			$prLayer.fadeIn();
	 			$('body')
					.css('overflow','hidden')
					.append('<div class="dimmed"></div>');
				$('.dimmed').css('height', '9999em');
				$prLayer.css('top', $(window).scrollTop()+210);
	 		});
	 		$layerClose.on('click', function(e){
	 			location.reload();
	 			e.preventDefault();
	 			$(this)
	 				.parent($prLayer)
	 				.fadeOut();
	 			$('.dimmed').remove();
	 			$('body')
					.css('overflow','visible');
	 		});
		}
	};
	prLayer.init();
 	// tabMenu
	var tabMenu = {
		init : function(){
			var $tabAnchor = $('.tabNav li > a');
		$tabAnchor.on('click', function(e){
			e.preventDefault();
			var tgTab = $(this).attr('href'),
				$tabEl = $('div[id*="tab"]');
			$tabAnchor
				.parent('li')
				.removeClass('current');
			$(this)
				.add()
				.parent('li')
				.addClass('current');
			$tabEl.hide();
			$(tgTab).show();
		});
		$tabAnchor.first().trigger('click');
		}
	};
	tabMenu.init();
	// faq
	var faq = {
		init : function(){
			var $faq = $('.faqList'),
				$questionAnc = $faq.find('.question > a'),
				$answer = $faq.find('.faqAnswer');
		$questionAnc.on('click', function(e){
			var $this = $(this);
			e.preventDefault();
			$questionAnc
				.not(this)
				.parent('li')
				.removeClass('current')
				.next($answer)
				.hide();
			$this
				.parent('li')
				.toggleClass('current')
				.next($answer)
				.toggle();
			});
		}
	};
	faq.init();
});
/* ui.common.js */
;(function($, window, document, undefined) {
	/* feSlide */
	$.fn.feSlide = function(options) {
		// feSlide default options
		var _defaults = {
			vertical: false, // Vertical slide(true|false)
			naviBtn: true, // Navigation visibility(true|false)
			disableNavi: false, // Disable prev, next button(true|false)
			pagingBtn: true, // Pagination visibility(true|false)
			circular: true, // Circular scroll style(true|false)
			fadeEffect: false, // Fade effect option(true|false)
			swipeEvent: false, // Swipe event in devie(true|false)
			fixedLayout: true, // Fixed layout(true|false)
			autoPlay: false, // Auto slide(true|false)
			aniSpeed: 1000, // Slide speed(Number:Integers)
			playSpeed: 5000, // Auto play speed(Number:Integers)
			fadeSpeed: 1000, // fade effect speed(Number:Intergers)
			visibleItem: 1, // Number of visible elements(Number:Integers)
			scrollItem: 1, // Scrolling step(Number:Integers)
			easing: "swing", // jQuery easing effect
			currentClass: "current", // Current class(String)
			itemIdPrefix: 'feSlItem', // Prefix text for bookmark(String)
			pagingTxt: 'Slide', // Pagination anchor text(String)
			prevBtnTxt: 'Prev', // Prev button text(String)
			autoBtnTxt: 'Auto', // Auto button text(String)
			stopBtnTxt: 'Stop', // Stop button text(String)
			nextBtnTxt: 'Next' // Next button text(String)
		},
		// Marge default options with new settings
		_options = $.extend({}, _defaults, options);
		return this.each(function() {
			var $this = ( $(this).has('.feSlMask').size() !== 0 ) // Create wrapper
					? $(this).addClass('feSlide')
					: $(this).addClass('feSlide')
					.wrapInner('<div class="feSlMask">'
						+ '<div class="feSlWrap"></div></div>'),
				// Item(creat li elements for pagination)
				$feSlItem = $this.find('.feSlItem').each(function(idx) {
					$(this)
						.after('<li><a href="#'
							+ _options.itemIdPrefix + (idx + 1) + '">'
							+ _options.pagingTxt + (idx + 1) + '</a></li>')
						.attr({ // Tabindex for keyboard focus
							id: _options.itemIdPrefix + (idx + 1)
						});
				}),
				itemSize = $feSlItem.size(), // Item length
				itemWidth = $feSlItem.outerWidth(true), // Item width
				itemHeight = $feSlItem.outerHeight(true), // Item height
				// Navigation html code
				naviHTML = '<div class="feSlNavi">'
					+	'<button class="btnPrev">' + _options.prevBtnTxt + '</button>'
					+	'<button class="btnAuto">' + _options.autoBtnTxt + '</button>'
					+	'<button class="btnStop">' + _options.stopBtnTxt + '</button>'
					+	'<button class="btnNext">' + _options.nextBtnTxt + '</button>'
					+ '</div>',
				// Mask - viewpoint(set pagination and navigation)
				$feSlMask = $this.find('.feSlMask')
					.find($feSlItem).next('li')
						.wrapAll('<ul class="feSlPaging"></ul>').end().end()
					.after(naviHTML).css('overflow', 'hidden'),
				// Wrapper
				$feSlWrap = $this.find('.feSlWrap'),
				// Pagination
				$feSlPaging = $this.find('.feSlPaging').prependTo($this),
				$feSlPagingList = $feSlPaging.find('> li'),
				$feSlPagingAnchor = $feSlPagingList.find('> a'),
				// Navigation
				$feSlNavi = $this.find('.feSlNavi'),
				$feSlNaviBtn = $feSlNavi.find('button'),
				// Etc
				currentIdx = 1,
				circularDir = 'next',
				playState, playTimer, dirPosX, dirPosY,
				// Slide
				feSlMethod = {
					// Initial
					init: function() {
						// Layout
						// Responsive layout
						if ( !_options.fixedLayout ) {
							// Reset option value
							_options.circular = true,
							_options.visibleItem = 1;
							// Reset position
							$feSlItem.not(':nth-child(' + currentIdx + ')')
								.css('position', 'absolute');
							$feSlWrap.css('position', 'relative');
							// Window resize event
							$(window).on('resize', function() {
								itemWidth = $feSlItem.outerWidth(true),
								itemHeight = $feSlItem.outerHeight(true);
								( itemHeight !== 0 )
									? $feSlWrap.css('height', itemHeight)
									: $feSlWrap.css('height', 'auto');
							}).trigger('resize');
						// Fixed layout
						} else {
							// Fade Effect Set
							if ( _options.fadeEffect ) {
								_options.visibleItem = 1;
								$feSlItem.not(':nth-child(' + currentIdx + ')')
									.css('position', 'absolute');
							};
							// Set Wrap, Mask width/height for direction
							// Vertical
							if ( _options.vertical ) {
								$feSlWrap.css({
									width: itemWidth,
									height: itemHeight * itemSize
								});
								$feSlMask.css({
									width: itemWidth,
									height: itemHeight * _options.visibleItem
								});
							// Horizontal
							} else {
								$feSlWrap.css({
									width: itemWidth * itemSize,
									height: itemHeight
								});
								$feSlMask.css({
									width: itemWidth * _options.visibleItem,
									height: itemHeight
								});
							};
						};
						feSlMethod.setCurrent(); // Current item
						feSlMethod.naviEvent(); // Navigation
						feSlMethod.pagiEvent(); // Pagination
						if ( _options.autoPlay ) playMethod.autoPlay(); // Auto slide
					},
					// Navigation
					naviEvent: function() {
						// Visibility
						if ( itemSize === 1 ) return false;
						if ( _options.naviBtn ) $feSlNavi.show();
						// Reset option value
						if ( _options.visibleItem !== 1 ) _options.circular = false;
						// Hide others
						$feSlItem
							.not($feSlItem.filter('.' + _options.currentClass))
								.css('visibility', 'hidden');
						// Auto, Stop button events
						$feSlNaviBtn.filter('.btnAuto, .btnStop')
							.on('click', function(e) {
								e.preventDefault();
								circularDir = 'next', playState = 'play';
								$(this).blur().hide(); // blur() for IE toggle problem
								// Reset disable button
								$feSlNaviBtn
									.removeClass('disableBtn').removeAttr('disabled');
								// Toggle event
								if ( e.keyCode !== 9 && $(this).hasClass('btnAuto') ) {
									playMethod.autoPlay();
									$feSlNaviBtn.filter('.btnStop').focus();
								} else if ( e.keyCode !== 9
									&& $(this).hasClass('btnStop') ) {
									playMethod.stopPlay();
									$feSlNaviBtn.filter('.btnAuto').focus();
								};
							}).end()
						// Prev, Next button events
						.filter('.btnPrev, .btnNext')
							.on('click', function(e) {
								e.preventDefault();
								// Check item height and animated el
								if ( itemHeight === 0 ) $(window).trigger('resize');
								if ( $feSlItem.is(':animated')
									|| $feSlWrap.is(':animated') ) return false;
								// Set circularDir
								( _options.circular && $(this).hasClass('btnNext') )
									? circularDir = 'next' : circularDir = 'prev';
								// Set currentIdx
								if ( currentIdx === 1 && $(this).hasClass('btnPrev') ) {
									currentIdx = itemSize; // Prev event on first item
								} else if ( currentIdx === itemSize
									&& $(this).hasClass('btnNext') ) {
									currentIdx = 1; // Next event on last item
								} else if ( $(this).hasClass('btnPrev')
									&&  currentIdx - _options.scrollItem < 1 ) {
									currentIdx = 1;
								} else if ( $(this).hasClass('btnNext')
									&& currentIdx + _options.scrollItem > itemSize ) {
									currentIdx = itemSize;
								} else {
									( $(this).hasClass('btnNext') )
										? currentIdx += _options.scrollItem
										: currentIdx -= _options.scrollItem;
								};
								// Call animate slide, stop play
								feSlMethod.slideAnimate();
								playMethod.stopPlay();
							});
						// Swipe(plugin)
						if ( _options.swipeEvent ) {
							var swDirectionBtn;
							$feSlItem.swipe({
								allowPageScroll: 'vertical',
								excludedElements: '',
								swipe: function(swEvent, swDirection) {
									if ( swDirection === 'left' ) {
										swDirectionBtn = 'btnNext';
									} else if ( swDirection === 'right' ) {
										swDirectionBtn = 'btnPrev';
									};
									$feSlNaviBtn
										.filter('.' + swDirectionBtn).trigger('click');
								}
							});
						};
					},
					// Pagination
					pagiEvent: function() {
						// Visible
						if ( _options.visibleItem !== 1 ) return false;
						if ( _options.pagingBtn ) $feSlPaging.show();
						// Pagination anchors event
						$feSlPagingAnchor.on('click', function(e) {
							var $currentList = $feSlPagingList
									.filter('.' + _options.currentClass),
								currentListIdx = $feSlPagingList.index($currentList) + 1;
							currentIdx = $feSlPagingAnchor.index($(this)) + 1;
							e.preventDefault();
							// Check item height, animated el and current el
							if ( itemHeight === 0 ) $(window).trigger('resize');
							if ( $feSlItem.is(':animated')
								|| $feSlWrap.is(':animated')
								|| $(this).parent().is('.' + _options.currentClass) )
								return false;
							// Set circularDir
							if ( _options.circular ) {
								( currentListIdx > currentIdx )
									? circularDir = 'prev' : circularDir = 'next';
							};
							// Call animate slide, stop play
							feSlMethod.slideAnimate();
							playMethod.stopPlay();
						});
					},
					// Animate
					slideAnimate: function() {
						// Hide slide items(disable keyboard focus)
						function hideItem() {
							$feSlItem
								.not($feSlItem.filter('.' + _options.currentClass))
									.css('visibility', 'hidden');
						};
						// Fade Effect
						if ( _options.fadeEffect ) {
							$feSlItem
								.filter('.' + _options.currentClass)
									.fadeOut(_options.fadeSpeed, _options.easing, hideItem).end()
								.filter(':nth-child(' + currentIdx + ')')
									.css('visibility', 'visible').hide()
									.fadeIn(_options.fadeSpeed, _options.easing);
						// Default animate
						} else if ( !_options.circular ) {
							$feSlItem.css('visibility', 'visible'); // Visibility
							// Vertical option
							( _options.vertical )
								? $feSlWrap.stop().animate({
									top: - (itemHeight * (currentIdx - 1))
								}, _options.aniSpeed, _options.easing, hideItem)
								: $feSlWrap.stop().animate({
									left: - (itemWidth * (currentIdx - 1))
								}, _options.aniSpeed, _options.easing, hideItem);
						// Circular animate
						} else {
							// Set dirPosX, dirPosY
							if ( circularDir === 'prev' ) {
								dirPosX = itemWidth, dirPosY = itemHeight;
							} else {
								dirPosX = - itemWidth, dirPosY = - itemHeight;
							};
							// Position reset for circular option
							$feSlItem.filter("." + _options.currentClass).css({
								position: "absolute",
								left: "0",
								top: "0"
							});
							// Vertical(animate currentClass, reset currentIdx position)
							( _options.vertical )
								? $feSlItem
									.filter('.' + _options.currentClass).stop()
										.animate({
											left: '0',
											top: dirPosY
										}, _options.aniSpeed, _options.easing).end()
									.filter(':nth-child(' + currentIdx + ')').css({
										position: 'absolute',
										left: '0',
										top: - dirPosY
									})
								: $feSlItem
									.filter('.' + _options.currentClass).stop()
										.animate({
											left: dirPosX,
											top: '0'
										}, _options.aniSpeed, _options.easing).end()
									.filter(':nth-child(' + currentIdx + ')').css({
										position: 'absolute',
										left: - dirPosX,
										top: '0'
									});
							// Animate currentIdx
							$feSlItem.filter(':nth-child(' + currentIdx + ')')
								.css('visibility', 'visible').stop().animate({
									left: '0',
									top: '0'
								}, _options.aniSpeed, _options.easing, hideItem);
						};
						// Call current item setting
						feSlMethod.setCurrent();
					},
					// Current item
					setCurrent: function() {
						// Remove current class
						$this.find('.' + _options.currentClass)
							.removeClass(_options.currentClass);
						// Add current class
						$feSlItem.filter(':nth-child(' + currentIdx + ')')
							.add($feSlPagingList.filter(':nth-child(' + currentIdx + ')'))
							.addClass(_options.currentClass);
						// Call viewPointOp
						feSlMethod.viewPointOp();
					},
					// Viewpoint option
					viewPointOp: function() {
						if ( _options.visibleItem !== 1 ) {
							var i;
							for ( i = 1; i < _options.visibleItem; i++ ) {
								$feSlItem.filter('.' + _options.currentClass)
									.next($feSlItem).addClass(_options.currentClass);
							};
						};
						// Call hideNavi
						if ( _options.disableNavi ) feSlMethod.hideNavi();
					},
					// Hide prev, next button
					hideNavi: function() {
						var tgBtn;
						// Reset disable button
						$feSlNaviBtn
							.removeClass('disableBtn').removeAttr('disabled');
						// Set disable button
						if ( $feSlItem.eq(0).hasClass(_options.currentClass) ) {
							tgBtn = '.btnPrev';
							$feSlNaviBtn.filter('.btnNext').focus();
						} else if ( $feSlItem.eq(itemSize - 1)
							.hasClass(_options.currentClass) ) {
							tgBtn = '.btnNext';
							$feSlNaviBtn.filter('.btnPrev').focus();
						}
						$feSlNaviBtn.filter(tgBtn)
							.addClass('disableBtn').attr('disabled', 'disabled');
					}
				},
				// Auto play control
				playMethod = {
					autoPlay: function() {
						if ( itemSize === 1 ) return false;
						playMethod.playConfig(); // Call play config
						circularDir = 'next'; // Change circularDir
						// Toggle control buttons, stop play when focusin
						$feSlNaviBtn
							.filter('.btnAuto').hide().end()
							.filter('.btnStop').show();
						$feSlItem.on('focusin', playMethod.stopPlay);
					},
					playConfig: function() {
						// Set currentIdx
						if ( playState === undefined || currentIdx === itemSize ) {
							currentIdx = 1;
						} else if ( currentIdx + _options.scrollItem > itemSize ) {
							currentIdx = itemSize;
						} else {
							currentIdx += _options.scrollItem
						};
						// Call slide animate, setTimeout
						if ( playState !== undefined ) feSlMethod.slideAnimate();
						playState = 'play';
						playTimer = setTimeout(playMethod.playConfig, _options.playSpeed);
					},
					stopPlay: function() {
						clearTimeout(playTimer); // Clear timer
						playState = 'stop'; // Change playState
						// Toggle control buttons
						$feSlNaviBtn
							.filter('.btnStop').hide().end()
							.filter('.btnAuto').show();
					}
				};
			feSlMethod.init();
		});
	};
	/* //feSlide */
})(jQuery, window, document);

/*
 * File: jquery.flexisel.js
 * Version: 1.0.2
 * Description: Responsive carousel jQuery plugin
 * Author: 9bit Studios
 * Copyright 2012, 9bit Studios
 * http://www.9bitstudios.com
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
	$.fn.flexisel = function(options) {
	    var defaults = $.extend({
	        visibleItems : 6,
	        animationSpeed : 200,
	        autoPlay : false,
	        autoPlaySpeed : 3000,
	        pauseOnHover : true,
	        setMaxWidthAndHeight : false,
	        enableResponsiveBreakpoints : true,
	        clone : true,
	        responsiveBreakpoints : {
	            portrait: {
	                changePoint:480,
	                visibleItems: 1
	            },
	            landscape: {
	                changePoint:640,
	                visibleItems: 2
	            },
	            tablet: {
	                changePoint:768,
	                visibleItems: 3
	            }
	        }
	    }, options);

	    /******************************
	    Private Variables
	     *******************************/

	    var object = $(this);
	    var settings = $.extend(defaults, options);
	    var itemsWidth; // Declare the global width of each item in carousel
	    var canNavigate = true;
	    var itemsVisible = settings.visibleItems; // Get visible items
	    var totalItems = object.children().length; // Get number of elements
	    var responsivePoints = [];

	    /******************************
	    Public Methods
	    *******************************/
	    var methods = {
	        init : function() {
	            return this.each(function() {
	                methods.appendHTML();
	                methods.setEventHandlers();
	                methods.initializeItems();
	            });
	        },

	        /******************************
	        Initialize Items
	        Fully initialize everything. Plugin is loaded and ready after finishing execution
	    *******************************/
	        initializeItems : function() {

	            var listParent = object.parent();
	            var innerHeight = listParent.height();
	            var childSet = object.children();
	            methods.sortResponsiveObject(settings.responsiveBreakpoints);

	            var innerWidth = listParent.width(); // Set widths
	            itemsWidth = (innerWidth) / itemsVisible;
	            childSet.width(itemsWidth);
	            if (settings.clone) {
	                childSet.last().insertBefore(childSet.first());
	                childSet.last().insertBefore(childSet.first());
	                object.css({
	                    'left' : -itemsWidth
	                });
	            }

	            object.fadeIn();
	            $(window).trigger("resize"); // needed to position arrows correctly

	        },

	    /******************************
	        Append HTML
	        Add additional markup needed by plugin to the DOM
	    *******************************/
	        appendHTML : function() {
	            object.addClass("nbs-flexisel-ul");
	            object.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
	            object.find("li").addClass("nbs-flexisel-item");

	            var flexiselInner = object.parent(); // flexisel-inner

	            if (settings.setMaxWidthAndHeight) {
	                var baseWidth = $(".nbs-flexisel-item img").width();
	                var baseHeight = $(".nbs-flexisel-item img").height();
	                $(".nbs-flexisel-item img").css("max-width", baseWidth);
	                $(".nbs-flexisel-item img").css("max-height", baseHeight);
	            }
	            $("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(flexiselInner);
	            if (settings.clone) {
	                var cloneContent = object.children().clone();
	                object.append(cloneContent);
	            }
	        },
	        /******************************
	        Set Event Handlers
	    Set events: click, resize, etc
	        *******************************/
	        setEventHandlers : function() {

	            var listParent = object.parent();
	            var flexiselInner = listParent.parent();
	            var childSet = object.children();
	            var leftArrow = flexiselInner.find(".nbs-flexisel-nav-left");
	            var rightArrow = flexiselInner.find(".nbs-flexisel-nav-right");

	            $(window).on("resize", function(event) {

	                methods.setResponsiveEvents();

	                var innerWidth = $(listParent).width();
	                var innerHeight = $(listParent).height();

	                itemsWidth = (innerWidth) / itemsVisible;

	                childSet.width(itemsWidth);
	                if (settings.clone) {
	                    object.css({
	                        'left' : -itemsWidth
	                    });
	                }else {
	                    object.css({
	                        'left' : 0
	                    });
	                }

	                // Hide the arrows if the elements are the same of the visible
	                if (!settings.clone && totalItems <= itemsVisible) {
	                  leftArrow.add(rightArrow).css('visibility', 'hidden');
	                }
	                else {
	                  leftArrow.add(rightArrow).css('visibility', 'visible');

	                  var halfArrowHeight = (leftArrow.height()) / 2;
	                  var arrowMargin = (innerHeight / 2) - halfArrowHeight;
	                  leftArrow.css("top", arrowMargin + "px");
	                  rightArrow.css("top", arrowMargin + "px");
	                }

	            });
	            $(leftArrow).on("click", function(event) {
	                methods.scrollLeft();
	            });
	            $(rightArrow).on("click", function(event) {
	                methods.scrollRight();
	            });
	            if (settings.pauseOnHover == true) {
	                $(".nbs-flexisel-item").on({
	                    mouseenter : function() {
	                        canNavigate = false;
	                    },
	                    mouseleave : function() {
	                        canNavigate = true;
	                    }
	                });
	            }
	            if (settings.autoPlay == true) {

	                setInterval(function() {
	                    if (canNavigate == true)
	                        methods.scrollRight();
	                }, settings.autoPlaySpeed);
	            }
	            var swDirectionBtn;
	            var $slideItem = object.find($('.nbs-flexisel-item'));
	          /*  $slideItem.swipe({
	            	allowPageScroll: 'vertical',
					excludedElements: '',
					swipe: function(swEvent, swDirection) {
						if ( swDirection === 'left' ) {
							swDirectionBtn = 'nbs-flexisel-nav-right';
						} else if ( swDirection === 'right' ) {
							swDirectionBtn = 'nbs-flexisel-nav-left';
						};
						flexiselInner.find($('.' + swDirectionBtn)).trigger('click');

	            }
	            });*/

	        },
	        /******************************
	        Set Responsive Events
	        Set breakpoints depending on responsiveBreakpoints
	        *******************************/

	        setResponsiveEvents: function() {
	            var contentWidth = $('html').width();

	            if(settings.enableResponsiveBreakpoints) {

	                var largestCustom = responsivePoints[responsivePoints.length-1].changePoint; // sorted array

	                for(var i in responsivePoints) {

	                    if(contentWidth >= largestCustom) { // set to default if width greater than largest custom responsiveBreakpoint
	                        itemsVisible = settings.visibleItems;
	                        break;
	                    }
	                    else { // determine custom responsiveBreakpoint to use

	                        if(contentWidth < responsivePoints[i].changePoint) {
	                            itemsVisible = responsivePoints[i].visibleItems;
	                            break;
	                        }
	                        else
	                            continue;
	                    }
	                }
	            }
	        },

	        /******************************
	        Sort Responsive Object
	        Gets all the settings in resposiveBreakpoints and sorts them into an array
	        *******************************/

	        sortResponsiveObject: function(obj) {

	            var responsiveObjects = [];

	            for(var i in obj) {
	                responsiveObjects.push(obj[i]);
	            }

	            responsiveObjects.sort(function(a, b) {
	                return a.changePoint - b.changePoint;
	            });

	            responsivePoints = responsiveObjects;
	        },

	        /******************************
	        Scroll Left
	        *******************************/
	        scrollLeft : function() {
	            if (object.position().left < 0) {
	                if (canNavigate == true) {
	                    canNavigate = false;

	                    var listParent = object.parent();
	                    var innerWidth = listParent.width();

	                    itemsWidth = (innerWidth) / itemsVisible;

	                    var childSet = object.children();

	                    object.animate({
	                        'left' : "+=" + itemsWidth
	                    }, {
	                        queue : false,
	                        duration : settings.animationSpeed,
	                        easing : "linear",
	                        complete : function() {
	                            if (settings.clone) {
	                                childSet.last().insertBefore(
	                                        childSet.first()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)
	                            }
	                            methods.adjustScroll();
	                            canNavigate = true;
	                        }
	                    });
	                }
	            }
	        },
	        /******************************
	        Scroll Right
	        *******************************/
	        scrollRight : function() {
	            var listParent = object.parent();
	            var innerWidth = listParent.width();

	            itemsWidth = (innerWidth) / itemsVisible;

	            var difObject = (itemsWidth - innerWidth);
	            var objPosition = (object.position().left + ((totalItems-itemsVisible)*itemsWidth)-innerWidth);

	            if((difObject <= Math.ceil(objPosition)) && (!settings.clone)){
	                if (canNavigate == true) {
	                    canNavigate = false;

	                    object.animate({
	                        'left' : "-=" + itemsWidth
	                    }, {
	                        queue : false,
	                        duration : settings.animationSpeed,
	                        easing : "linear",
	                        complete : function() {
	                            methods.adjustScroll();
	                            canNavigate = true;
	                        }
	                    });
	                }
	            } else if(settings.clone){
	                if (canNavigate == true) {
	                    canNavigate = false;

	                    var childSet = object.children();

	                    object.animate({
	                        'left' : "-=" + itemsWidth
	                    }, {
	                        queue : false,
	                        duration : settings.animationSpeed,
	                        easing : "linear",
	                        complete : function() {
	                                childSet.first().insertAfter(childSet.last()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)
	                            methods.adjustScroll();
	                            canNavigate = true;
	                        }
	                    });
	                }
	            };
	        },
	        /******************************
	        Adjust Scroll
	         *******************************/
	        adjustScroll : function() {
	            var listParent = object.parent();
	            var childSet = object.children();

	            var innerWidth = listParent.width();
	            itemsWidth = (innerWidth) / itemsVisible;
	            childSet.width(itemsWidth);
	            if (settings.clone) {
	                object.css({
	                    'left' : -itemsWidth
	                });
	            }
	        }
	    };
	    if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
	        return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if (typeof options === 'object' || !options) { // $("#element").pluginName({ option: 1, option:2 });
	        return methods.init.apply(this);
	    } else {
	        $.error('Method "' + method + '" does not exist in flexisel plugin!');
	    }
	};
})(jQuery);

/*!
 * jQuery Selectbox plugin 0.2
 *
 * Copyright 2011-2012, Dimitar Ivanov (http://www.bulgaria-web-developers.com/projects/javascript/selectbox/)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * Date: Tue Jul 17 19:58:36 2012 +0300
 */
(function ($, undefined) {
	var PROP_NAME = 'selectbox',
		FALSE = false,
		TRUE = true;
	/**
	 * Selectbox manager.
	 * Use the singleton instance of this class, $.selectbox, to interact with the select box.
	 * Settings for (groups of) select boxes are maintained in an instance object,
	 * allowing multiple different settings on the same page
	 */
	function Selectbox() {
		this._state = [];
		this._defaults = { // Global defaults for all the select box instances
			classHolder: "sbHolder",
			classHolderDisabled: "sbHolderDisabled",
			classSelector: "sbSelector",
			classOptions: "sbOptions",
			classGroup: "sbGroup",
			classSub: "sbSub",
			classDisabled: "sbDisabled",
			classToggleOpen: "sbToggleOpen",
			classToggle: "sbToggle",
			classFocus: "sbFocus",
			speed: 200,
			effect: "slide", // "slide" or "fade"
			onChange: null, //Define a callback function when the selectbox is changed
			onOpen: null, //Define a callback function when the selectbox is open
			onClose: null //Define a callback function when the selectbox is closed
		};
	}

	$.extend(Selectbox.prototype, {
		/**
		 * Is the first field in a jQuery collection open as a selectbox
		 *
		 * @param {Object} target
		 * @return {Boolean}
		 */
		_isOpenSelectbox: function (target) {
			if (!target) {
				return FALSE;
			}
			var inst = this._getInst(target);
			return inst.isOpen;
		},
		/**
		 * Is the first field in a jQuery collection disabled as a selectbox
		 *
		 * @param {HTMLElement} target
		 * @return {Boolean}
		 */
		_isDisabledSelectbox: function (target) {
			if (!target) {
				return FALSE;
			}
			var inst = this._getInst(target);
			return inst.isDisabled;
		},
		/**
		 * Attach the select box to a jQuery selection.
		 *
		 * @param {HTMLElement} target
		 * @param {Object} settings
		 */
		_attachSelectbox: function (target, settings) {
			if (this._getInst(target)) {
				return FALSE;
			}
			var $target = $(target),
				self = this,
				inst = self._newInst($target),
				sbHolder, sbSelector, sbToggle, sbOptions,
				s = FALSE, optGroup = $target.find("optgroup"), opts = $target.find("option"), olen = opts.length;

			$target.attr("sb", inst.uid);

			$.extend(inst.settings, self._defaults, settings);
			self._state[inst.uid] = FALSE;
			$target.hide();

			function closeOthers() {
				var key, sel,
					uid = this.attr("id").split("_")[1];
				for (key in self._state) {
					if (key !== uid) {
						if (self._state.hasOwnProperty(key)) {
							sel = $("select[sb='" + key + "']")[0];
							if (sel) {
								self._closeSelectbox(sel);
							}
						}
					}
				}
			}

			sbHolder = $("<div>", {
				"id": "sbHolder_" + inst.uid,
				"class": inst.settings.classHolder,
				"tabindex": $target.attr("tabindex")
			});

			sbSelector = $("<a>", {
				"id": "sbSelector_" + inst.uid,
				"href": "#",
				"class": inst.settings.classSelector,
				"click": function (e) {
					e.preventDefault();
					closeOthers.apply($(this), []);
					var uid = $(this).attr("id").split("_")[1];
					if (self._state[uid]) {
						self._closeSelectbox(target);
					} else {
						self._openSelectbox(target);
					}
				}
			});

			sbToggle = $("<a>", {
				"id": "sbToggle_" + inst.uid,
				"href": "#",
				"class": inst.settings.classToggle,
				"click": function (e) {
					e.preventDefault();
					closeOthers.apply($(this), []);
					var uid = $(this).attr("id").split("_")[1];
					if (self._state[uid]) {
						self._closeSelectbox(target);
					} else {
						self._openSelectbox(target);
					}
				}
			});
			sbToggle.appendTo(sbHolder);

			sbOptions = $("<ul>", {
				"id": "sbOptions_" + inst.uid,
				"class": inst.settings.classOptions,
				"css": {
					"display": "none"
				}
			});

			$target.children().each(function(i) {
				var that = $(this), li, config = {};
				if (that.is("option")) {
					getOptions(that);
				} else if (that.is("optgroup")) {
					li = $("<li>");
					$("<span>", {
						"text": that.attr("label")
					}).addClass(inst.settings.classGroup).appendTo(li);
					li.appendTo(sbOptions);
					if (that.is(":disabled")) {
						config.disabled = true;
					}
					config.sub = true;
					getOptions(that.find("option"), config);
				}
			});

			function getOptions () {
				var sub = arguments[1] && arguments[1].sub ? true : false,
					disabled = arguments[1] && arguments[1].disabled ? true : false;
				arguments[0].each(function (i) {
					var that = $(this),
						li = $("<li>"),
						child;
					if (that.is(":selected")) {
						sbSelector.text(that.text());
						s = TRUE;
					}
					if (i === olen - 1) {
						li.addClass("last");
					}
					if (!that.is(":disabled") && !disabled) {
						child = $("<a>", {
							"href": "#" + that.val(),
							"rel": that.val()
						}).text(that.text()).bind("click.sb", function (e) {
							if (e && e.preventDefault) {
								e.preventDefault();
							}
							var t = sbToggle,
							 	$this = $(this),
								uid = t.attr("id").split("_")[1];
							self._changeSelectbox(target, $this.attr("rel"), $this.text());
							self._closeSelectbox(target);
						}).bind("mouseover.sb", function () {
							var $this = $(this);
							$this.parent().siblings().find("a").removeClass(inst.settings.classFocus);
							$this.addClass(inst.settings.classFocus);
						}).bind("mouseout.sb", function () {
							$(this).removeClass(inst.settings.classFocus);
						});
						if (sub) {
							child.addClass(inst.settings.classSub);
						}
						if (that.is(":selected")) {
							child.addClass(inst.settings.classFocus);
						}
						child.appendTo(li);
					} else {
						child = $("<span>", {
							"text": that.text()
						}).addClass(inst.settings.classDisabled);
						if (sub) {
							child.addClass(inst.settings.classSub);
						}
						child.appendTo(li);
					}
					li.appendTo(sbOptions);
				});
			}

			if (!s) {
				sbSelector.text(opts.first().text());
			}

			$.data(target, PROP_NAME, inst);

			sbHolder.data("uid", inst.uid).bind("keydown.sb", function (e) {
				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0,
					$this = $(this),
					uid = $this.data("uid"),
					inst = $this.siblings("select[sb='"+uid+"']").data(PROP_NAME),
					trgt = $this.siblings(["select[sb='", uid, "']"].join("")).get(0),
					$f = $this.find("ul").find("a." + inst.settings.classFocus);
				switch (key) {
					case 37: //Arrow Left
					case 38: //Arrow Up
						if ($f.length > 0) {
							var $next;
							$("a", $this).removeClass(inst.settings.classFocus);
							$next = $f.parent().prevAll("li:has(a)").eq(0).find("a");
							if ($next.length > 0) {
								$next.addClass(inst.settings.classFocus).focus();
								$("#sbSelector_" + uid).text($next.text());
							}
						}
						break;
					case 39: //Arrow Right
					case 40: //Arrow Down
						var $next;
						$("a", $this).removeClass(inst.settings.classFocus);
						if ($f.length > 0) {
							$next = $f.parent().nextAll("li:has(a)").eq(0).find("a");
						} else {
							$next = $this.find("ul").find("a").eq(0);
						}
						if ($next.length > 0) {
							$next.addClass(inst.settings.classFocus).focus();
							$("#sbSelector_" + uid).text($next.text());
						}
						break;
					case 13: //Enter
						if ($f.length > 0) {
							self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
						}
						self._closeSelectbox(trgt);
						break;
					case 9: //Tab
						if (trgt) {
							var inst = self._getInst(trgt);
							if (inst/* && inst.isOpen*/) {
								if ($f.length > 0) {
									self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
								}
								self._closeSelectbox(trgt);
							}
						}
						var i = parseInt($this.attr("tabindex"), 10);
						if (!e.shiftKey) {
							i++;
						} else {
							i--;
						}
						$("*[tabindex='" + i + "']").focus();
						break;
					case 27: //Escape
						self._closeSelectbox(trgt);
						break;
				}
				e.stopPropagation();
				return false;
			}).delegate("a", "mouseover", function (e) {
				$(this).addClass(inst.settings.classFocus);
			}).delegate("a", "mouseout", function (e) {
				$(this).removeClass(inst.settings.classFocus);
			});

			sbSelector.appendTo(sbHolder);
			sbOptions.appendTo(sbHolder);
			sbHolder.insertAfter($target);

			$("html").on('mousedown', function(e) {
				e.stopPropagation();
				$("select").selectbox('close');
			});
			$([".", inst.settings.classHolder, ", .", inst.settings.classSelector].join("")).mousedown(function(e) {
				e.stopPropagation();
			});
			
		},
		/**
		 * Remove the selectbox functionality completely. This will return the element back to its pre-init state.
		 *
		 * @param {HTMLElement} target
		 */
		_detachSelectbox: function (target) {
			var inst = this._getInst(target);
			if (!inst) {
				return FALSE;
			}
			$("#sbHolder_" + inst.uid).remove();
			$.data(target, PROP_NAME, null);
			$(target).show();
		},
		/**
		 * Change selected attribute of the selectbox.
		 *
		 * @param {HTMLElement} target
		 * @param {String} value
		 * @param {String} text
		 */
		_changeSelectbox: function (target, value, text) {
			var onChange,
				inst = this._getInst(target);
			if (inst) {
				onChange = this._get(inst, 'onChange');
				$("#sbSelector_" + inst.uid).text(text);
			}
			value = value.replace(/\'/g, "\\'");
			$(target).find("option[value='" + value + "']").attr("selected", TRUE);
			if (inst && onChange) {
				onChange.apply((inst.input ? inst.input[0] : null), [value, inst]);
			} else if (inst && inst.input) {
				inst.input.trigger('change');
			}
		},
		/**
		 * Enable the selectbox.
		 *
		 * @param {HTMLElement} target
		 */
		_enableSelectbox: function (target) {
			var inst = this._getInst(target);
			if (!inst || !inst.isDisabled) {
				return FALSE;
			}
			$("#sbHolder_" + inst.uid).removeClass(inst.settings.classHolderDisabled);
			inst.isDisabled = FALSE;
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Disable the selectbox.
		 *
		 * @param {HTMLElement} target
		 */
		_disableSelectbox: function (target) {
			var inst = this._getInst(target);
			if (!inst || inst.isDisabled) {
				return FALSE;
			}
			$("#sbHolder_" + inst.uid).addClass(inst.settings.classHolderDisabled);
			inst.isDisabled = TRUE;
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Get or set any selectbox option. If no value is specified, will act as a getter.
		 *
		 * @param {HTMLElement} target
		 * @param {String} name
		 * @param {Object} value
		 */
		_optionSelectbox: function (target, name, value) {
			var inst = this._getInst(target);
			if (!inst) {
				return FALSE;
			}
			//TODO check name
			inst[name] = value;
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Call up attached selectbox
		 *
		 * @param {HTMLElement} target
		 */
		_openSelectbox: function (target) {
			var inst = this._getInst(target);
			//if (!inst || this._state[inst.uid] || inst.isDisabled) {
			if (!inst || inst.isOpen || inst.isDisabled) {
				return;
			}
			var	el = $("#sbOptions_" + inst.uid),
				viewportHeight = parseInt($(window).height(), 10),
				offset = $("#sbHolder_" + inst.uid).offset(),
				scrollTop = $(window).scrollTop(),
				height = el.prev().height(),
				diff = viewportHeight - (offset.top - scrollTop) - height / 2,
				onOpen = this._get(inst, 'onOpen');
			el.css({
				"top": height + "px",
				"maxHeight": (diff - height) + "px"
			});
			inst.settings.effect === "fade" ? el.fadeIn(inst.settings.speed) : el.slideDown(inst.settings.speed);
			$("#sbToggle_" + inst.uid).addClass(inst.settings.classToggleOpen);
			this._state[inst.uid] = TRUE;
			inst.isOpen = TRUE;
			if (onOpen) {
				onOpen.apply((inst.input ? inst.input[0] : null), [inst]);
			}
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Close opened selectbox
		 *
		 * @param {HTMLElement} target
		 */
		_closeSelectbox: function (target) {
			var inst = this._getInst(target);
			//if (!inst || !this._state[inst.uid]) {
			if (!inst || !inst.isOpen) {
				return;
			}
			var onClose = this._get(inst, 'onClose');
			inst.settings.effect === "fade" ? $("#sbOptions_" + inst.uid).fadeOut(inst.settings.speed) : $("#sbOptions_" + inst.uid).slideUp(inst.settings.speed);
			$("#sbToggle_" + inst.uid).removeClass(inst.settings.classToggleOpen);
			this._state[inst.uid] = FALSE;
			inst.isOpen = FALSE;
			if (onClose) {
				onClose.apply((inst.input ? inst.input[0] : null), [inst]);
			}
			$.data(target, PROP_NAME, inst);
		},
		/**
		 * Create a new instance object
		 *
		 * @param {HTMLElement} target
		 * @return {Object}
		 */
		_newInst: function(target) {
			var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1');
			return {
				id: id,
				input: target,
				uid: Math.floor(Math.random() * 99999999),
				isOpen: FALSE,
				isDisabled: FALSE,
				settings: {}
			};
		},
		/**
		 * Retrieve the instance data for the target control.
		 *
		 * @param {HTMLElement} target
		 * @return {Object} - the associated instance data
		 * @throws error if a jQuery problem getting data
		 */
		_getInst: function(target) {
			try {
				return $.data(target, PROP_NAME);
			}
			catch (err) {
				throw 'Missing instance data for this selectbox';
			}
		},
		/**
		 * Get a setting value, defaulting if necessary
		 *
		 * @param {Object} inst
		 * @param {String} name
		 * @return {Mixed}
		 */
		_get: function(inst, name) {
			return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
		}
	});

	/**
	 * Invoke the selectbox functionality.
	 *
	 * @param {Object|String} options
	 * @return {Object}
	 */
	$.fn.selectbox = function (options) {

		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (typeof options == 'string' && options == 'isDisabled') {
			return $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this[0]].concat(otherArgs));
		}

		if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string') {
			return $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this[0]].concat(otherArgs));
		}

		return this.each(function() {
			typeof options == 'string' ?
				$.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this].concat(otherArgs)) :
				$.selectbox._attachSelectbox(this, options);
		});
	};

	$.selectbox = new Selectbox(); // singleton instance
	$.selectbox.version = "0.2";
})(jQuery);

