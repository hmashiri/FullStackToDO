(function() {
    'use strict';

    angular
        .module('app')
        .factory('ToDoFactory', ToDoFactory);

    ToDoFactory.$inject = ['$http'];

    /* @ngInject */
    function ToDoFactory(http) {
        var service = {
            getToDo: getToDo
        };
        return service;

        ////////////////

        function getToDo() {
        }

    }
})();