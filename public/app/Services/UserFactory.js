angular.module('App')
.factory('UserFactory', ['$http', function($http){
    return{
        getAllUsers: function(){
            return $http.get('/api/users');
        }
    }
}])