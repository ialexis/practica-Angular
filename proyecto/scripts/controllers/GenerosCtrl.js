


angular
    .module("jeviteca")
    .controller("GenerosCtrl", ["$scope",'ApiService', function( $scope,ApiService ) {

        ApiService.getData('resources/genres.json').then(function(data){
            $scope.generos=data.data;
            console.log($scope.generos);
        });


    }]);