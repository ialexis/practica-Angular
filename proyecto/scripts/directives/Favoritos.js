angular
    .module("jeviteca")
    .directive("favoritos", function() {

        return {
            restrict: "AE",
            templateUrl: "views/Favoritos.html",
            replace: true,
            scope: {
                modelToUse: "@",
                id: "="
            },
            link: function(scope) {

                scope.saveFavorite = function(){
                    var misFav=[];
                    //misFav=DataService.getData('favoritos');
                   // misFav=localStorage.getItem('favoritos');

                    misFav = JSON.parse( localStorage.getItem( "favoritos" ));



                    if(!misFav){
                        misFav=[];

                        misFav.push(scope.modelToUse + scope.id);
                    }else{

                        if(misFav.indexOf(scope.modelToUse + scope.id)==-1){
                            misFav.push(scope.modelToUse + scope.id);
                        }

                    }




                    //DataService.saveData('favoritos',misFav);
                    //localStorage.setItem('favoritos',misFav)
                    localStorage.setItem( "favoritos", JSON.stringify( misFav ) );
                }

                scope.isFavorite = function(){
                    var misFav=[];
                    //misFav=DataService.getData('favoritos');
                    //misFav=localStorage.getItem('favoritos');
                    misFav = JSON.parse( localStorage.getItem( "favoritos" ));
                    if(!misFav){
                        return false;
                    }else{
                        if(misFav.indexOf(scope.modelToUse + scope.id)!=-1){
                            return true;
                        }
                    }
                    return false;
                }

                scope.deleteFavorite = function(){
                    var misFav=[];
                    //misFav=DataService.getData('favoritos');
                    //misFav=localStorage.getItem('favoritos');
                    misFav = JSON.parse( localStorage.getItem( "favoritos" ));
                    if(!misFav){
                        //no hacer nada
                    }else{
                        var index = misFav.indexOf(scope.modelToUse + scope.id);
                        console.log(index);
                        if(index!=-1)
                            misFav.splice(index,1);
                    }
                    //DataService.saveData('favoritos',misFav);
                    //localStorage.setItem('favoritos',misFav);
                    localStorage.setItem( "favoritos", JSON.stringify( misFav ) );
                }
            }
        };

    });
