(function() {
        'use strict';

        angular
            .module('app')
            .controller('MainController', MainController);

        MainController.$inject = ['$http', 'ToDoFactory'];

        /* @ngInject */
        function MainController($http, ToDoFactory) {
            var vm = this;
            vm.title = 'MainController';
            vm.listOftodoItems = [];
            vm.prioritySelected = '1';

            //activate();

            ////////////////

            vm.addItems = function() {
                vm.listOftodoItems.push({
                    priority: parseInt(vm.prioritySelected,10),
                    description: vm.userTaskDesInput,
                    title: vm.userTaskNameInput
                });

                var todoItem = {
                    priority: parseInt(vm.prioritySelected,10),
                    description: vm.userTaskDesInput,
                    title: vm.userTaskNameInput
                };

                ToDoFactory.AddTodoToDatabase(todoItem).then(

                    function(response) {


                    })

                 vm.userTaskNameInput = null;
                 vm.userTaskDesInput = null;
            };


        vm.remove = function(todo) {
            var index = vm.listOftodoItems.indexOf(todo);
            vm.listOftodoItems.splice(index, 1);
        };


    }
})();
