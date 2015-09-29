(function(angular) {
    angular.module('myApp').controller("RootController", ['$scope', '$location','$timeout','studentService',
        function($scope, $location,$timeout,studentService) {

            //$scope.search = "Search Valueas";

            $scope.std_id = "";
            $scope.studentDetail =[];
            $scope.stdCrs = [];
            $scope.myFunc = function() {
                if ($scope.search === 's') {
                    $location.path('/studentManagement/newStudent');
                    $scope.search = "";
                }
                 if ($scope.search === 't') {
                    $location.path('/staffManagement/newStaff');
                     $scope.search = "";
                }
                 if ($scope.search === 'a') {
                    $location.path('/accountsManagement/newExpences');
                     $scope.search = "";
                }
                 if ($scope.search === 'c') {
                    $location.path('/courseManagement/newCourse');
                     $scope.search = "";
                }
                if ($scope.search === 'p') {
                    $location.path('/studentManagement/studentsProfile');
                     $scope.search = "";
                }
                
                $scope.$apply();
            };
            
            
            
            $scope.SearchStudent = function(){
                
            var obj = {
                "Id":$scope.std_id
            };
                studentService.SearchStudent(angular.toJson(obj)).then(function (data) {
                    var d = data;
                    console.log(d);
                    angular.forEach(data, function (std) {
                        $scope.studentDetail = std;
                    });
                     if (!$scope.$$phase)
                        $scope.$apply();
                   
                });
                
                studentService.getStudentCourse(angular.toJson(obj)).then(function (data) {
                    var d = data;
                    console.log(d);
                    angular.forEach(data, function (crses) {
                        $scope.stdCrs = crses;
                        
                    });
                    if (!$scope.$$phase)
                        $scope.$apply();
                    $location.path('/studentManagement/studentsProfile');
                    
                    
                });

            };
            
            $scope.StudentCoursesTable2 = {
                data: 'stdCrs',
                enablePaging: true,
                columnDefs: [
                    {field: 'subject', displayName: 'Subject'},
                    {field: 'started_date', displayName: 'Started Date'},
                    {field: 'course_fee', displayName: 'Course Fee'},
                    {field: '', width: '15%', cellTemplate: '<div class="ngCellText"><button class="btn btn-success btn-xs"  ng-click="FeeCollection(row)" title="Pay">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-plus" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'}
                ], multipleSelect: false,
                totalServerItems: 'totalServerItems',
                pagingOptions: $scope.pagingOptions,
                filterOptions: $scope.filterOptions
            };
            
            $scope.clock = "loading clock..."; // initialise the time variable
            $scope.tickInterval = 1000; //ms

            var tick = function() {
                $scope.clock = Date.now(); // get the current time
                $timeout(tick, $scope.tickInterval); // reset the timer
            };
            // Start the timer
            $timeout(tick, $scope.tickInterval);

        }]);
})(angular);
