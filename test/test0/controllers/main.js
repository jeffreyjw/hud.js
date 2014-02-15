MY.app.controller('MainCtrl', [ "$scope", "$location", function($scope, $location){
    $scope.init = function(){
    };

    $scope.CTA = function()
    {
        $location.path("/second");
    };

    $scope.back = function()
    {
        $location.path("/");
    };

    $scope.init();
}]);