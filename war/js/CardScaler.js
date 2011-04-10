(function() {
     function initCardScaler() {

	 flomo.cardWall = function() {
	     return {
		 // should be resized relative to the size of current browser window.
		 width: 100,
		 height: 100
	     };
	 };

	 flomo.cardScaler.Scaler = function(repository, wall) {

	     that = {
		 cardRepository: repository,
		 cardWall: wall
	     };

	     that.determineCardSize = function(card) {
		 var totalValue = this.cardRepository.totalValue();
		 var ratio = card.value / totalValue;
		 return {
		     width: (this.cardWall.width * ratio),
		     height: (this.cardWall.height * ratio)
		 };
	     };

	     return that;

	 };

     }

     flomo.cardScaler = {
	 init: initCardScaler
     };

 }());