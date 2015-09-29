(function(angular) {
    angular.module('icsmsControllers').factory('utilityFactory', function () {
        return {
            isDirty: function(initialData, currentdata) {
                return !angular.equals(initialData, currentdata);
            }
        };
    });
})(angular);