'use strict';

/*
 * Revealing Module Pattern:
 *
 * With this pattern you can use the usual function notation to return private attributes and methods
 * rather than object literal notation

 * All that the Module Pattern does, plus:
 * - allows syntax to be more consistent
 * - makes it very clear which of our functions and vars are publicly accessable
 *
 */


// ! Revealing Module Pattern - simple template

var myRevealingModule = (function () {

	var privateVar = 'Mister Private',
		publicVar = 'Hey there!';

	function privateFunction() {
		console.log("Name: " + privateVar);
	}

	function publicSetName(strName) {
		privateVar = strName;
	}

	function publicGetName() {
		privateFunction();
	}

	// Reveal public pointers to
	// private functions and properties
	return {
		setName: publicSetName,
		greeting: publicVar,
		getName: publicGetName
	};
})();

myRevealingModule.setName('David Gowrie');