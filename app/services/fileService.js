app.factory('File',['$http', 'Auth', function($http, Auth) {
    return {

        all :function () {
            console.log(Auth.checkUser());
            return $http({
                method: 'GET',
                url: 'http://backend.dev/api/files',
                headers: {
                    'Authentication' : 'Bearer : ' + Auth.getToken()
                }
            });
        },

        show : function($id) {
            console.log(Auth.checkUser());
            return  $http({
                method: 'GET',
                url: 'http://backend.dev/api/files/' + $id,
                headers: {
                    'Authentication' : 'Bearer : ' + Auth.getToken()
                }
            });
        },

        store : function(data) {
            console.log(Auth.checkUser());
            return $http({
                method: 'POST',
                url: 'http://backend.dev/api/files',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authentication' : 'Bearer : ' + Auth.getToken()
                },
                data: $.param(data)
            });
        },

        destroy : function(id) {
            console.log(Auth.checkUser());
            $http({
                method: 'DELETE',
                url: 'http://backend.dev/api/files/' + id,
                headers: {
                    'Authentication' : 'Bearer : ' + Auth.getToken()
                }
            });
            // .then(function (response) {
            //     Auth.checkStatus(response);
            //     return response;
            // });
        }
    }

}]);