(function (angular) {
    angular.module('icsmsControllers').controller("AccountsController", ['$scope' ,'studentService',
        function ($scope,studentService) {


            $scope.studentTable = [];

            if (!$scope.$$phase)
                $scope.$apply();

            loadAllStudent();

            function loadAllStudent() {
                studentService.getAllStudent().then(function (data) {
                    $scope.studentTable = data;
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            }
            ;



        }]);
})(angular);
     