(function(angular) {
    angular.module('icsmsControllers').factory('accountsFactory', ['$http', function($http) {
    var serviceBase = 'http://localhost/icsmsservices/';
   // var obj = {};       
      
            return {    
        accounts: function(callback) {
                    
                      return $http.get(serviceBase + 'accounts'); 
                    
                }
    
            };

        }]);

})(angular);    