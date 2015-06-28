
angular
	.module("imdbcutre")
	.filter("estreno", function() {
		
		return function( fecha ) {
			
			return "Se estrena en " + fecha;
		};
		
	});
