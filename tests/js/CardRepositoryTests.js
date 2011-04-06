$(document).ready(
    function () {
	module('Basic Operations', {
		   setup: function() {
		       this.repository = flomo.cardRepository();
		   }
	       });

	test('Create Cards', function () {
		 var card1 = this.repository.newCard('hello world', 1);

		 equals(card1.title, 'hello world');
		 equals(card1.value, 1);

		 var card2 = this.repository.newCard('goodbye world', 2);

		 equals(card2.title, 'goodbye world');
		 equals(card2.value, 2);
	     });

	test('Find Cards', function () {
		 this.repository.newCard('hello world', 1);
		 this.repository.newCard('goodbye world', 2);

		 var card = this.repository.findCard('hello world');

		 equals(card.title, 'hello world');
		 equals(card.value, 1);
	     });

	test('Find card that is not in the repository.', function () {
		 var card = this.repository.findCard('hello world');

		 equals(card, null);
	     });

	module('Queries', {
		   setup: function() {
		       this.repository = flomo.cardRepository();
		   }
	       });

	test('totalValues', function () {
		 this.repository.newCard('hello world', 1);
		 this.repository.newCard('goodbye world', 2);

		 equals(this.repository.totalValue(), 3);
	     });

    }
)