/**
 * Created by Ivan on 23/06/15.
 */

angular
    .module("jeviteca")
    .directive("elementoTablaGenero", function() {

        return {
            restrict: "AE",
            templateUrl: "views/ElementoTablaGenero.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function( scope ) {

            }
        };

    });



