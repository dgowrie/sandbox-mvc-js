// ListController.js

/*
 * Main behavior of the ListController
 * @declares dependency: ListView
 */
define(['Views/ListView'], function (ListView) {

	// deserialize the users from local storage
	// pass to ListView render method as an object
	function start() {
		var users = JSON.parse(localStorage.users);
		ListView.render({users: users});
	}

	return {
		start: start
	};
});
