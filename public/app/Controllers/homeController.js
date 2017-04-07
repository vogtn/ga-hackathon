angular.module('App')
.controller('UserCtrl', ['$scope', '$http', '$state', 'Auth', 'UserFactory', function($scope, $http, $state, Auth, UserFactory) {
    $scope.users;
    $scope.type = Auth.currentUser().userType
    getAllUsers();
    
    function getAllUsers(){
        UserFactory.getAllUsers()
        .then(
            function success(res){$scope.users = res.data},
            function error(err){console.log('error')}
        )
    }
}])