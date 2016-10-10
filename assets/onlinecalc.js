(function(){
//We declare the variable app to be myCalc
var app = angular.module('myCalc',[]);
//controller for angular with scope that allows us pass values between html and javascript
app.controller('CalculatorController',['$scope',function($scope){

  var vm = this; //we define a variable for our values
  vm.lumen_options = [375, 600, 900, 1125, 1600];
  vm.current_lumens = 600;
  vm.current_cost = 13;
  vm.current_hours = 4;
  vm.total_days = 365;

}]);




















})();


