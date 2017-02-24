"use strict";

app.controller("bookCtrl", function($scope, guideFactory){
	guideFactory.getBooks().then((guides)=>{
	$scope.guides = guides.data.guides;
	});
});