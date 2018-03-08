(function () {
    'use strict';

    angular.module('app.controllers', [
            'app.module.dashboard'
    ])
    .controller('maincontroller', function maincontroller($scope) {
        $scope.dashboard = "main page";
    })
})();