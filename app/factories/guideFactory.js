"use strict";

app.factory("guideFactory", function($q, $http){

	let getBooks = function() {
		return $q (function(resolve, reject) {
			$http.get('../../data/guides.json')
			.then(function(guides){
				resolve(guides);
			})
			.then(function(error){
				console.log(error);
			});
		});
	};
	return {getBooks};

});