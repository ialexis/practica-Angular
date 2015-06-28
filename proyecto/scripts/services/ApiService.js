
angular
	.module("jeviteca")
	.service("ApiService", ["$http",  function( $http ) {


		this.getData = function (archivo) {
			return $http.get(archivo);
		};

	}]);
