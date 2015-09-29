(function(angular) {
    angular.module('icsmsControllers').factory('staffFactory', ['$http', function($http) {
    var serviceBase = 'http://localhost/icsmsservices/';
   // var obj = {};       
      
            return {    
        staff: function(callback) {
                    
                      return $http.get(serviceBase + 'staff'); 
                    
                }
    
            };

        }]);

})(angular);    