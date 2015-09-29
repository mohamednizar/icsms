(function (angular) {
    angular.module('icsmsControllers').service('staffService', function (ajaxService) {
        var self = this;

        self.getAllStaff = function (data, callback) {
            return ajaxService.get({
                url: 'http://localhost/icsmsservices/getAllStaff/staffapi/method/staff',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };


        self.createStaffPhone = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/createStaffPhone/staffapi/method/staff',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.InsertStaff = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/InsertStaff/staffapi/method/staff',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };
        
        self.InsertStaffCourse = function (data, callback) {
            return ajaxService.post({
                
                url: 'http://localhost/icsmsservices/InsertStaffCourse/staffapi/method/staff',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.getStaffCourse = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/getStaffCourse/staffapi/method/staff',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };



        self.ConformStafff = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/ConformStafff/staffapi/method/staff',
                data: data,
                dataType: 'json'
            }).done(function (result) {
                if (typeof callback === "function")
                    callback(result);
            });
        };

        self.DeleteStaff = function (data, callback) {
            return ajaxService.post({
                url: 'http://localhost/icsmsservices/DeleteStaff/staffapi/method/staff',
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

