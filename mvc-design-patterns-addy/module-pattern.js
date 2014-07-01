'use strict';

var myNamespace = (function () {

	var myPrivateVar,
		myPrivateMethod;

	// A private counter variable
	myPrivateVar = 0;

	// A private function which logs any arguments
	myPrivateMethod = function myPrivateMethod(foo) {
		console.log(foo);
	};

	return {

		// A public variable
		myPublicVar: 'foo',

		// A public function utilizing privates
		myPublicFunction: function myPublicFunction(bar) {

			// Increment our private counter
			myPrivateVar++;

			// Call our proviate method using bar
			myPrivateMethod(barr);
		}
	};

})();

