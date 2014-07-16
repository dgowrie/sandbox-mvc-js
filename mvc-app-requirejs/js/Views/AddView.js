// AddView.js

/*
 * Implementing render method
 * init'ed by AddController
 */
define(function () {

	function render(parameters) {
		var appDiv = document.getElementById('app');
		appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
	}

	return {
		render: render
	};
});
