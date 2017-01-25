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
        self.letter = null;

        self.getLetter = getLetter;

        ////////////////////////////

        function getLetter() {
            self.char = self.char.toUpperCase();
            self.letter = LetterPoolService.getLetter(self.char);
            
            var regex = /([a-zA-Z])/;
            if (regex.test(self.char)){
                self.letter = null;
            }
        }
    }
})();