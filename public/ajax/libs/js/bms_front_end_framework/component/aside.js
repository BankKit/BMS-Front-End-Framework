/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe:     ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
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
 * Creation Date: 2014.05.05 16:46 ( Tony ).
 * 
 * Last Update: 2014.05.05 16:53 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Wild Wild Love (PITBULL).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

define(function (require) {

	var SJ, srl, modernizr, clickOrTouch, container, fileInput, fnFileIptChange, fnBtnClick;



	SJ = require('jquery');
	
	srl = require('srl');

	modernizr = require('modernizr');

	modernizr.touch ? clickOrTouch = 'touchstart' : clickOrTouch = 'click';



	SJ('aside > ul.accordian').studioScroll({zindex: 50, cursorborder: 0, cursorborderradius: 0});



	SJ('.accordian').find('.slider-header.current').next().slideDown();

	SJ('.slider-header').on(clickOrTouch, function () {

		if( SJ(this).next().is(':hidden') ) { 

			SJ('.slider-header').removeClass('current').next().slideUp(); 

			SJ(this).toggleClass('current').next().slideDown();

		}

	});

	var choosenItem = SJ('.slider-content').children('li.choosen');

	choosenItem.data('asd', 0);

	SJ('.slider-content').find('a').on('mouseover', function (e) {

		var _this = SJ(this),

			_parent = _this.parent();

		if (!_parent.hasClass('choosen')) {

			_parent.addClass('choosen');

		}

	}).on('mouseleave', function (e) {

		var _this = SJ(this),

			_parent = _this.parent();

		if (_parent.data('asd') !== 0) {

			_parent.removeClass('choosen');

		}

	});

	SJ('.slider-content').find('a').on(clickOrTouch, function () {

		var _this = SJ(this),

			_parent = _this.parent();

		SJ('.accordian').find('li.choosen').removeClass('choosen');

		choosenItem.data('asd', '');

		_parent.data('asd', 0);

		choosenItem = _parent;

		choosenItem.addClass('choosen');

	});

});