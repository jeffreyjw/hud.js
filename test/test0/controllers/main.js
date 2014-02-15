MY.app.controller('MainCtrl', [ "$scope", "$location", "HUDService", function($scope, $location, HUDService){
    $scope.service = HUDService;

    $scope.init = function(){
    };

    $scope.CTA = function()
    {
        $location.path("/second");
    };

    $scope.back = function()
    {
        HUDService.set("go", "here");
        HUDService.notifyChange();
        $location.path("/");
    };

    $scope.init();
}]);