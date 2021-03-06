(function () {
    'use strict';

    angular
        .module('letterPool')
        .controller('LetterPoolController', LetterPoolController);

    LetterPoolController.inject = ['LetterPoolService'];
    function LetterPoolController(LetterPoolService) {
        var self = this;
        self.howMuch = undefined;

        activate();

        ////////////////

        function activate() {
            self.howMuch = LetterPoolService.howMuch();
            // self.howMuch = LetterPoolService.pool;
        }
    }
})();