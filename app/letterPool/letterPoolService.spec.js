
describe('LetterPoolServiceTest', function() {
    var poolSvc;    
    
    beforeEach(module("scorer"));
        
    beforeEach(inject(function(LetterPoolService) {
        poolSvc = LetterPoolService;
    }));

    
    it('should show the correct letter quantity', function() {
        expect(poolSvc.howMuch).toBe(103);
    });
        
        
});
    