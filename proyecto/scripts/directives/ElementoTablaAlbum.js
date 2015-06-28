/**
 * Created by Ivan on 23/06/15.
 */

angular
	.module("jeviteca")
	.directive("elementoTablaAlbum", function() {
		
		return {
			restrict: "AE",
			templateUrl: "views/ElementoTablaAlbum.html",
			replace: true,
			scope: {
				model: "="
			},
			link: function( scope ) {
				
			}
		};
		
	});



