describe('Marks funtion', function () {
    it('If a person has failed, it should be able to give a message', function () {
        var marksObtained = MarkPercentages();

        
        var result = marksObtained.setPassRate("Iviwe", 20);
        assert.equal('Iviwe, You Failed! Bettter luck next time.', result)
    });
    it('If a person has passed, it should be able to give a message', function () {
        var marksObtained = MarkPercentages();

        
        var result = marksObtained.setPassRate("Iviwe", 53);
        assert.equal('Iviwe, Great, you Passed!', result)
    });
    it('should be able to give a message if there is no name entered', function () {
        var errorNoName = MarkPercentages();

        
        var result = errorNoName.setPassRate("");
        assert.equal("You need to enter your name!", result)
    });
    it('should be able to give a message if there is no Percentage entered', function () {
        var errorNoPercent = MarkPercentages();

        var result = errorNoPercent.setPassRate("Iviwe", );
        assert.equal("You need to add your percentage!", result)
    });
    // it('should be able to sort data in ascending order', function () {
    //     var ascendingOrder = MarkPercentages();

        
    //     var result = ascendingOrder.sortData("Iviwe", 20);
    //     var result = ascendingOrder.sortData("Siya", 49);
    //     var result = ascendingOrder.sortData("Bontle", 56);
    //     assert.equal("You need to add your percentage!", result)
    // });
    
});