
angular
	.module("jeviteca")
	.controller("NavegacionCtrl", ["$scope", "$routeSegment", function( $scope, $routeSegment ) {

		$scope.rutaEsAlbums = function() {
			return $routeSegment.startsWith( "albums" );
		};

		$scope.rutaEsBandas = function() {
			return $routeSegment.startsWith( "bandas" );
		};

		$scope.rutaEsGeneros = function() {
			return $routeSegment.startsWith( "generos" );
		};


	}]);
