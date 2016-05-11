bbDemo.controller('companyCtrl', ['$scope','companyDetails',function($scope, companyDetails) {

    $scope.companyError = false;

    companyDetails.getCompData().then(function(data){
        if (data=='null'){
            $scope.companyError = true;
        }
        $scope.companyName = data.name;
        $scope.companyDesc = data.description;
        $scope.currency_code = data.currency_code;
    });
}]);

bbDemo.controller('servicesCtrl', ['$scope','serviceList',function($scope, serviceList) {

    $scope.serviceError = false;

    serviceList.getServiceList().then(function(response){
            if(response == null || response.hasOwnProperty('status') && response.status != "200"){
                $scope.serviceError = true;
            } else {
                var data = response.data;
                $scope.serviceCount = data.total_entries;
                $scope.servicesData = data._embedded;
                $scope.services = data._embedded.services;
            }
        });
}]);