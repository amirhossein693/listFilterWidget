/*!
 * jQuery List Filter Widget 
 * Version: 0.1.0 (October 20, 2014)
 * Requires: jQuery
 * Author: Amirhossein Ahmadi (amirhossein693@gmail.com)
 * Github URL: https://github.com/amirhossein693/listFilterWidget
 */
;(function ($) {
    'use strict';
    $.fn.listFilterWidget = function( filters, options ) {

    	var self = this;

    	// default settings
        var settings = $.extend({
            itemsClass		: '.items',
            duration		: 100,
            staggerStart	: 1,
            staggerDuration	: 50
        }, options);

        // private properties and methods
        var ext = {
            _itemsElem		: self.find(settings.itemsClass),
            _itemsCount		: null,
            _animation		: null,
            _filters		: [],
			/*
			 * @param {Array}
			 * @returns {Array} Returns the new duplicate-value-free array.
			 */
			_unique 		: function(array) {
				var uniqueArray = [];
				var l = array.length;
				for(var i=0; i<l; i++) {
					for(var j=i+1; j<l; j++) {
						if (array[i] === array[j]){
							j = ++i;
						}
					}
					uniqueArray.push(array[i]);
				}
				return uniqueArray;
			},
			/*
			 * @param {Array}
			 * @param {string} The string to delete.
			 * @returns {Array} Returns the new clean array.
			 */			
			_clean			: function(array, deleteValue) {
				for (var i = 0; i < array.length; i++) {
					if (array[i] === deleteValue) {         
						array.splice(i, 1);
						i--;
					}
				}
				return array;
			},
			_dataFilters	: function(filters) {
				filters = filters || 'all';
				var filtersArr = filters.split(' ');
				var filterStr = '';
				if (filtersArr.length > 1) {
					for (var i=0; i<filtersArr.length; i++) {
						// filterStr += '[data-filter~="' + filtersArr[i] + '"]+ ';
						filterStr += '[data-filter~="' + filtersArr[i] + '"], ';
					}
					filterStr = filterStr.substring(0, filterStr.length - 2);
				} else {
					filterStr += '[data-filter~="' + filters + '"]';
				}
				return filterStr;
			}
        };

        ext._itemsCount	= ext._itemsElem.length;

        // initialize animation elements
		ext._animation =  ext._itemsElem.each(function(){
			ext._filters = ext._filters.concat($(this).data('filter').split(' '));
			if (!$(this).is(ext._dataFilters(filters))) {
				$(this).delay(settings.staggerStart).slideUp();
			}
			if ($(this).is(ext._dataFilters(filters))) {
				$(this).delay(settings.staggerStart).slideDown(settings.duration);
			}
			settings.staggerStart += settings.staggerDuration;
		});

		ext._filters = ext._unique(ext._filters);
		ext._filters = ext._clean(ext._filters, '');

		// start
        return ext._animation;

    };

})(jQuery);
