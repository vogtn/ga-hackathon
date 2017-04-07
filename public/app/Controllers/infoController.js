angular.module('App')
.controller('InfoCtrl', ['$scope', '$http', '$state', 'Auth', 'UserFactory', '$stateParams', 'ProjectFactory', function($scope, $http, $state, Auth, UserFactory, $stateParams, ProjectFactory) {
    $scope.user;
    $scope.projects;
    UserFactory.getUser($stateParams.id)
    .then(
        function success(res){
            $scope.user = res.data
            ProjectFactory.getAllProjects().then(
                function success(res){
                    $scope.projects = res.data
                }
            ),
            function error(err){console.log('error')}
    },
        function error(err){console.log('error')}
    )

    $scope.createProject = function() {
        $http.post('/api/projects', $scope.project).then(function success(res){
            console.log(res)
        })
    }


}])