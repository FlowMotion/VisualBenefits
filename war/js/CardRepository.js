flomo.cardRepository = function() {

    that = {};

    that.cards = new Array();

    that.newCard = function(cardTitle, size) {
	var card = {
	    title: cardTitle,
	    value: size
	};

	this.cards[card.title] = card;

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
    }

    return that;

}