
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

	 function createCard(that) {
             var cardDescription = that.descInput.attr('value');
             var benefitValue = that.benefitVal.attr('value');

             if (cardDescription && benefitValue) {

		 var aCard = cardRepository.newCard(cardDescription, benefitValue);

		 var newCard = that.cardTemplate.clone();
		 newCard
                     .append(aCard.title + ':' + aCard.value)
                     .addClass('showCard')
                     .appendTo(that.cardWall)
                     .fadeIn(1200);

		 $('input', that.cardEntryForm).not(':submit').val('');
		 that.descInput.focus();

		 that.statusBar.html('Total:' + cardRepository.totalValue());
             }
             return false;
	 };

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