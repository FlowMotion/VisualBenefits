
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

    
    
    flomo.createCard = function () {
        var cardDescription = $(selectors.descInput).attr('value');
        var benefitValue = $(selectors.benefitVal).attr('value');
        
        if (cardDescription && benefitValue) {
            var newCard = $(selectors.cardTemplate).clone();
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

    
    $(document).ready(
        function(){
            $(selectors.cardEntryForm).submit(flomo.createCard);
            $(selectors.descInput).focus();
        }
    );

}) (jQuery);