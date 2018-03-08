(function () {
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    abstract: true,
                    templateUrl: 'Views/common/layouts/mainlayout.html',
                })
                .state('app.main', {
                    url: '/dashboard',
                    templateUrl: 'modules/Dashboard/dashboard.html',
                    controller: 'dashboardCtrl',
                    SelectedMenu: 'Dashboard',
                })
            $urlRouterProvider.otherwise('/dashboard');
        }]);

})();