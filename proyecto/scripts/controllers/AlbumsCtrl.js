
angular
	.module("jeviteca")
	.controller("AlbumsCtrl", ["$scope",'ApiService','DataService', function( $scope,ApiService,DataService ) {


		/*$scope.decirHola = function(){
			console.log('hola');
		}

		$scope.saveFavorite = function(id_album){
			var misFav=[];
			misFav=DataService.getData('favoritos');
			if(!misFav){
				misFav=[];
				misFav.push(id_album);
			}else{
				if(misFav.indexOf(id_album)==-1){
					misFav.push(id_album);
				}

			}

			DataService.saveData('favoritos',misFav);
		}

		$scope.isFavorite = function(id_album){
			var misFav=[];
			misFav=DataService.getData('favoritos');
			if(!misFav){
				return false;
			}else{
				if(misFav.indexOf(id_album)!=-1){
					return true;
				}
			}
			return false;
		}

		$scope.deleteFavorite = function(id_album){
			var misFav=[];
			misFav=DataService.getData('favoritos');
			if(!misFav){
				//no hacer nada
			}else{
				var index = misFav.indexOf(id_album);
				console.log(index);
				if(index!=-1)
					misFav.splice(index,1);
			}
			DataService.saveData('favoritos',misFav);
		}
*/

		ApiService.getData('resources/albums.json').then(function(response){
			var tmpData = response.data;

			$scope.albums=response.data;
		},function(err){
			console.log('ha ocurrido un error');
		});

		$scope.salvarHola = function(key,value){
			DataService.saveData(key,value);
		}

	}]);