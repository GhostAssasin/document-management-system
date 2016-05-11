'use strict';

app.factory('TeachersService',TeachersService);
TeachersService.$inject = ['$http'];
    function TeachersService($http) {
        var service = {};
        service.GetAll = GetAll;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll(handleSuccess) {
            
            return $http.get('/teacher').then(handleSuccess);
        }

        function Create(teacher) {
            return $http.post('/teacher', teacher).then();
        }

        function Update(teacher) {
            return $http.put('/teacher', teacher).then();
        }

        function Delete(Id) {
            return $http.delete('/teacher/' + Id);
        }

    }
