'use strict';

// Declare app level module which depends on filters, and services
var JAESBoilerplateValues = angular.module('JAESBoilerplate.values', []);
var JAESBoilerplateControllers = angular.module('JAESBoilerplate.controllers', []);
var JAESBoilerplateFilters = angular.module('JAESBoilerplate.filters', []);
var JAESBoilerplateServices = angular.module('JAESBoilerplate.services', []);
var JAESBoilerplateDirectives = angular.module('JAESBoilerplate.directives', []);

var app = angular.module('JAESBoilerplate', [
        'JAESBoilerplate.values',
        'JAESBoilerplate.controllers',
        'JAESBoilerplate.filters',
        'JAESBoilerplate.services',
        'JAESBoilerplate.directives'
    ]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/view1', {
                templateUrl: 'partials/partial1',
                controller: 'MyCtrl1',
                title: 'view1.pageTitle'
            }).
            when('/view2', {
                templateUrl: 'partials/partial2',
                controller: 'MyCtrl2',
                title: 'view2.pageTitle'
            }).
            otherwise({
                redirectTo: '/view1'
            });
        $locationProvider.html5Mode(true);
    }]).run(['$rootScope', 'TranslationSrvc', function ($rootScope, TranslationSrvc) {
        //rootScope injections
        $rootScope.t = TranslationSrvc.getTranslation;

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            //update title
            if (next.$$route) $rootScope.currentAppTitle = $rootScope.t(next.$$route.title);
        });
    }]);
