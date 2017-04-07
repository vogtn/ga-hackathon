angular.module('App')
.controller('InfoCtrl', ['$scope', '$http', '$state', 'Auth', 'UserFactory', '$stateParams', function($scope, $http, $state, Auth, UserFactory, $stateParams) {
    $scope.user;
    UserFactory.getUser($stateParams.id)
    .then(
        function success(res){$scope.user = res.data},
        function error(err){console.log('error')}
    )
}])