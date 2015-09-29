(function (angular) {
    angular.module('icsmsControllers').controller("AMController", ['$scope', '$state','$location',      
        function ($scope,  $state, $location) {

            $scope.tabs = [
                {title: 'Expences ', template: "newExpences", active: false},
                {title: 'Other Income', template: "OtherIncome", active: false},  
                {title: 'Dashboard', template: "dashBoard", active: false}  
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
                    var path2 = '/accountsManagement/' + tab.template;
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

