(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', 'ToDoFactory'];

    /* @ngInject */
    function MainController($http, ToDoFactory) {
        var vm = this;

        vm.TodoItems = [];
        vm.prioritySelected = '1';

        activate();

        ////////////////

        function activate() {

            ToDoFactory.getToDo().then(

                function(response) {

                    vm.TodoItems = response;

                }

            );
        }



        vm.addItems = function() {

            var todoListItems = {
                todoPriority: parseInt(vm.prioritySelected, 10),
                todoTaskDescription: vm.userTaskDesInput,
                todoTaskName: vm.userTaskNameInput
            };

            ToDoFactory.AddTodoToDatabase(todoListItems).then(

                function(response) {

                    todoListItems.todoId = response.todoId;
                    vm.TodoItems.push(todoListItems);

                })

            vm.userTaskNameInput = null;
            vm.userTaskDesInput = null;
        };


        vm.remove = function(TodoId) {


            ToDoFactory.RemoveTodoFromDatabase(TodoId).then(

                function(response) {

                    var index = vm.TodoItems.map(function(backend) {
                        return backend.todoId;
                    }).indexOf(TodoId);

                    vm.TodoItems.splice(index, 1);


                });
        };

        vm.update = function(id, taskName, taskDescription, priority) {

            var todoListItems = {

                todoId: id,
                todoTaskName: taskName,
                todoTaskDescription: taskDescription,
                todoPriority: parseInt(priority, 10)
            }

            ToDoFactory.UpdateDatabase(todoListItems).then(

                function(response) {

                    var index = vm.TodoItems.map(function(backend) {
                        return backend.todoId;
                    }).indexOf(id);

                    vm.TodoItems[index] = {
                        todoId: id,
                        todoTaskName: taskName,
                        todoTaskDescription: taskDescription,
                        todoPriority: parseInt(priority, 10)
                    };

                });

        }


    }
})();
