app.controller('dashboardController', function($scope, API) {

    $scope.dashboardMsg = constants.dashboardMsg;
    appConfig.serviceAPI.dashboardAPI(API, function(res) {
        $scope.dashboardData = res.data;
    });

    $scope.toggle = function() {
        this.contacts.state = !this.contacts.state;
    };
});
