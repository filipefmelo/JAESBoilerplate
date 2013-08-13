'use strict';

/* Controllers */

JAESBoilerplateControllers.
    controller('AppCtrl',['$scope', '$http', function ($scope, $http) {

        $http({
            method: 'GET',
            url: '/api/name'
        }).
            success(function (data, status, headers, config) {
                $scope.name = data.name;
            }).
            error(function (data, status, headers, config) {
                $scope.name = 'Error!'
            });

    }]).
    controller('MyCtrl1', ['$scope', function ($scope) {
        // write Ctrl here

    }]).
    controller('MyCtrl2', ['$scope',function ($scope) {
        // write Ctrl here

    }]);
