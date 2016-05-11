'use strict';

describe('servicesCtrl', function() {
    beforeEach(module('bbDemo'));

    var $controller, $scope, controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope.serviceCount', function(){

        it('should be equal to services.length', inject(function($http, $httpBackend) {

            var $scope = {};

            var request = {
                method: 'GET',
                url: 'https://uk.bookingbug.com/api/v1/41285/services',
                headers: {
                    'App-Id': '5a3d8b8d',
                    'App-Key': '738e9aca62e7465446b7be8fe4219ffa'
                }
            };

            $http(request)
                .then(function(response) {
                    $scope.serviceCount = response.data.total_entries;
                    $scope.services = response.data._embedded.services;
                }, function() {
                    $scope.serviceCount = null;
                    $scope.services = null;
                });

            $httpBackend
                .when('GET', 'https://uk.bookingbug.com/api/v1/41285/services')
                .respond(200, {
                    "total_entries": 4,
                    "_embedded": {
                        "services": [
                            {"id": 65607, "name": "Club Fitting"},
                            {"id": 65608, "name": "Putter Fitting"},
                            {"id": 65663, "name": "Driver Fitting"},
                            {"id": 65664, "name": "Shoe Fitting"}
                        ]
                    }
                });

            $httpBackend.flush();

            expect($scope.serviceCount).toEqual($scope.services.length);
        }));
    });
});