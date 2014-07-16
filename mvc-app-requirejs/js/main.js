// example of require call
require(['MyMath'], function(MyMath){
	 
	console.log(MyMath.add(1, 2));  
 
});


// Create set of users - declares dependency to User.js model
require(['Models/User'], function(User){
	 
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
});