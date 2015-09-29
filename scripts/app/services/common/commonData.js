(function (angular) {
    angular.module('icsmsControllers').service('commonDataService', function (ajaxService) {
        var self = this;


        self.phoneNumberTypes = [{
                Id: "1",
                Name: "Home"
            }, {
                Id: "2",
                Name: "Phone"
            }, {
                Id: "3",
                Name: "Fax"
            }, {
                Id: "4",
                Name: "Other"
            }];
        
        self.gender = [{
                Id: "m",
                Name: "Male"
            }, {
                Id: "f",
                Name: "Female"
            }];


        self.medium = [{
                Id: "1",
                Name: "English"
            }, {
                Id: "2",
                Name: "Singhaleas"
            }, {
                Id: "3",
                Name: "Tamil"
            }];



        self.grade = [{
                Id: "1",
                Name: "Grade 1"
            }, {
                Id: "2",
                Name: "Grade 2"
            }, {
                Id: "3",
                Name: "Grade 3"
            }, {
                Id: "4",
                Name: "Grade 4"
            }, {
                Id: "5",
                Name: "Grade 5"
            }, {
                Id: "6",
                Name: "Grade 6"
            }, {
                Id: "7",
                Name: "Grade 7"
            }, {
                Id: "8",
                Name: "Grade 8"
            }, {
                Id: "9",
                Name: "Grade 9"
            }, {
                Id: "10",
                Name: "Grade 10"
            }, {
                Id: "11",
                Name: "Grade 11"
            }, {
                Id: "12",
                Name: "Grade 12"
            }, {
                Id: "13",
                Name: "Grade 13"
            }



        ];
        self.admissionType =[
            {
                Id:"",
                Name:"Free"
            },{
                Id:"300",
                Name:"300"
            },{
                Id:"500",
                Name:"500"
            },{
                Id:"1000",
                Name:"1000"
            }
        ],
        self.status =[
            {
                Id:"1",
                Name:"Active"
            },{
                Id:"2",
                Name:"Inactive"
            }
        ]
                    

        ;







    });
})(angular);