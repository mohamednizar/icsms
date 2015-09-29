(function (angular) {
    angular.module('icsmsControllers').controller("STController", ['$scope', '$state', '$location',
        function ($scope, $state, $location) {

            $scope.tabs = [
                {title: 'New Student ', template: "newStudent", active: false},
                {title: 'Student Course', template: "studentCourse", active: false},
                {title: 'Students ', template: "students", active: false},
                {title: 'Fee Collection', template: "feeCollection", active: false},
                {title: 'Student Profile', template: "studentsProfile", active: false}
            ];

            $scope.val = "";
            $scope.clickTab = function (data) {
                $state.transitionTo(data);
            };
            //Active Tab when Page Refresh
            function activeTab() {
                var count = 0;
                angular.forEach($scope.tabs, function (tab) {

                    var path1 = $location.path();
                    var path2 = '/studentManagement/' + tab.template;
                    if (path1 === path2) {
                        $scope.tabs[count].active = true;
                    } else {
                        $scope.tabs[count].active = false;
                    }
                    count++;
                });
                if (!$scope.$$phase)
                    $scope.$apply();
            }
            ;

            activeTab();

        }]);
})(angular);

