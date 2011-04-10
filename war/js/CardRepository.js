(function() {

     function initCardRepository() {

	 flomo.cardRepo.Repository = function() {

	     that = {};

	     that.cards = new Array();
	     that.currentId = 1;

	     that.newCard = function(cardTitle, size) {
		 var card = {
		     title: cardTitle,
		     value: parseInt(size),
		     _id: this.currentId
		 };
		 card.id = function() {
		     return card._id;
		 };

		 this.cards[card.title] = card;
		 this.currentId = this.currentId + 1;

		 return card;
	     };

	     that.findCard = function(title) {
		 for(var cardTitle in this.cards) {
		     if (cardTitle == title) {
			 return this.cards[cardTitle];
		     }
		 }
		 return null;
	     };

	     that.totalValue = function() {
		 var result = 0;
		 for(var cardTitle in this.cards) {
		     result = result + this.cards[cardTitle].value;
		 }
		 return result;
	     };

	     return that;

	 };
     }

     flomo.cardRepo = {
	 init: initCardRepository
     };
 }());