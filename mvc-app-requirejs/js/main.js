// example of require call
require(['MyMath'], function(MyMath){
	 
	console.log(MyMath.add(1, 2));  
 
});


/*
 * Create set of users 
 * declares dependency to User.js model
 * declares dependency to ListController
 */
require(['Models/User', 'Controllers/ListController'], function(User, ListController){
	 
	// manually create a set of users
	// @NOTE: this could be done in a for loop interation, passing in data as the User args
	 
	var users = [new User('Barney'),
				 new User('Cartman'),
				 new User('Sheldon')];

	for (var i = 0, len = users.length; i < len; i++){
		console.log(users[i].name);
	}
	 
	// serialize in JSON the users array and store it in the HTML5 local storage
	localStorage.users = JSON.stringify(users);

	// Call ListController.start to run ListController module
	// @Note: For the moment, we can only manually declare the controller we want to run since we don’t have any routing system yet.
	ListController.start();
});