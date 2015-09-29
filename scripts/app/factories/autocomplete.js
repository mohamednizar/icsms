(function (angular) {
    angular.module('icsmsControllers').factory('autocompleteFactory', [
        'commonDataService', 'courseService','studentService',
        function ( commonDataService ,courseService,studentService) {
            return {
                phoneNumberTypeAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: false,
                            onlySelect: false,
                            autoFocus: false,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                var data = commonDataService.phoneNumberTypes;
                                response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.Name,
                                                value1: item.Id
                                            };
                                        }));
                            }
                        }
                    };
                },mediumAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: true,
                            onlySelect: true,
                            autoFocus: true,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                var data = commonDataService.medium;
                                response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.Name,
                                                value1: item.Id
                                            };
                                        }));

                            }
                        }
                    };
                },gradeAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: true,
                            onlySelect: true,
                            autoFocus: true,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                var data = commonDataService.grade;
                                response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.Name,
                                                value1: item.Id
                                            };
                                        }));

                            }
                        }
                    };
                },courseAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: true,
                            onlySelect: true,
                            autoFocus: true,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                courseService.getAllcourses({
                                    query: request.term,
                                    dataType: 'json'
                                }, function (data) {
                                    response($.map(data,
                                            function (item) {
                                                return {
                                                    label: item.subject,
                                                    value1: item.course_id
                                                    
                                                };
                                            }));
                                });
                            }
                        }
                    };
                },StudenIdAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: false,
                            onlySelect: false,
                            autoFocus: false,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                studentService.getAllStudent({
                                    query: request.term,
                                    dataType: 'json'
                                }, function (data) {
                                    response($.map(data,
                                            function (item) {
                                                return {
                                                    label: item.std_id,
                                                    value1: item.std_id
                                                    
                                                };
                                            }));
                                });
                            }
                        }
                    };
                },coursebygradeAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: true,
                            onlySelect: true,
                            autoFocus: true,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                courseService.getAllcoursesbyGrade({
                                    query: request.term,
                                    dataType: 'json'
                                }, function (data) {
                                    response($.map(data,
                                            function (item) {
                                                return {
                                                    label: item.subject,
                                                    value1: item.course_id
                                                    
                                                };
                                            }));
                                });
                            }
                        }
                    };
                },admissionTypeAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: true,
                            onlySelect: true,
                            autoFocus: true,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                var data = commonDataService.admissionType;
                                response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.Name,
                                                value1: item.Id
                                            };
                                        }));

                            }
                        }
                    };
                },genderAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: true,
                            onlySelect: true,
                            autoFocus: true,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                var data = commonDataService.gender;
                                response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.Name,
                                                value1: item.Id
                                            };
                                        }));

                            }
                        }
                    };
                },StatusAutocomplete: function (callback) {
                    return {
                        options: {
                            html: true,
                            focusOpen: true,
                            onlySelect: true,
                            autoFocus: true,
                            minLength: 1,
                            select: function () {
                                var current = arguments[1];
                                if (typeof callback === "function")
                                    callback(current);
                                else
                                    throw new Error("You haven't provided corrent onSelect handler");
                            },
                            source: function (request, response) {
                                var data = commonDataService.status();
                                response($.map(data,
                                        function (item) {
                                            return {
                                                label: item.Name,
                                                value1: item.Id
                                            };
                                        }));

                            }
                        }
                    };
                }
            };

        }]);

})(angular);  