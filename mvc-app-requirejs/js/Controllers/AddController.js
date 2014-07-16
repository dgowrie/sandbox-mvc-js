// AddController.js

/*
 * Main behavior of the AddController
 */
 define(['Views/AddView'], function (AddView) {

 	// call the AddView render method
 	function start() {
 		AddView.render();
 	}

 	return {
 		start: start
 	};
 });