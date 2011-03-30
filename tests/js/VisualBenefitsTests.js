$(document).ready(function(){
    
module("Module Visual Benefits");

test("Add a card", function() {
    var visualBenefits = flomo.visualBenefits();
    var desc = $(visualBenefits.selectors.descInput);
    desc.val("first card");
    var benefit = $(visualBenefits.selectors.benefitVal);
    benefit.val("1");
    var submit = $(".fms-enterButton");
    submit.submit();
    
    equals($("div", $(visualBenefits.selectors.cardWall)).length, 2, "One card was added");
    
    desc.val("second card");
    benefit.val("2");
    submit.submit();
    equals($("div", $(visualBenefits.selectors.cardWall)).length, 3, "One card was added");
});


});
