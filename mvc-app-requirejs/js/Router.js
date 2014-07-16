/*
 * Routes
 */
define(function () {

	// declare routes and default if none in URL
	var routes = [
		{
			hash: "#list",
			controller: "ListController"
		},
		{
			hash: "#add",
			controller: "AddController"
		}
	],
		defaultRoute = "#list",
		currentHash = '';

	// set a default hash value in the URL, start repetition of call to hashCheck
	function startRouting() {
		window.location.hash = window.location.hash || defaultRoute;
		setInterval(hashCheck, 100);
	}

	// checks if the hash has changed compared to the currentHash
	// if it matches one of the routes, calls loadController with the corresponding controller name
	function hashCheck() {
		if (window.location.hash !== currentHash) {
			for (var i = 0, currentRoute; currentRoute = routes[i++];) {
				if (window.location.hash == currentRoute.hash) {
					loadController(currentRoute.controller);
				}
			}
			currentHash = window.location.hash;
		}
	}

	// call to require to load the controller’s module and execute its start function
	function loadController(controllerName) {
		require(['Controllers/' + controllerName], function (controller) {
			controller.start();
		});
	}

	return {
		startRouting: startRouting
	};
});