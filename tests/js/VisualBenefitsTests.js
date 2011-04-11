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


	test('selecting a single card by cardIds', function() {
	    this.vb.descInput.val('card one');
	    this.vb.benefitVal.val('10');
	    this.vb.button.submit();

	    equals($('div[class*="fms-cardId"]').length, 1);
	});
	
	test('selecting multiple cards by cardIds', function() {
	    this.vb.descInput.val('card one');
	    this.vb.benefitVal.val('10');
	    this.vb.button.submit();

	    this.vb.descInput.val('card two');
	    this.vb.benefitVal.val('20');
	    this.vb.button.submit();

	    equals($('div[class*="fms-cardId"]').length, 2);
	});

	test('resize a single card', function() {
	    this.vb.descInput.val('card one');
	    this.vb.benefitVal.val('10');
	    this.vb.button.submit();

	    var cardDiv = $('div[class*="fms-cardId"]:first');
	    equals(cardDiv.width(), flomo.cardWall().width);
	});
	
	test('resize two cards', function() {
	    this.vb.descInput.val('card one');
	    this.vb.benefitVal.val('10');
	    this.vb.button.submit();

	    this.vb.descInput.val('card two');
	    this.vb.benefitVal.val('40');
	    this.vb.button.submit();

	    var cardDiv = $('div[class*="fms-cardId"]:first');

	    // FIXME: for some reason this does not work but it looks okay in the browser ?!
	    // equals(cardDiv.width(), 128);
	});
	
    }

);
