(function (angular) {
    angular.module('icsmsControllers').controller("SMController", ['$scope', '$state', '$location',
        function ($scope, $state, $location) {

            $scope.tabs = [
                {title: 'New Staff ', template: "newStaff", active: false},
                {title: 'Staff Course', template: "staffCourse", active: false},
                {title: 'Fee Payment', template: "feePayment", active: false},
                {title: 'Staffs', template: "staffs", active: false},
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
                    var path2 = '/staffManagement/' + tab.template;
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

