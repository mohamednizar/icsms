(function (angular) {
    angular.module('icsmsControllers').service('studentService', function (ajaxService) {
        var self = this;

        self.getAllStudent = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost/icsmsservices/getAllStudent/studentapi/method/student',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        self.SearchStudent = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/SearchStudent/studentapi/method/student',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        
        self.getStudentCourse = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/getStudentCourse/studentapi/method/student',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.InsertStudent = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/InsertStudent/studentapi/method/student',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        
        
        self.InsertStudentCourse = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/InsertStudentCourse/studentapi/method/student',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };


        self.DeleteStudent = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/DeleteStudent/studentapi/method/student',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.ConformStudent = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/ConformStudent/studentapi/method/student',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };


        self.changeStudentStatus = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/changeStudentStatus/studentapi/method/student',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        self.CollectCoursefee = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/CollectCoursefee/studentapi/method/student',
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

