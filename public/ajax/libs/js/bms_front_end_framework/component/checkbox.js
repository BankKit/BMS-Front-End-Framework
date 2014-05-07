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
 * Creation Date: 2014.05.07 14:22 ( Tony ).
 * 
 * Last Update: 2014.05.07 14:23 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Good Feeling (Flo Rida).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

define(function (require) {

	var SJ, modernizr, clickOrTouch, scheck, bindCheckbox;



	SJ = require('jquery');

	modernizr = require('modernizr');

	modernizr.touch ? clickOrTouch = 'touchstart' : clickOrTouch = 'click';

	scheck = require('scheck');



	bindCheckbox = function (ipt) {

		ipt.studioCheck({

		    checkboxClass: 'studioCheckbox_square-red',

		    radioClass: 'studioRadiobox_square-red',

		    increaseArea: '0'

		});

	};



	return {

		excute: function (ipt) {

			if (ipt !== null) {

				bindCheckbox(ipt);

			}

		}

	};

});