$(document).ready(
    function(){

	module("Module Visual Benefits", {
		   setup: function() {
		       this.visualBenefits = flomo.visualBenefits();
		   }
	       });

	test("Add one card", function() {
		 this.visualBenefits.descInput.val("a card");
		 this.visualBenefits.benefitVal.val("1");
		 this.visualBenefits.button.submit();

		 equals($("div", this.visualBenefits.cardWall).length, 2, "One card was added");
	     });

	test("Add two cards", function() {
		 this.visualBenefits.descInput.val("first card");
		 this.visualBenefits.benefitVal.val("1");
		 this.visualBenefits.button.submit();

		 this.visualBenefits.descInput.val("second card");
		 this.visualBenefits.benefitVal.val("2");
		 this.visualBenefits.button.submit();

		 equals($("div", this.visualBenefits.cardWall).length, 3, "Two cards were added");
	     });


    }

);
