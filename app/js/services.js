var headers = {
    'App-Id': '5a3d8b8d',
    'App-Key': '738e9aca62e7465446b7be8fe4219ffa'
};
var urlBase = 'https://uk.bookingbug.com/api/v1';
var companyId = '41285';
//companyId='test';

bbDemo.factory("companyDetails", ['$http', function ($http) {

    var servicePath = 'company';

    var request = {
        method: 'GET',
        url: urlBase + '/' + servicePath + '/' + companyId,
        headers: headers
    };

    return {
        getCompData: function(){
            var promise = $http(request).then(function(response){
                return response.data;
            });
            return promise;
        }
    }
}]);

bbDemo.service("serviceList", ['$http', function ($http) {

    var servicePath = 'services';

    var request = {
        method: 'GET',
        url: urlBase + '/' + companyId + '/' + servicePath,
        headers: headers
    };

    return {
        getServiceList: function(){
            var promise = $http(request).then(function(response){
                return response;
            }, function(response){
                return response;
            });
            return promise;
        }
    }
}]);