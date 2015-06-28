
// Setter del módulo.
angular.module( "jeviteca", ["ngRoute", "route-segment", "view-segment"] );

angular
	.module( "jeviteca" )

	.config(["$routeSegmentProvider", "$routeProvider", function( $routeSegmentProvider, $routeProvider ) {
		
		$routeSegmentProvider.when( "/albums", "albums" );
		$routeSegmentProvider.when( "/bandas", "bandas" );
		$routeSegmentProvider.when( "/generos", "generos" );

		
		$routeSegmentProvider.segment( "albums", {
			controller: "AlbumsCtrl",
			templateUrl: "views/Albums.html"
		});
		
		$routeSegmentProvider.segment( "bandas", {
			controller: "BandasCtrl",
			templateUrl: "views/Bandas.html"
        });

        $routeSegmentProvider.segment( "generos", {
            controller: "GenerosCtrl",
            templateUrl: "views/Generos.html"
        });




		$routeProvider.otherwise({
			redirectTo: "/albums"
		});
		
	}]);
