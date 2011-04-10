/*
 * This file is where we would wire all the pieces together.
 */

(function($) {
     $(document).ready(function() {
		 flomo.cardRepo.init();
		 flomo.cardScaler.init();
		 flomo.visualBenefits.init();

		 flomo.visualBenefits.start();
	     });
 }(jQuery));