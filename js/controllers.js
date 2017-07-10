'use strict'; 

// app.controller('IndexController', ['$scope', '$http', '$filter', '$modal', 'MyService', 'filterFilter', 'datepickerConfig','dato','datosCuenta',function($scope, $http, $filter,$modal, MyService,filterFilter, datepickerConfig,dato,datosCuenta) {
// $scope.date = moment();
// }]);
angular.module('app', [])
.controller('unicoCtrl', ['$scope', '$http', function($scope , $http) { 

 $scope.congiguracion=[];
$scope.vectorCapacitaciones=[];
  var tempArr = [];
 var i=0;

 $http.get('http://54.202.62.62:1346/capacitacion').then(function (resp) {
$scope.vectorCursos = resp.data.results;
for (var i = 0; i < $scope.vectorCapacitaciones.length; ++i){
        if (i==5){alert("nombre"+$scope.vectorCursos[i].primerNombre);}
       }
});

       // $scope.vectorCursos=tempArr;
        // console.log(tempArr);
 $http.get('http://54.202.62.62:1346/contacto').success(function(respuesta){
 	$scope.contacto = respuesta.results[0];
        $scope.direccion=$scope.contacto.direccion;
        $scope.telefono1=$scope.contacto.telefono1;
        $scope.telefono2=$scope.contacto.telefono2;
        $scope.instagram=$scope.contacto.instagram;
        $scope.facebook=$scope.contacto.facebook;
        $scope.twitter=$scope.contacto.twitter;
        $scope.telefonoMovil=$scope.contacto.telefonoMovil;
        $scope.contactoLineal=$scope.contacto.contactoLineal;
        $scope.emailContacto=$scope.contacto.emailContacto;
        });


}]);
 // for (var i = 0; i < 8; ++i) 
 //        {
 //       $scope.vectorCursos[i].titulo="Titulo";
 //        $scope.vectorCursos[i].subtitulo="Sub titulo";
 //         $scope.vectorCursos[i].img="img"+i+".jpg";
 //      }
//  $http.get('http://54.202.62.62:1346/electoral').success(function(respuesta){
//  		$scope.electoral = respuesta.results;
//       });
// $http.get('http://54.202.62.62:1346/directiva').success(function(respuesta){
//  		$scope.directiva = respuesta.results;
//       });
// $http.get('http://54.202.62.62:1346/comite').success(function(respuesta){
//  		$scope.comite = respuesta.results;
//       });
// $http.get('http://54.202.62.62:1346/deporte').success(function(respuesta){
//  		$scope.deporte = respuesta.results;
//       });
 

