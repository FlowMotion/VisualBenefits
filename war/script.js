jQuery(document).ready(
    function(){
	jQuery('#cardEntryForm').submit(createCard);
	jQuery('#cardDescription').focus();
    }
);

function createCard() {
    var cardDescription = jQuery('#cardDescription').attr('value');
    var benefitValue = jQuery('#benefitValue').attr('value');
    if (cardDescription && benefitValue) {
	var newCard = jQuery('#card').clone();
	newCard
	    .html(cardDescription)
	    .addClass('showCard')
	    .appendTo('#cardWall')
	    .fadeIn(1200);
	jQuery('#cardEntryForm > :input').not(':submit').val('');
	jQuery('#cardDescription').focus();
    }
    return false;
}
