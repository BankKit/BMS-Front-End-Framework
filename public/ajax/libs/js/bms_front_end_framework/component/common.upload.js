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
 * Creation Date: 2014.05.05 16:25 ( Tony ).
 * 
 * Last Update: 2014.05.05 16:36 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Wild Wild Love (PITBULL).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

define(function (require) {

	var SJ, modernizr, clickOrTouch, container, fileInput, fnFileIptChange, fnBtnClick;



	SJ = require('jquery');

	modernizr = require('modernizr');

	modernizr.touch ? clickOrTouch = 'touchstart' : clickOrTouch = 'click';

	container = SJ('.custom-upload');

	fileInput = SJ('.custom-upload input[type=file]');



	fnFileIptChange = function (fileIpt) {

		fileIpt.next().find('input').val(fileIpt.val());

	};

	fnBtnClick = function (e) {

		e.stopPropagation();

		e.preventDefault();

		e.data.fileIpt.get(0).click();

	};



	container.find('input[type=file]').change(function() {

	    fnFileIptChange(SJ(this));

	});

	container.children('.upload').on(clickOrTouch, {fileIpt: fileInput}, fnBtnClick);

});