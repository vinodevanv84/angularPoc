var footerCompo = appConfig.components.footerBar;
var footerBar = footerBar || angular.module(footerCompo.name, []);

footerBar.directive(footerCompo.name, function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: footerCompo.templateUrl,
        controller: function($scope, $location) {

            $scope.pageClick = function() {
                var page_url = this.page.link;
                $location.url(page_url);
            };
            $scope.footerLink = constants.footerLink;
        }
    };
});
