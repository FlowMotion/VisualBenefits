
/* global jQuery */

var flomo = {};

(function ($) {

     function initVisualBenefits() {
	 var selectors = {
             cardEntryForm: '.fms-cardEntryForm',
             descInput: '.fms-cardDescription',
             benefitVal: '.fms-benefitValue',
             cardTemplate: '.fms-card',
             cardWall: '.fms-cardWall',
             button: '.fms-enterButton',
             statusBar: '.fms-statusBar'
	 };

	 var cardRepository = flomo.cardRepo.Repository();
	 var cardScaler = flomo.cardScaler.Scaler(cardRepository, flomo.cardWall());

	 function createCard(that) {
             var cardDescription = that.descInput.attr('value');
             var benefitValue = that.benefitVal.attr('value');

             if (cardDescription && benefitValue) {

		 var aCard = cardRepository.newCard(cardDescription, benefitValue);

		 resizeExistingCardsExcept(aCard);

		 var cardDimension = cardScaler.determineCardSize(aCard);

		 var newCard = that.cardTemplate.clone();
		 newCard
                     .append(aCard.title + ':' + aCard.value)
                     .addClass('showCard')
		     .addClass('fms-cardId-' + aCard.id())
                     .appendTo(that.cardWall)
		     .width(cardDimension.width)
		     .height(cardDimension.height)
                     .fadeIn(1200);


		 that.cardWall.masonry();

		 $('input', that.cardEntryForm).not(':submit').val('');
		 that.descInput.focus();

		 that.statusBar.html('Total:' + cardRepository.totalValue());
             }
             return false;
	 };

	 function resizeExistingCardsExcept(card) {
	     var allCards = cardRepository.listAll();
	     for(var i in allCards) {
		 var eachCardInRepo = allCards[i];
		 if (eachCardInRepo.id() != card.id()) {
		     var dimension = cardScaler.determineCardSize(eachCardInRepo);
		     $('.fms-cardId-' + eachCardInRepo.id())
			 .width(dimension.width)
			 .height(dimension.height);
		     
		     // Note: animation seems to affect how masonry measure
		     // sizes. It seems like as if it takes measurement
		     // of boxes at the beginning of the resize
		     // animation.
		     // $('.fms-cardId-' + eachCardInRepo.id())
		     // 	 .animate({
		     // 	     width: dimension.width,
		     // 	     height: dimension.height
		     // 	 }, 1200);
		 }
	     }
	 }

	 function setupThat(that) {
             // add properties
             for (var key in selectors) {
		 // find all the DOM nodes specified in selectors and put them on the that
		 that[key] = $(selectors[key]);
             }

             // add methods
             that.createCard = function () {
		 return createCard(that);
             };
	 }

	 function init(that) {
             that.cardEntryForm.submit(that.createCard);
             that.descInput.focus();

	     setupMasonryLayout(that);
	 }

	 function setupMasonryLayout(visualBenefit) {
	     $(visualBenefit.cardWall).masonry({
		 columnWidth: 10,
		 itemSelector: '.fms-card',
		 animate: true,
		 animationOptions: {
		     duration: 1000,
		     easing: 'linear',
		     queue: false
		 }
	     });
	 }

	 flomo.visualBenefits.start = function () {
             that = {};
             setupThat(that);
             init(that);
             return that;
	 };

     }

     flomo.visualBenefits = {
	 init: initVisualBenefits
     };

 }) (jQuery);