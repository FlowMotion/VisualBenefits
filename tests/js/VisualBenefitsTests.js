$(document).ready(function(){
    
    module("Module Visual Benefits");
    
    
    test("Add a card", function() {
        // TODO: this test is ripe for refactoring
        var visualBenefits = flomo.visualBenefits();
        visualBenefits.descInput.val("first card");
        visualBenefits.benefitVal.val("1");
        visualBenefits.button.submit();
        equals($("div", visualBenefits.cardWall).length, 2, "One card was added");
        
        visualBenefits.descInput.val("second card");
        visualBenefits.benefitVal.val("2");
        visualBenefits.button.submit();
        equals($("div", visualBenefits.cardWall).length, 3, "Second card was added");
    });


});
