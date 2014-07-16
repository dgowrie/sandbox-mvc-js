// User.js


// a User will be a simple class with a name attribute:
define(function(){
	 
	function User(name){
		this.name = name || 'Default name';
	}
	 
	return User;
});