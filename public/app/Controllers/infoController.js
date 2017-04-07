angular.module('App')
.controller('InfoCtrl', ['$scope', '$http', '$state', 'Auth', 'UserFactory', '$stateParams', 'ProjectFactory', function($scope, $http, $state, Auth, UserFactory, $stateParams, ProjectFactory) {
    $scope.user;

    UserFactory.getUser($stateParams.id)
    .then(
        function success(res){
            $scope.user = res.data
            ProjectFactory.getAllProjects().then(
                function success(res){
                    $scope.projects= {
                        projectTitle: '',
                        projectBody: '',
                        projectDate: '',
                        projectPoster: res.data.user.id,
                        projectPrice: '',
                        projectPic: '',
                    };
                }
            ),
            function error(err){console.log('error')}
    },
        function error(err){console.log('error')}
    )

    $scope.createProject = function() {
        $http.post('/api/projects', $scope.projects).then(function success(res){
            console.log($scope.projects)
            console.log(res)
        })
    }
}])