/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe:     ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
 *     
 *     Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
 *     
 *     Modules Patterns, Revealing Module Pattern
 *     
 *     Modules Patterns, AMD modules
 *     
 * Docs: ...//TODO: Give a link about project documents.
 * 
 * Original Author: Shen Weizhong ( Tony Stark ).
 * 
 * Thanks: ...//TODO: If there are some contributors, just mark them.
 * 
 * Version: 0.1.0-alpha
 * 
 * Creation Date: 2014.04.15 16:46 ( Tony ).
 * 
 * Last Update: 2014.04.15 16:52 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (require) {
	
	var fn, _AMD;
	
	fn = function (require) {
		
		var SJ, srl, easing, modernizr, tlns, extend, _mod, mute, evtName;
		
		SJ = require('jquery');
		
		srl = require('srl');

		modernizr = require('modernizr');
		
		SJ(function ($) {

			tlns = tlns || {}; //top-level namespace

			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';
			
			// TODO: Import basic business logic script here.

			$('a[href=#]').on('click', function (e) {

				e.stopPropagation();

				e.preventDefault();

			});

			$(':root').studioScroll({zindex: 50, cursorborder: 0, cursorborderradius: 0});

			$('aside > ul.accordian').studioScroll({zindex: 50, cursorborder: 0, cursorborderradius: 0});

			$('.accordian').find('.slider-header.current').next().slideDown();

			$('.slider-header').on(evtName, function () {

				if( $(this).next().is(':hidden') ) { 

					$('.slider-header').removeClass('current').next().slideUp(); 

					$(this).toggleClass('current').next().slideDown();

				}

			});

			var choosenItem = $('.slider-content').children('li.choosen');

			choosenItem.data('asd', 0);

			$('.slider-content').find('a').on('mouseover', function (e) {

				var _this = $(this),

					_parent = _this.parent();

				if (!_parent.hasClass('choosen')) {

					_parent.addClass('choosen');

				}

			}).on('mouseleave', function (e) {

				var _this = $(this),

					_parent = _this.parent();

				if (_parent.data('asd') !== 0) {

					_parent.removeClass('choosen');

				}

			});

			$('.slider-content').find('a').on(evtName, function () {

				var _this = $(this),

					_parent = _this.parent();

				$('.accordian').find('li.choosen').removeClass('choosen');

				choosenItem.data('asd', '');

				_parent.data('asd', 0);

				choosenItem = _parent;

				choosenItem.addClass('choosen');

			});
			
		});
		
	};
	
	_AMD = (function (_register, _module) {
		
		var hasDefine, registryProfile;
		
		hasDefine = typeof define === "function" && define.amd;
		
		registryProfile = function () {
			
			hasDefine ? define(_module) : console.error('Sorry! There is no "define" object.');
			
		};
		
		return {
			
			init: registryProfile
			
		};
		
	}(_AMD || {}, fn)).init();
	
} (require));