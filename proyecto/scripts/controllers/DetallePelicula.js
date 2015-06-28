
angular
	.module("imdbcutre")
	.controller("DetallePelicula", ["$scope", "Pelicula", function($scope, Pelicula) {

		$scope.pelicula = Pelicula.data;
		
	}]);
