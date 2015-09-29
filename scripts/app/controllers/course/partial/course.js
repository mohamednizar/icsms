(function (angular) {
    angular.module('icsmsControllers').controller("CourseController", ['$scope', 'utilityFactory', 'autocompleteFactory', 'courseService',
        function ($scope, utilityFactory, autocompleteFactory, courseService) {

            $scope.grade = {Id: "", Name: ""};
            $scope.medium = {Id: "", Name: ""};
            $scope.course = {Id: "", Name: ""};
            $scope.staffId = "";
            $scope.courseId = "";
            $scope.subject = "";
            $scope.courseFee = "",
            $scope.coursefull = [];
            $scope.sortOptions = "";
            if (!$scope.$$phase)
                $scope.$apply();
            loadAllCourse();

            function loadAllCourse() {
                courseService.getAllcourses().then(function (data) {
                    $scope.courses = data;
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            }
            ;
            sort();
            function sort(){
                    $scope.sortOptions = $scope.grade;
                     if (!$scope.$$phase)
                        $scope.$apply();  
            }
            
            $scope.InsertCourse = function () {
                var Courses = {
                    'course_id': "",
                    'grade': $scope.grade.Id,
                    'subject': $scope.subject,
                    'mediam': $scope.medium.Id,
                    'course_fee': $scope.courseFee

                };
                if (!$scope.$$phase)
                    $scope.$apply();
                courseService.InsertCourse(angular.toJson(Courses)).then(function (data) {
                    var d = data;
                    loadAllCourse();
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            };

            $scope.gradeAutocomplete = autocompleteFactory.gradeAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.grade, current)) {
                    $scope.grade = {
                        Id: current.item.value1,
                        Name: current.item.label,

                    };
                }
            });

            $scope.courseAutocomplete = autocompleteFactory.courseAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.courses, current)) {
                    $scope.courses = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });


            $scope.mediumAutocomplete = autocompleteFactory.mediumAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.medium, current)) {
                    $scope.medium = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });

          
            $scope.coursefull = {
                data: 'courses',
                enablePaging: true,
                columnDefs: [
                    {field: 'subject', displayName: 'Subject'},
                    {field: 'grade', displayName: 'Grade'},
                    {field: 'medium', displayName: 'Medium'},
                    {field: 'teacher_id', displayName: 'Teacher'},
                    {field: 'course_fee', displayName: 'Fee'},
                    ],
                showFooter: true

            };


        }]);
})(angular);

