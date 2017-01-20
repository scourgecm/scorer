(function () {
    'use strict';

    angular
        .module('letterPool')
        .service('LetterPoolService', LetterPoolService);

    function LetterPoolService() {
        var self = this;

        self.howMuch = howMuch;
        self.pool =
            [ new Letter("0", 2, 0),
            new Letter('A', 12, 1),
            new Letter('E', 12, 1),
            new Letter('I', 6, 1),
            new Letter('L', 4, 1),
            new Letter('N', 5, 1),
            new Letter('O', 9, 1),
            new Letter('R', 5, 1),
            new Letter('S', 6, 1),
            new Letter('T', 4, 1),
            new Letter('U', 5, 1),
            new Letter('D', 5, 2),
            new Letter('G', 2, 2),
            new Letter('B', 2, 3),
            new Letter('C', 4, 3),
            new Letter('M', 2, 3),
            new Letter('P', 2, 3),
            new Letter('F', 1, 4),
            new Letter('H', 2, 4),
            new Letter('V', 1, 4),
            new Letter('Y', 1, 4),
            new Letter('CH', 1, 5),
            new Letter('Q', 1, 5),
            new Letter('J', 1, 8),
            new Letter('LL', 1, 8),
            new Letter('Ñ', 1, 8),
            new Letter('RR', 1, 8),
            new Letter('X', 1, 8),
            new Letter('Z', 1, 10)
            ];

        ////////////////

        function Letter(char, q, pnts) {
            return { 'char': char, 'q': q, 'pnts': pnts }
        }

        function howMuch() {
            var total = 0;
            angular.forEach(self.pool, function (item, index) {
                total += item.q;
            })
            return total;
        }
    }
})();