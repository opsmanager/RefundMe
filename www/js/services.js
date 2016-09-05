angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){
  this.sayHello = function(){
    alert('hello');
  }
}]);
