(function (angular) {
    angular.module('icsmsControllers').service('courseService', function (ajaxService) {
        var self = this;

        self.getAllcourses = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost/icsmsservices/getAllcourses/courseapi/method/course',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        self.getAllcoursesbyGrade = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost/icsmsservices/getAllcoursesbyGrade/courseapi/method/course',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        self.InsertCourse = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/InsertCourse/courseapi/method/course',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

    });
})
        (angular);

