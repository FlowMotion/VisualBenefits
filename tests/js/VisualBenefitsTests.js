$(document).ready(
    function(){

	module("Module Visual Benefits", {
		   setup: function() {
		       flomo.cardRepo.init();
		       flomo.cardScaler.init();
		       flomo.visualBenefits.init();

		       this.vb = flomo.visualBenefits.start();
		   }
	       });

	test("Add one card", function() {
		 this.vb.descInput.val("a card");
		 this.vb.benefitVal.val("1");
		 this.vb.button.submit();

		 equals($("div", this.vb.cardWall).length, 2, "One card was added");
	     });

	test("Add two cards", function() {
		 this.vb.descInput.val("first card");
		 this.vb.benefitVal.val("1");
		 this.vb.button.submit();

		 this.vb.descInput.val("second card");
		 this.vb.benefitVal.val("2");
		 this.vb.button.submit();

		 equals($("div", this.vb.cardWall).length, 3, "Two cards were added");
	     });


    }

);
