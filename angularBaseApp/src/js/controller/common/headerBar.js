var headerComp = appConfig.components.headerBar;
var headerBar = headerBar || angular.module(headerComp.name, []);

headerBar.directive(headerComp.name, function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: headerComp.templateUrl,
        controller: function($scope, $location) {

        }
    };
});
