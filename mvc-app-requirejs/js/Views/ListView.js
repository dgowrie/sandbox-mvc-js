// ListView.js

/*
 * Implementing render method
 * init'ed by ListController
 */
define(function () {

	// loops on users to concatenate them
	// into HTML string, inject in the #app
	function render(parameters) {
		var appDiv = document.getElementById('app');

		var users = parameters.users;

		// HTML
		// @NOTE: Using plain HTML in a JavaScript file like this is not an ideal solution,
		// because it’s very hard to maintain. You should instead consider templating. 
		var html = '<ul>';
		for (var i = 0, len = users.length; i < len; i++) {
			html += '<li>' + users[i].name + '</li>';
		}
		html += '</ul>';

		appDiv.innerHTML = html;
	}

	return {
		render: render
	};
});