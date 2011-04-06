$(document).ready(
    function() {
	module('simple', {
		   setup: function() {
		       this.repo = flomo.cardRepository();

		       this.cardWall =  flomo.cardWall();
		       this.cardWall.width = 100;
		       this.cardWall.height = 100;

		       this.scaler = flomo.cardScaler(this.repo, this.cardWall);
		   }
	       });

	test('One card', function() {
		 var card = this.repo.newCard('description', 10);
		 var dimension = this.scaler.determineCardSize(card);

		 equals(dimension.width, 100);
		 equals(dimension.height, 100);
	     });

	test('Two cards same value', function() {
		 var card1 = this.repo.newCard('hello world', 10);
		 var card2 = this.repo.newCard('goodbye world', 10);

		 var dimension1 = this.scaler.determineCardSize(card1);
		 equals(dimension1.width, 50);
		 equals(dimension1.height, 50);

		 var dimension2 = this.scaler.determineCardSize(card2);
		 equals(dimension2.width, 50);
		 equals(dimension2.height, 50);
	     });


	test('Two cards different values', function() {
		 var card1 = this.repo.newCard('hello world', 10);
		 var card2 = this.repo.newCard('goodbye world', 40);

		 var dimension1 = this.scaler.determineCardSize(card1);
		 equals(dimension1.width, 20);
		 equals(dimension1.height, 20);

		 var dimension2 = this.scaler.determineCardSize(card2);
		 equals(dimension2.width, 80);
		 equals(dimension2.height, 80);
	     });
    }
);