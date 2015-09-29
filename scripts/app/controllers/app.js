(function (angular) {
    var appRoot = angular.module('myApp', ['icsmsControllers', 'ngGrid', 'ui.autocomplete', 'ngRoute', 'ui.router',
        'ui.bootstrap.datetimepicker', 'ui.bootstrap', 'ngAnimate']);
    /*
     appRoot.value('failedRequest', { requests: [] });
     appRoot.constant('AUTH_EVENTS', {
     loginSuccess: 'auth-login-success',
     loginFailed: 'auth-login-failed',
     logoutSuccess: 'auth-logout-success',
     sessionTimeout: 'auth-session-timeout',
     notAuthenticated: 'auth-not-authenticated',
     notAuthorized: 'auth-not-authorized' 
     });*/
    appRoot.config(['$stateProvider',
        function ($stateProvider) {

            var studentManagement = {
                name: "studentManagement",
                url: '/studentManagement',
                templateUrl: './views/common/student/studentManagement.html',
                controller: 'STController'
            },newStudent = {
                name: "newStudent",
                url: '/newStudent',
                parent:'studentManagement',
                templateUrl: './views/common/student/newStudent.html',
                controller: 'StudentController'
            },studentCourse = {
                name: "studentCourse",
                url: '/studentCourse',
                parent:'studentManagement',
                templateUrl: './views/common/student/studentCourse.html',
                controller: 'StudentController'
            },students = {
                name: "students",
                url: '/students',
                parent:'studentManagement',
                templateUrl: './views/common/student/students.html',
                controller: 'StudentController'
            },feeCollection = {
                name: "feeCollection",
                url: '/feeCollection',
                parent:'studentManagement',
                templateUrl: './views/common/student/feeCollection.html',
                controller: 'StudentController'
            },studentsProfile = {
                name: "studentsProfile",
                url: '/studentsProfile',
                parent:'studentManagement',
                templateUrl: './views/common/student/studentProfile.html',
                controller: 'StudentController'
            }
            , staffManagement = {
                name: "staffManagement",
                url: '/staffManagement',
                templateUrl: './views/common/staff/staffManagement.html',
                controller: 'SMController'
            }, newStaff = {
                name: "newStaff",
                url: '/newStaff',
                parent: 'staffManagement',
                templateUrl: './views/common/staff/newstaff.html',
                controller: 'StaffController'
            }, staffCourse = {
                name: "staffCourse",
                url: '/staffCourse',
                parent: 'staffManagement',
                templateUrl: './views/common/staff/staffCourse.html',
                controller: 'StaffController'
            }, feePayment = {
                name: "feePayment",
                url: '/feePayment',
                parent: 'staffManagement',
                templateUrl: './views/common/staff/feePayment.html',
                controller: 'StaffController'
            }
            , staffs = {
                name: "staffs",
                url: '/staffs',
                parent: 'staffManagement',
                templateUrl: './views/common/staff/staffs.html',
                controller: 'StaffController'
            }, courseManagement = {
                name: "courseManagement",
                url: '/courseManagement',
                templateUrl: './views/common/course/courseManagement.html',
                controller: 'CRController'
            }, newCourse = {
                name: "newCourse",
                url: '/newCourse',
                parent: 'courseManagement',
                templateUrl: './views/common/course/newCourse.html',
                controller: 'CourseController'
            }, courses = {
                name: "courses",
                url: '/courses',
                parent: 'courseManagement',
                templateUrl: './views/common/course/courses.html',
                controller: 'CourseController'
            }, accountsManagement = {
                name: "accountsManagement",
                url: '/accountsManagement',
                templateUrl: './views/common/accounts/accountsManagement.html',
                controller: 'AMController'
            }, newExpence = {
                name: "newExpences",
                url: '/newExpences',
                parent: 'accountsManagement',
                templateUrl: './views/common/accounts/newExpence.html',
                controller: 'AccountsController'
            },
            dashBoard = {
                name: "dashBoard",
                url: '/dashBoard',
                parent: 'accountsManagement',
                templateUrl: './views/common/accounts/dashBoard.html',
                controller: 'AccountsController'
            },
            OtherIncome = {
                name: "OtherIncome",
                url: '/OtherIncome',
                parent: 'accountsManagement',
                templateUrl: './views/common/accounts/otherIncome.html',
                controller: 'AccountsController'
            }
            ;


            $stateProvider.state(staffManagement);
            $stateProvider.state(studentManagement);
            $stateProvider.state(newStudent);
            $stateProvider.state(students);
            $stateProvider.state(studentCourse);
            $stateProvider.state(studentsProfile);
            $stateProvider.state(newStaff);
            $stateProvider.state(staffCourse);
            $stateProvider.state(staffs);
            $stateProvider.state(feePayment);
            $stateProvider.state(courseManagement);
            $stateProvider.state(newCourse);
            $stateProvider.state(courses);
            $stateProvider.state(feeCollection);
            $stateProvider.state(accountsManagement);
            $stateProvider.state(newExpence);
            $stateProvider.state(dashBoard);
            $stateProvider.state(OtherIncome);
            
        }]).run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams, document) {
            $.blockUI.defaults.css.border = '1px solid #CCCCCC';
            $(document).ajaxStart(function () {
                $.blockUI({
                    message: '<h3 style="color:#555555;"><img src="images/ajax-loader.gif" style="margin-right:15px;" />Just a moment.</h3>',
                    overlayCSS: {
                        opacity: 0
                    },
                    fadeIn: 300,
                    baseZ: 9999999,
                    css: {
                        backgroundColor: '#EEEEEE',
                        borderRadius: '4px',
                        width: '15%',
                        minWidth: '300px',
                        left: '40%',
                        padding: '10px 0 15px',
                        boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)'
                    }
                });

                timer = setTimeout(function () {
                    if (timer)
                        clearTimeout(timer);
                    $.unblockUI();
                }, 2000);
            });

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;



        }]);


})(angular, jQuery);
