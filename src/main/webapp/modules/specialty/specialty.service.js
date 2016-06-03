'use strict';

app.factory('SpecialtyService',SpecialtyService);
TeachersService.$inject = ['$http'];
    function SpecialtyService($http) {
        var service = {};
        service.GetAll = GetAll;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;
        
        function GetAll(handleSuccess) {
            
            return $http.get('/specialty').then(handleSuccess);
        }

        function Create(specialty) {
            return $http.post('/specialty', specialty).then();
        }

        function Update(specialty) {
            return $http.put('/specialty', specialty).then();
        }

        function Delete(Id) {
            return $http.delete('/specialty/' + Id);
        }

    }
