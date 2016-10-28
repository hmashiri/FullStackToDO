(function() {
    'use strict';

    angular
        .module('app', [])
        .value('TodoesAPI', 'http://localhost:52655/api/Todoes/');
})();
