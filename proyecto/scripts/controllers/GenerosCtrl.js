
angular
    .module("jeviteca")
    .controller("GenerosCtrl", ["$scope",'ApiService', function( $scope,ApiService ) {

        ApiService.getData('resources/genres.json').then(function(data){
            console.log(data);
            $scope.generos=data.data;
        });


    }]);