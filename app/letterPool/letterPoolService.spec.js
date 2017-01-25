
describe('LetterPoolServiceTest', function () {
    var LetterPoolService;

    beforeEach(module("letterPool"));

    beforeEach(inject(function (_LetterPoolService_) {
        LetterPoolService = _LetterPoolService_;
    }));

    it('should show the correct letter quantity', function () {
        expect(LetterPoolService.howMuch()).toBe(100);
    });

    it('should equals given letter', function () {
        var letterA = { 'char': 'A', 'q': 12, 'pnts': 1 };
        var letter0 = { 'char': '0', 'q': 2, 'pnts': 0 };

        var getA = LetterPoolService.getLetter("A");
        var get0 = LetterPoolService.getLetter("0")

        expect(getA.char).toEqual(letterA.char);
        expect(get0.char).toEqual(letter0.char);
        expect(getA.pnts).toEqual(letterA.pnts);
        expect(get0.pnts).toEqual(letter0.pnts);
    });

    it('should reduce letter quantity on each call', function () {
        var qTotal = LetterPoolService.howMuch();
        var q = LetterPoolService.getLetter("A").q;
        var qTotalLeft = LetterPoolService.howMuch();

        expect(LetterPoolService.getLetter("A").q).toBe(q - 1);
        expect(qTotal).toBeGreaterThan(qTotalLeft);
    });

    it('should reset item pool apropiately', function () {
        var pool = [];
        angular.copy(LetterPoolService.pool, pool)
        LetterPoolService.getLetter("A");
        LetterPoolService.getLetter("A");
        LetterPoolService.getLetter("A");

        expect(pool).not.toEqual(LetterPoolService.pool);

        LetterPoolService.resetPool();
        expect(pool).toEqual(LetterPoolService.pool);
    });

});
