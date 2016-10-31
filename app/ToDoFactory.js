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
            AddTodoToDatabase: AddTodoToDatabase,
            RemoveTodoFromDatabase: RemoveTodoFromDatabase,
            UpdateDatabase: UpdateDatabase,
        };
        return service;

        ////////////////

        function getToDo() {

            var defer = $q.defer();

            $http({

                method: 'GET',
                url: TodoesAPI


            }).then(function(response) {

                    if (typeof response.data === 'object') {

                        defer.resolve(response.data);

                    } else {

                        defer.reject(response);
                    }

                },

                function(error) {

                    defer.reject(error);

                });

            return defer.promise;
        }


        function AddTodoToDatabase(todoListItems) {

            var defer = $q.defer();

            $http({

                method: 'POST',
                url: TodoesAPI,
                data: $.param({
                    TodoTaskName: todoListItems.todoTaskName,
                    TodoTaskDescription: todoListItems.todoTaskDescription,
                    TodoPriority: todoListItems.todoPriority
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'

                }

            }).then(function(response) {

                    if (typeof response.data === "object") {

                        defer.resolve(response.data);

                    } else {

                        defer.reject(response);
                    }

                },

                function(error) {

                    defer.reject(error);

                });

            return defer.promise;
        }


        function RemoveTodoFromDatabase(TodoId) {

            var defer = $q.defer();

            $http({

                    method: "DELETE",
                    url: TodoesAPI + TodoId
                })
                .then(function(response) {

                        if (typeof response.data === 'object') {

                            defer.resolve(response.data);

                        } else {

                            defer.reject(response);

                        }

                    },

                    function(error) {

                        defer.reject(error);

                    });

            return defer.promise;
        }



        function UpdateDatabase(todoListItems) {

            var defer = $q.defer();

            $http({

                    method: "PUT",
                    url: TodoesAPI + todoListItems.todoId,
                    data: $.param({
                        TodoId: todoListItems.todoId,
                        TodoTaskName: todoListItems.todoTaskName,
                        TodoTaskDescription: todoListItems.todoTaskDescription,
                        TodoPriority: todoListItems.todoPriority,
                    }),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'

                    }

                })
                .then(function(response) {

                        // check the PUT response to see if it was successful or not
                        if (response.status === 204) {

                            defer.resolve(response.data);

                        } else {

                            defer.reject(response);

                        }

                    },
                    // error handling of server generated error responses
                    function(error) {

                        defer.reject(error);

                    });

            return defer.promise;
        }

    }
})();
