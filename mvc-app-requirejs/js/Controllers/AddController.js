// AddController.js

/*
 * Main behavior of the AddController
 * @declares dependency: AddView
 * @declares dependency: User.js model
 */
 define(['Views/AddView', 'Models/User'], function (AddView, User) {

 	// call the AddView render method
 	function start() {
 		AddView.render();
 		bindEvents();
 	}

 	// add an event listener for clicks on the #add button
 	// @NOTE: The best way to go would be having event listeners in the view, which would call business logic methods located in the controller or in a new dedicated events module.

 	function bindEvents() {
 		var addBtn = document.getElementById('add');
 		addBtn.addEventListener('click', addUser, false);
 	}

 	function addUser() {
 		var users = JSON.parse(localStorage.users);
 		var userName = document.getElementById('user-name').value;

 		// push new user to array, put updated users back to local storage
 		users.push(new User(userName));
 		localStorage.users = JSON.stringify(users);

 		// require the ListController to execute it's start method, to see results
/* 		require(['Controllers/ListController'], function (ListController) {
 			ListController.start();
 		});*/

		// No longer need to manually load the ListController, instead use the Routing system
		window.location.hash = '#list';

 	}

 	return {
 		start: start
 	};
 });