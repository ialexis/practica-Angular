
angular
    .module("jeviteca")
    .service("DataService", ["$http",  function( $http ) {


        this.saveData = function(key,value){
            localStorage.setItem(key,JSON.stringify(value));
            return true;
        }

        this.getData=function(key){
            return JSON.parse(localStorage.getItem(key));
        }

    }]);

