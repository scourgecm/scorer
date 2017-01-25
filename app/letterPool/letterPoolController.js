(function () {
    'use strict';

    angular
        .module('letterPool')
        .controller('LetterPoolController', LetterPoolController);

    LetterPoolController.inject = ['LetterPoolService'];
    function LetterPoolController(LetterPoolService) {
        var self = this;
        self.howMuch = LetterPoolService.howMuch();
        self.char = "";
        self.letter = undefined;

        self.getLetter = getLetter;

        getLetter(self.char);

        ////////////////////////////

        function getLetter(char) {
            self.letter = LetterPoolService.getLetter(char);
        }
    }
})();