(function () {
    'use strict';

    angular.module('app.module.dashboard', []);

    angular.module('app.module.dashboard').controller('dashboardCtrl', dashboardCtrl);

    function dashboardCtrl($scope) {
        $scope.dashboard = "dashboard page";

        $scope.years = [{ key: '2018', value: 2018 }, { key: '2019', value: 2019 }];


        $scope.weekdays = [
            { 'key': 'Sunday', 'value': 1 },
            { 'key': 'Monday', 'value': 2 },
            { 'key': 'Tuesday', 'value': 3 },
            { 'key': 'Wednesday', 'value': 4 },
            { 'key': 'Thursday', 'value': 5 },
            { 'key': 'Friday', 'value': 6 },
            { 'key': 'Saturday', 'value': 7 },
            { 'key': 'Sunday', 'value': 1 },
            { 'key': 'Monday', 'value': 2 },
            { 'key': 'Tuesday', 'value': 3 },
            { 'key': 'Wednesday', 'value': 4 },
            { 'key': 'Thursday', 'value': 5 },
            { 'key': 'Friday', 'value': 6 },
            { 'key': 'Saturday', 'value': 7 },
            { 'key': 'Sunday', 'value': 1 },
            { 'key': 'Monday', 'value': 2 },
            { 'key': 'Tuesday', 'value': 3 },
            { 'key': 'Wednesday', 'value': 4 },
            { 'key': 'Thursday', 'value': 5 },
            { 'key': 'Friday', 'value': 6 },
            { 'key': 'Saturday', 'value': 7 },
            { 'key': 'Sunday', 'value': 1 },
            { 'key': 'Monday', 'value': 2 },
            { 'key': 'Tuesday', 'value': 3 },
            { 'key': 'Wednesday', 'value': 4 },
            { 'key': 'Thursday', 'value': 5 },
            { 'key': 'Friday', 'value': 6 },
            { 'key': 'Saturday', 'value': 7 },
            { 'key': 'Sunday', 'value': 1 },
            { 'key': 'Monday', 'value': 2 },
            { 'key': 'Tuesday', 'value': 3 },
            { 'key': 'Wednesday', 'value': 4 },
            { 'key': 'Thursday', 'value': 5 },
            { 'key': 'Friday', 'value': 6 },
            { 'key': 'Saturday', 'value': 7 },
            { 'key': 'Sunday', 'value': 1 },
            { 'key': 'Monday', 'value': 2 },
            { 'key': 'Tuesday', 'value': 3 },
        ];

       // $scope.data = [{ month: 0, monthname: '', days: [{ 'dayname': '', 'date': '' }] }];

        $scope.getdata = function (year, month) {
            $scope.data = [];
            var startmonth = month;
            var endmonth = 0;
            var returndata = getDaysInMonth(startmonth,endmonth,11,year);
            console.log('returndata =', returndata);
            $scope.data = returndata;
        };

        $scope.getdataonchange = function (year, month) {
            $scope.data = [];
            var startmonth = $scope.selectedMonth;
            var endmonth = 0;
            var returndata = getDaysInMonth(startmonth, endmonth, $scope.selectedMonth, year);
            console.log('returndata =', returndata);
            $scope.data = returndata;
        };


        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        $scope.monthFullNames = [
            { name: "January", value: 0 },
            { name: "Febuary", value: 1 },
            { name: "March", value: 2 },
            { name: "April", value: 3 },
            { name: "May", value: 4 },
            { name: "June", value: 5 },
            { name: "July", value: 6 },
            { name: "August", value: 7 },
            { name: "September", value: 8 },
            { name: "October", value: 9 },
            { name: "November", value: 10 },
            { name: "December", value: 11 }];
        var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


        function getDaysInMonth(startmonth,endmonth,x,year) {
            var data = [];
            for (var month = startmonth; month <= x; month++) {
            var date = new Date(year, month, 1);
            var startdayname = weekdays[date.getDay()];
            var days = [];
            if (startdayname === 'Monday') {
                days.push({});
            } else if (startdayname === 'Tuesday') {
                days.push({});
                days.push({});
            }
            else if (startdayname === 'Wednesday') {
                days.push({});
                days.push({});
                days.push({});
            }
            else if (startdayname === 'Thursday') {
                days.push({});
                days.push({});
                days.push({});
                days.push({});
            }else if (startdayname === 'Friday') {
                days.push({});
                days.push({});
                days.push({});
                days.push({});
                days.push({});
            } else if (startdayname === 'Saturday') {
                days.push({});
                days.push({});
                days.push({});
                days.push({});
                days.push({});
                days.push({});
            }
            var returndata = { month: month, monthname: $scope.monthFullNames[new Date(date).getMonth()].name, days: days, startdayname: startdayname };
            while (date.getMonth() === parseInt(month)) {
                var obj = { date: '', dayname: '' };
                obj.fulldate = GetFormattedDate(new Date(date));
                obj.dayname = weekdays[new Date(date).getDay()];
                obj.date = new Date(date).getDate();
                days.push(obj);
                date.setDate(date.getDate() + 1);
            }
            returndata.days = days;
            data.push(returndata);
            }
            year = parseInt(year) + 1;

            for (var month = 0; month < endmonth; month++) {
                var date = new Date(year, month, 1);
                var startdayname = weekdays[date.getDay()];
                var days = [];
                if (startdayname === 'Monday') {
                    days.push({});
                } else if (startdayname === 'Tuesday') {
                    days.push({});
                    days.push({});
                }
                else if (startdayname === 'Wednesday') {
                    days.push({});
                    days.push({});
                    days.push({});
                }
                else if (startdayname === 'Thursday') {
                    days.push({});
                    days.push({});
                    days.push({});
                    days.push({});
                } else if (startdayname === 'Friday') {
                    days.push({});
                    days.push({});
                    days.push({});
                    days.push({});
                    days.push({});
                } else if (startdayname === 'Saturday') {
                    days.push({});
                    days.push({});
                    days.push({});
                    days.push({});
                    days.push({});
                    days.push({});
                }
                var returndata = { month: month, monthname: $scope.monthFullNames[new Date(date).getMonth()].name, days: days, startdayname: startdayname };
                while (date.getMonth() === month) {
                    var obj = { date: '', dayname: '' };
                    obj.fulldate = GetFormattedDate(new Date(date));
                    obj.dayname = weekdays[new Date(date).getDay()];
                    obj.date = new Date(date).getDate();
                    days.push(obj);
                    date.setDate(date.getDate() + 1);
                }
                returndata.days = days;
                data.push(returndata);
            }
            return data;
        }


        function getAllDetail(year, months) {

        }


        function GetFormattedDate(todayTime) {
            todayTime = new Date(todayTime);
            var month = todayTime.getMonth();
            var day = todayTime.getDate();
            var year = todayTime.getFullYear();
            return day + "-" + monthNames[month] + "-" + year;
        };

        $scope.onchangedate = function (x) {
            alert(x.fulldate);
        };
    }

   
})();