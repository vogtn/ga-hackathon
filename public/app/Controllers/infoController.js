angular.module('App')
.controller('InfoCtrl', ['$scope', '$http', '$state', 'Auth', 'UserFactory', '$stateParams', 'ProjectFactory', function($scope, $http, $state, Auth, UserFactory, $stateParams, ProjectFactory) {
    $scope.user;
    $scope.userId = Auth.currentUser().id

    UserFactory.getUser($scope.userId)
    .then(
        function success(res){
            $scope.user = res.data
    },
        function error(err){console.log('error')}
    )

    $scope.createProject = function() {
        $scope.projects = {
            projectTitle: $scope.project.projectTitle,
            projectBody: $scope.project.projectBody,
            projectDate: $scope.project.projectDate,
            projectPrice: $scope.project.projectPrice,
            projectPic: $scope.project.projectPic,
            projectPoster: $scope.userId

        }


        $http.post('/api/projects', $scope.projects).then(function success(res){
            console.log($scope.projects)
            console.log(res)
        })
    }
}])