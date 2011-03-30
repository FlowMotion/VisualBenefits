
/* global jQuery */

var flomo = {};

(function ($) {
    var selectors = {
        cardEntryForm: ".fms-cardEntryForm", 
        descInput: ".fms-cardDescription",
        benefitVal: ".fms-benefitValue",
        cardTemplate: ".fms-card",
        cardWall: ".fms-cardWall"
    };

    var cardTemplate;
    
    function init(that) {
        // TODO: cardTemplate should probably be on the that
        cardTemplate = $(selectors.cardTemplate);        
        $(selectors.cardEntryForm).submit(that.createCard);
        $(selectors.descInput).focus();
    }
    
    function createCard() {
        // TODO: instead of pulling out interesting DOM elements each time we should do it on init and put it on the that
        var cardDescription = $(selectors.descInput).attr('value');
        var benefitValue = $(selectors.benefitVal).attr('value');
        
        if (cardDescription && benefitValue) {
            var newCard = cardTemplate.clone();
            newCard
                .html(cardDescription)
                .addClass('showCard')
                .appendTo(selectors.cardWall)
                .fadeIn(1200);

            $(selectors.cardEntryForm + '> :input').not(':submit').val('');
            $(selectors.descInput).focus();
        }
        return false;
    };

    flomo.visualBenefits = function () {
        that = {};
        that.selectors = selectors;
        that.createCard = createCard;
        
        init(that);
        return that;
    };
    
    $(document).ready(flomo.visualBenefits);

}) (jQuery);