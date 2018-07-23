
app.controller("loginCtrl", function($scope, user, $location) {
    
    $scope.email = "";
    $scope.password = "";
    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;
        user.login($scope.email, $scope.password).then(function(activeUser){
            $location.path("/recipes");
        }, function() {
            $scope.invalidLogin = true;
        })
    }


})