(function(){
//We declare the variable app to be myCalc
var app = angular.module('myCalc',[]);
//controller for angular with scope that allows us pass values between html and javascript
app.controller('CalculatorController',['$scope',function(){

  var vm = this; //we define a variable for our values
  vm.lumen_options = [375, 600, 900, 1125, 1600];
  vm.current_lumens = 600;
  vm.current_cost = 12;
  vm.current_hours = 3;
  vm.total_days = 365;
  //specifying the values to be used for our conversions
  vm.inc_conversion = 0.0625;
  vm.halo_conversion = 0.0450;
  vm.cfl_conversion = 0.0146;
  vm.led_conversion = 0.0125;
  //Calculation function for wattage consumed by each bulb based on its brightness(lumens):
  vm.calculate = function(){
    vm.inc_wattage = (vm.current_lumens * vm.inc_conversion).toFixed(1);
    vm.halo_wattage = (vm.current_lumens * vm.halo_conversion).toFixed(1);
    vm.cfl_wattage = (vm.current_lumens * vm.cfl_conversion).toFixed(1);
    vm.led_wattage = (vm.current_lumens * vm.led_conversion).toFixed(1);

  //calculations for the cost of running each bulb per year
  //first we define a condition so that nobody can choose more than 24hrs in a day 
    if(vm.current_hours > 24){vm.current_hours = 24; }
    //calculation for total hours in a year
    var total_hours = vm.total_days * vm.current_hours;
    //calculation for cost in cents
    var cost = vm.current_cost  / 100;
    //calculation for total cost for the four bulbs setting results to 2 d.p
    vm.inc_cost =  (((vm.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
    vm.halo_cost = (((vm.halo_wattage * total_hours) / 1000) * cost).toFixed(2);
    vm.cfl_cost =  (((vm.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
    vm.led_cost =  (((vm.led_wattage * total_hours) / 1000) * cost).toFixed(2);
  }
  vm.calculate();

}]);


})();


