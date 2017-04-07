angular.module('App')
.factory('ProjectFactory', ['$http', '$window', function($http, $window){
    return{
        getAllProjects: function(){
            return $http.get('/api/projects');
        },
        getProject: function(id){
            return $http.get("/api/projects/" + id);
        }
    }
}])