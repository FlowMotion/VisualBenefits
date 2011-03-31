
/* global jQuery */

var flomo = {};

(function ($) {
    var selectors = {
        cardEntryForm: '.fms-cardEntryForm', 
        descInput: '.fms-cardDescription',
        benefitVal: '.fms-benefitValue',
        cardTemplate: '.fms-card',
        cardWall: '.fms-cardWall',
        button: '.fms-enterButton'
    };
    
    function createCard(that) {
        var cardDescription = that.descInput.attr('value');
        var benefitValue = that.benefitVal.attr('value');
        
        if (cardDescription && benefitValue) {
            var newCard = that.cardTemplate.clone();
            newCard
                .append(cardDescription)
                .addClass('showCard')
                .appendTo(that.cardWall)
                .fadeIn(1200);

            $('input', that.cardEntryForm).not(':submit').val('');
            that.descInput.focus();
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
    
    flomo.visualBenefits = function () {
        that = {};
        setupThat(that);
        init(that);
        return that;
    };
    
    $(document).ready(flomo.visualBenefits);

}) (jQuery);