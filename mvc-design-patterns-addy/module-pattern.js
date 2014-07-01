'use strict';

/*
 * Module Pattern:
 * - encapsulates "privacy", state and organization using closures
 * - provides for wrapping mix of public and private methods and variables
 * - namespacing protects against "leaking" into global scope and colliding with other code
 * - only a public API is returned / exposed
 * 
 * Similar to an immediately-invoked functional expression, but returns an object rather than a function.
 * Inside the module, we return an object. This gets automatically assigned to the module so we can interact with it.
 *
 * IOW: The scoping function in the module is wrapped around all of our functions, which we then call 
 * and immediately store the return value of.
 *
 */


// ! Module Pattern - simple template
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


// ! Module Pattern - shopping basket example


var basketModule = (function () {

	// privates
	var basket = [];

	function doSomethingPrivate() {
		//...
	}

	function doSomethingElsePrivate() {
		//...
	}

	// Return an object exposed to the public
	return {

		// Add items to our basket
		addItem: function addItem(values) {
			basket.push(values);
		},

		// Get the count of items in the basket
		getItemCount: function getItemCount() {
			return basket.length;
		},

		// Public alias to a private function
		doSomething: doSomethingPrivate,

		// Get the total value of items in the basket
		getTotal: function getTotal() {
			var q = this.getItemCount(),
				p = 0;

			while (q--) {
				p += basket[q].price;
			}

			return p;
		}

	};
})();

// basketModule returns an object with a public API we can use
basketModule.addItem({
item: "bread",
price: 0.5
});

basketModule.addItem({
item: "butter",
price: 0.3
});

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

// However, the following will not work:
// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// the public API
console.log( basketModule.basket );

// This also won't work as it only exists within the scope of our
// basketModule closure, but not the returned public object
console.log( basket );
