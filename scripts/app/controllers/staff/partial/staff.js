(function (angular) {
    angular.module('icsmsControllers').controller("StaffController", ['$scope', 'staffService', 'utilityFactory', 'autocompleteFactory','courseService',
        function ($scope, staffService, utilityFactory, autocompleteFactory,courseService) {

            $scope.staffTable = [];
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.staffId = "";
            $scope.Phone = "";
            $scope.address = "";
            $scope.courses = "";
            $scope.fee = "";
            $scope.myPhone = [];
            $scope.courseGrid = [];
            $scope.myCourseGrid =[];
            $scope.myCourse = [];
            $scope.phoneId = "";
            $scope.selectedCourse = [];
            $scope.course_id = "";

            $scope.phoneNumberType = {Id: 0, Name: ""};
            $scope.doj = new Date();
            if (!$scope.$$phase)
                $scope.$apply();



            loadAllStaff();

            function loadAllStaff() {
                staffService.getAllStaff().then(function (data) {
                    $scope.staffTable = data;
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


            $scope.phoneNumberTypeAutocomplete = autocompleteFactory.phoneNumberTypeAutocomplete(function (current) {
                if (utilityFactory.isDirty($scope.phoneNumberType, current)) {
                    $scope.phoneNumberType = {
                        Id: current.item.value1,
                        Name: current.item.label
                    };
                }
            });

            $scope.addPhoneNumber = function () {
                var phoneObj = {
                    phoneId: $scope.phoneId,
                    staffId: $scope.staffId,
                    phoneType: {Id: $scope.phoneNumberType.Id, Name: $scope.phoneNumberType.Name},
                    Phone: $scope.Phone

                };
                if (phoneObj.stffId > 0) {
                    addStaffPhone(phoneObj);
                    $scope.myPhone.push(phoneObj);
                } else {
                    $scope.myPhone.push(phoneObj);
                }

                if (!$scope.$$phase)
                    $scope.$apply();
            };


            $scope.addStaffPhone = function () {
                var phoneObj = {
                    phoneId: $scope.phoneId,
                    staffId: $scope.staffId,
                    phoneType: {Id: $scope.phoneNumberType.Id, Name: $scope.phoneNumberType.Name},
                    Phone: $scope.Phone

                };
                staffService.createStaffPhone(angular.toJson(phoneObj)).then(function (data) {
                    var d = data;
                    loadAllStaff();
                    clearStaff();
                    if (!$scope.$$phase)
                        $scope.$apply();
                });

            };
            $scope.DeleteStaff = function () {
                DeleteStaff();
            };


            $scope.CreateStaff = function () {
                var objStaffDetails = {
                    "staff_id": $scope.staffId,
                    "first_name": $scope.firstName,
                    "last_name": $scope.lastName,
                    "address": $scope.address,
                    "phone": $scope.Phone,
                    "fee_posstion": $scope.fee,
                    "courses": $scope.courses,
                    "doj": $scope.doj

                };

                var objPhone = $scope.myPhone;

                var objstaff = {
                    "teacher": objStaffDetails,
                    "phone": objPhone
                };
                staffService.InsertStaff(angular.toJson(objstaff)).then(function (data) {
                    var d = data;
                    loadAllStaff();
                    clearStaff();
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
                staffService.createStaffPhone(angular.toJson(objPhone)).then(function (data) {
                    var d = data;
                    loadAllStaff();
                    clearStaff();
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            };
            $scope.gridPhone = {
                data: 'myPhone',
                enablePaging: true,
                columnDefs: [
                    {field: 'phoneType.Name', displayName: 'Phone Type'},
                    {field: 'Phone', displayName: 'Number'},
                    {field: '', width: '25%', height: '25%', cellTemplate: '<div class="form-control " data-ng-model="Phone"><button class="btn btn-danger btn-xs"  ng-click="removePhoneNumber(row)" title="Delete"><span class="glyphicon glyphicon-trash" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'}
                ],
                totalServerItems: 'totalServerItems',
                pagingOptions: $scope.pagingOptions,
                filterOptions: $scope.filterOptions

            };
            
            
            $scope.courseGrid = {
                data: 'courses',
                columnDefs: [
                {field: 'medium', displayName: 'Medium'},
                {field: 'subject', displayName: 'Subject'}, 
                {field: 'course_fee', displayName: 'Course Fee'}, 
                {field: '', width: '15%', cellTemplate: '<div class="ngCellText"><button class="btn btn-success btn-xs"  ng-click="addStudentCourse(row)" title="Delete">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-plus" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'}
                ],multipleSelect:false,
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
                {field: 'course_fee', displayName: 'Course Fee'},  {field: '', width: '15%', cellTemplate: '<div class="ngCellText"><button class="btn btn-danger btn-xs"  ng-click="removeCourse(row)" title="Delete">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-trash" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'}
                ],
                totalServerItems: 'totalServerItems',
                pagingOptions: $scope.pagingOptions,
                filterOptions: $scope.filterOptions
            };
            
            $scope.getStaffCourse = function () {
                var obj = {
                    "Id": $scope.staffId
                };
                staffService.getStaffCourse(angular.toJson(obj)).then(function (data) {
                    var d = data;
                    
                    angular.forEach(data, function (crses) {
                        $scope.stfCrs = crses;
                    });
                });

            };
            $scope.StaffCoursesTable = {
                data: 'stfCrs',
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
            
         
            $scope.removeCourse = function (row) {
                var count = 0;
                angular.forEach($scope.myCourse, function (course) {
                    if (course.course_id === row.entity.course_id) {
                        $scope.myCourse.splice(count, 1);
                        if (!$scope.$$phase)
                            $scope.$apply();
                        return;
                    }
                    count++;
                });

            };
            
            $scope.removePhoneNumber = function (row) {
                var count = 0;
                angular.forEach($scope.myPhone, function (phone) {
                    if (phone === row.entity) {
                        $scope.myPhone.splice(count, 1);
                        if (!$scope.$$phase)
                            $scope.$apply();
                        return;
                    }
                    count++;
                });

            }; 
            
            
            $scope.DeleteStaff = function (data) {
                var obj = {
                    "Id": data
                };
                staffService.DeleteStaff(angular.toJson(obj)).then(function (data) {

                    var d = data;
                    loadAllStaff();
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            };
            
            
            
            $scope.ConformStaff = function (data) {
                var obj = {
                    "Id": data
                };
                staffService.ConformStafff(angular.toJson(obj)).then(function (data) {
                    var d = data;
                    loadAllStudent();
                    if (!$scope.$$phase)
                        $scope.$apply();
                });
            };
            
            $scope.createStaffCourse = function (){
                     var Course = $scope.selectedCourse;
               
                    staffService.InsertStaffCourse(angular.toJson(Course)).then(function (data) {
                    var d = data;
                    loadAllStudent();
                    clearStudent();
                    if (!$scope.$$phase)
                        $scope.$apply();
                    
                });
                alert('Staff course created');
                loadAllCourse();
               
                }; 

            $scope.staffs = {
                data: 'staffTable',
                enablePaging: true,
                columnDefs: [
                    {field: 'staff_id', displayName: 'Staff Id'},
                    {field: 'first_name', displayName: 'Fisrt Name'},
                    {field: 'last_name', displayName: 'Last Name'},
                    {field: 'address', displayName: 'Address'},
                    {field: 'phone', displayName: 'myPhone'},
                    {field: 'courses', displayName: 'Courses'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-danger btn-xs"  ng-click="DeleteStaff(row.entity.staff_id)" title="Delete">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-trash" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-success btn-xs"  ng-click="ConformStafff(row.entity.staff_id)" title="Conform">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-ok" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-primary btn-xs"  ng-click="EditStaff(row.entity.staff_id)" title="Edit">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-edit" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'},
                    {field: '', width: '35px', cellTemplate: '<div class="ngCellText"><button class="btn btn-primary btn-xs"  ng-click="ViewStaff(row.entity.staff_id)" title="View">{{row.getProperty(col.field)}}<span class="glyphicon glyphicon-open" style="margin-right: 0px;padding-right: 0px; border-right-style:none;"></span></button></div>'}
                
                ],
                totalServerItems: 'totalServerItems',
                pagingOptions: $scope.pagingOptions,
                filterOptions: $scope.filterOptions,
                showFooter: true

            };



        }]);
})(angular);
     