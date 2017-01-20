
describe('LetterPoolServiceTest', function() {
    var poolSvc;    
    
    beforeEach(module("letterPool"));
        
    beforeEach(inject(function(LetterPoolService) {
        poolSvc = LetterPoolService;
    }));
    
    it('should show the correct letter quantity', function() {
        expect(poolSvc.howMuch()).toBe(100);
    });
        
        
});
    