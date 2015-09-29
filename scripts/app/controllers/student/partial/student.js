(function (angular) {
    angular.module('icsmsControllers').controller("StudentController", ['$scope', '$http', '$routeParams',
        '$filter', '$location', 'studentService', 'utilityFactory', 'autocompleteFactory', 'courseService', 'commonDataService',
        function ($scope, $http, $routeParams, $filter, $location, studentService, utilityFactory, autocompleteFactory, courseService, commonDataService) {


            $scope.studentTable = {};
            $scope.firstName = "";
            $scope.studentDetail = [];
            $scope.lastName = "";
            $scope.address = "";
            $scope.phone = "";
            $scope.gender = {id: "", Name: ""};
            $scope.dob = "";
            $scope.medium = {Id: "", Name: ""};
            $scope.school = "";
            $scope.studentCourse = [];
            $scope.Fees = [];
            $scope.totalfee = 0;
            $scope.StudentCourses = [];
            $scope.myCourse = [];
            $scope.myCourseGrid = [];
            $scope.courseGrid = [];
            $scope.grade = {id: "", Name: ""};
            $scope.studentId = "";
            $scope.status = {id: "", Name: ""};
            $scope.course_id = "";
            $scope.courses = [];
            $scope.std_id = {id: "", Name: ""};
            $scope.selectedCourse = [];
            $scope.admissionType = {Id: "", Name: ""};
            $scope.students = {id: "", Name: ""};
            $scope.startedDate = Date.now();
            $scope.subject = "";
            $scope.courseFee = "";
            $scope.stdCrs = [];
            $scope.StudentCoursesTable = [];
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
            loadAllCourse();
            function loadAllCourse() {
                courseService.getAllcourses().then(function (data) {
                    $scope.courses = data;
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            }
            ;


            $scope.StatusAutocomplete = autocompleteFactory.StatusAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.status, current)) {
                    $scope.status = {
                        Id: current.item.value1,
                        Name: current.item.lable
                    };
                }
            }

            );

            $scope.courseAutocomplete = autocompleteFactory.courseAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.courses, current)) {
                    $scope.coursesId = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });


            $scope.admissionTypeAutocomplete = autocompleteFactory.admissionTypeAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.grade, current)) {
                    $scope.admissionType = {
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

            $scope.gradeAutocomplete = autocompleteFactory.gradeAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.grade, current)) {
                    $scope.grade = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });

            $scope.gradeAutocomplete = autocompleteFactory.gradeAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.grade, current)) {
                    $scope.grade = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });

            $scope.genderAutocomplete = autocompleteFactory.genderAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.gender, current)) {
                    $scope.gender = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });



            $scope.StudenIdAutocomplete = autocompleteFactory.StudenIdAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.StudentId, current)) {
                    $scope.StudentId = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });


            $scope.birthdayPicker = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.birthdayopened = true;

            };

            $scope.joindayPicker = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.joindayopened = true;
            };

            clearStudent();
            function clearStudent() {
                $scope.firstName = "";
                $scope.lastName = "";
                $scope.serialNumber = "";
                $scope.address = "";
                $scope.dob = "";
                $scope.school = "";
                $scope.myCourse = [];
                $scope.grade = "";
                $scope.gender = "";
                $scope.phone = "";
                $scope.medium = "";
                $scope.admissionType = "";
                if (!$scope.$$phase)
                    $scope.$apply();
            }
            ;

            function clearCours() {
                $scope.stdCrs = "";
                $scope.selectedCourse = [];
                if (!$scope.$$phase)
                    $scope.$apply();
            }
            ;

            $scope.clearStudent = function () {
                clearStudent();
            };

            $scope.ConformStudent = function () {
                ConformStudent();
            };
            $scope.DeleteStudent = function () {
                DeleteStudent();
            };

            $scope.getStudentCourse = function () {
                clearCours();
                getStudentCourse();
            };

            $scope.DeleteStudent = function (data) {
                var obj = {
                    "Id": data
                };
                studentService.DeleteStudent(angular.toJson(obj)).then(function (data) {

                    var d = data;
                    loadAllStudent();
                    clearStudent();

                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            };


            $scope.getStudentCourse = function () {
                var obj = {
                    "Id": $scope.std_id.Id
                };
                studentService.getStudentCourse(angular.toJson(obj)).then(function (data) {
                    var d = data;
                    if (d === undefined) {
                        alert('No student Founded');
                    }
                    angular.forEach(data, function (crses) {
                        $scope.stdCrs = crses;
                    });
                });

            };



            $scope.SearchStudent = function () {
                var obj = {
                    "Id": $scope.std_id.Id
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
                    

                });
                

            };
            $scope.ConformStudent = function (data) {
                var obj = {
                    "Id": data
                };
                studentService.ConformStudent(angular.toJson(obj)).then(function (data) {
                    var d = data;
                    loadAllStudent();
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            };




            $scope.addCourse = function () {
                var CourseObj = {
                    course: $scope.course_id,
                    courseFee: $scope.courseFee,
                    subject: $scope.subject
                };

                if (!$scope.$$phase)
                    $scope.$apply();

            };
            $scope.courseGrid = {
                data: 'courses',
                columnDefs: [
                    {field: 'medium', displayName: 'Medium'},
                    {field: 'subject', displayName: 'Subject'},
                    {field: 'course_fee', displayName: 'Course Fee'},
                    {field: '', width: '15%', cellTemplate: '<div class="ngCellText"><button class="btn btn-success btn-xs"  ng-click="addStudentCourse(row)" title="Delete">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-plus" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'}
                ], multipleSelect: false,
                totalServerItems: 'totalServerItems',
                pagingOptions: $scope.pagingOptions,
                filterOptions: $scope.filterOptions

            };



            $scope.myCourseGrid = {
                data: 'myCourse',
                enablePaging: true,
                columnDefs: [
                    {field: 'medium', displayName: 'Medium'},
                    {field: 'subject', displayName: 'Subject'},
                    {field: 'course_fee', displayName: 'Course Fee'}, {field: '', width: '15%', cellTemplate: '<div class="ngCellText"><button class="btn btn-danger btn-xs"  ng-click="removeCourse(row)" title="Delete">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-trash" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'}
                ],
                totalServerItems: 'totalServerItems',
                pagingOptions: $scope.pagingOptions,
                filterOptions: $scope.filterOptions
            };

            $scope.StudentCoursesTable = {
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

            $scope.FeeCollectionGrid = {
                data: 'Fees',
                enablePaging: true,
                columnDefs: [
                    {field: 'subject', displayName: 'Subject'},
                    {field: 'started_date', displayName: 'Started Date'},
                    {field: 'course_fee', displayName: 'Course Fee'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-danger btn-xs"  ng-click="removeFeeCourse(row)" title="Delete">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-trash" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'},
                ],
                multipleSelect: false,
                totalServerItems: 'totalServerItems',
                pagingOptions: $scope.pagingOptions,
                filterOptions: $scope.filterOptions

            };







            $scope.studentTGrid = {
                data: 'studentTable',
                enablePaging: true,
                columnDefs: [
                    {field: 'first_name', displayName: 'First Name'},
                    {field: 'last_name', displayName: 'Last Name'},
                    {field: 'address', displayName: 'Address'},
                    {field: 'phone', displayName: 'Phone'},
                    {field: 'school', displayName: 'School'},
                    {field: 'dob', displayName: 'Date Of Birth'},
                    {field: 'status', displayName: 'Status'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-danger btn-xs"  ng-click="DeleteStudent(row.entity.std_id)" title="Delete">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-trash" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-success btn-xs"  ng-click="ConformStudent(row.entity.std_id)" title="Conform">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-ok" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-primary btn-xs"  ng-click="EditStudent(row.entity.std_id)" title="Edit">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-edit" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-primary btn-xs"  ng-click="ViewStudent(row.entity.std_id)" title="View">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-open" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'}
                ],
                showFooter: true,
                pagingOptions: {pageSizes: [1, 2, 3, 4, 5], pageSize: 1, currentPage: 1}

            };

            $scope.status = function (row) {
                var status = row.entity.status;
                if (status === 1) {

                    row.entity.status = $scope.status.Name;
                }
            };



            $scope.addStudentCourse = function (row) {
                var data = {
                    "course_id": row.entity.course_id,
                    "std_id": $scope.std_id.Id
                };
                //prevent duplication of row to array
                if ($scope.myCourse.indexOf($scope.selectedCourse) == -1) {
                    $scope.myCourse.push(row.entity);
                    $scope.selectedCourse.push(data);
                }
                if (!$scope.$$phase)
                    $scope.$apply();
            };

            $scope.FeeCollection = function (row) {
                if ($scope.Fees.indexOf(row.entity) == -1) {
                    $scope.Fees.push(row.entity);
                    var crs = parseInt (row.entity.course_fee);
                angular.forEach($scope.Fees, function (row) {
                    $scope.totalfee += (crs);
                       console.log($scope.totalfee,'add');  
                    if (!$scope.$$phase)
                        $scope.$apply();

                });

                }
                
               
            };
            $scope.CollectCoursefee = function () {
                var CourseFee = $scope.Fees;
                studentService.CollectCoursefee(angular.toJson(CourseFee)).then(function (data) {
                    var d = data;
                    loadAllStudent();
                    clearStudent();
                    if (!$scope.$$phase)
                        $scope.$apply();

                });
                alert('Student course created');
                loadAllCourse();

            };


//echeck outstanding by (current date - started date)/30 
//
            $scope.createStudentCourse = function () {
                var Course = $scope.selectedCourse;
                studentService.InsertStudentCourse(angular.toJson(Course)).then(function (data) {
                    var d = data;
                    loadAllStudent();
                    clearStudent();
                    $scope.selectedCourse =[];//set the selected course after send to the service
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
                alert('Student course created');
                
                loadAllCourse();
                clearCours();

            };

            $scope.removeFeeCourse = function (row) {
                var count = 0;
            
                angular.forEach($scope.Fees, function (Fees) {
                    if (Fees.std_crs_id === row.entity.std_crs_id) {
                        $scope.Fees.splice(count, 1);
                        var crs = parseInt (Fees.course_fee);
                        $scope.totalfee -= (crs);
                         console.log($scope.totalfee,'sub');   
                        if (!$scope.$$phase)
                            $scope.$apply();
                        return;
                    }
                     
                      
                    count++;
                });

            };

            $scope.removeCourse = function (row) {
                var count = 0;
                angular.forEach($scope.myCourse, function (course) {
                    if (course === row.entity) {
                        $scope.myCourse.splice(count, 1);
                        if (!$scope.$$phase)
                            $scope.$apply();
                        return;
                    }
                    count++;
                });

            };

            $scope.CreateStudent = function () {
                var Student = {
                    "std_id": $scope.studentId,
                    "first_name": $scope.firstName,
                    "last_name": $scope.lastName,
                    "sex": $scope.gender.Name,
                    "address": $scope.address,
                    "phone": $scope.phone,
                    "school": $scope.school,
                    "medium": $scope.medium.Name,
                    "grade": $scope.grade.Name,
                    "dob": $scope.dob
                };
                var Course = $scope.selectedCourse;
                var admission = $scope.admissionType.Name;

                var studentDetail = {
                    "student": Student,
                    "course": Course,
                    "admission": admission
                };

                studentService.InsertStudent(angular.toJson(studentDetail)).then(function (data) {
                    var d = data;
                    clearStudent();
                    if (!$scope.$$phase)
                        $scope.$apply();

                });
                loadAllCourse();
                $scope.myCourse = "";





            };

        }]);
})(angular);
     