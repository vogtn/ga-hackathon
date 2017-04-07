angular.module('App')
.factory('UserFactory', ['$http', '$window', function($http, $window){
    return{
        getAllUsers: function(){
            return $http.get('/api/users');
        },
        getUser: function(id){
            return $http.get("/api/users/" + id);
        }
    }
}])