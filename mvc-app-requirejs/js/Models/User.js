// User.js

/*
 * Model for User
 */

// a User will be a simple class with a name attribute:
define(function(){
	 
	function User(name){
		this.name = name || 'Default name';
	}
	 
	return User;
});