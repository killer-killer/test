define(['controllers/controllerModule'],function(controllerModule){
	controllerModule.controller('registerController',['$scope',function($scope){
		$scope.registered=function(){
			console.log($scope.newUser.name);
		}
	}]);
});