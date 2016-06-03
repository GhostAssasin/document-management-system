'use strict';

app.factory('SubjectsService',SubjectsService);
SubjectsService.$inject = ['$http'];
    function SubjectsService($http) {
        var service = {};
        service.GetAll = GetAll;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll(handleSuccess) {
            
            return $http.get('/subjects').then(handleSuccess);
        }

        function Create(subjects) {
            return $http.post('/subjects', subjects).then();
        }

        function Update(subjects) {
            return $http.put('/subjects', subjects).then();
        }

        function Delete(Id) {
            return $http.delete('/subjects/' + Id);
        }

    }
