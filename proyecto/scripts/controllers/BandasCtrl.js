
angular
	.module("jeviteca")
	.controller("BandasCtrl", ["$scope",'ApiService', function( $scope,ApiService ) {

		ApiService.getData('resources/bands.json').then(function(data){
			$scope.bandas=data.data;
		});


	}]);