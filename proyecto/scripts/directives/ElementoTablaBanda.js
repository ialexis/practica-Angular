/**
 * Created by Ivan on 23/06/15.
 */
angular
    .module("jeviteca")
    .directive("elementoTablaBanda", function() {

        return {
            restrict: "AE",
            templateUrl: "views/ElementoTablaBanda.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function( scope ) {




            }
        };

    });
