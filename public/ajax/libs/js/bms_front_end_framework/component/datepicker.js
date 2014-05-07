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
 * Creation Date: 2014.05.05 17:28 ( Tony ).
 * 
 * Last Update: 2014.05.05 17:49 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Wild Wild Love (PITBULL).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

define(function (require) {

	var SJ, modernizr, clickOrTouch, uiDatePicker, bindDatePicker;



	SJ = require('jquery');

	modernizr = require('modernizr');

	modernizr.touch ? clickOrTouch = 'touchstart' : clickOrTouch = 'click';

	uiDatePicker = require('uiDatePicker');



	SJ.datepicker.regional['zh-CN'] = {
		
		closeText: '关闭',
		
		prevText: '&#x3C;上月',
		
		nextText: '下月&#x3E;',
		
		currentText: '今天',
		
		monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		
		monthNamesShort: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
		
		dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		
		dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		
		dayNamesMin: ['日','一','二','三','四','五','六'],
		
		weekHeader: '周',
		
		dateFormat: 'yy-mm-dd',
		
		firstDay: 1,
		
		isRTL: false,
		
		showMonthAfterYear: false,
		
		yearSuffix: '年'
		
	};
	
	SJ.datepicker.setDefaults(SJ.datepicker.regional['zh-CN']);



	bindDatePicker = function (ipt) {

		ipt.datepicker({
			
			showAnim: 'fadeIn',
			
			showOtherMonths: false
			
		});

	};



	return {

		excute: function (ipt) {

			if (ipt !== null) {

				if (SJ.isArray(ipt)) {

					if (ipt.length !== 0) {

						SJ.each(ipt, function (i, o) {

							bindDatePicker(o);

						});

					}

				} else {

					bindDatePicker(o);

				}

			}

		}

	};

});