(function() {
    'use strict';

    angular
        .module('app')
        .factory('ToDoFactory', ToDoFactory);

    ToDoFactory.$inject = ['$http', 'TodoesAPI', '$q'];

    /* @ngInject */
    function ToDoFactory($http, TodoesAPI, $q) {
        var service = {
            getToDo: getToDo,
            AddTodoToDatabase: AddTodoToDatabase
        };
        return service;

        ////////////////

        function getToDo() {

            var defer = $q.defer();

            $http({
                
                method: 'GET',
                url: TodoesAPI


            })
        }

        function AddTodoToDatabase(listOftodoItems) {

            var defer = $q.defer();

            $http({
                
                method: 'POST',
                url: TodoesAPI,
                data: $.param({
                    TodoTaskName: listOftodoItems.title,
                    TodoTaskDescription: listOftodoItems.description,
                    TodoPriority: listOftodoItems.priority
                }),
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'

                }
            
            }).then (function(response) {

                if (typeof response.data === "object") {

                    defer.resolve(response.data);
                
                } else {

                    defer.reject(response);
                }

            },

            function (error) {

                defer.reject(error);
            
            });

            return defer.promise;
        }

    }
})();