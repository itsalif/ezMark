/**
 * ezMark - A Simple Checkbox and Radio button Styling plugin. 
 * This plugin allows you to use a custom Image for Checkbox or Radio button. Its very simple, small and easy to use.
 * 
 * Copyright (c) Abdullah Rubiyath <http://www.itsalif.info/>.
 * Released under MIT License
 * 
 * Files with this plugin:
 * - jquery.ezmark.js
 * - ezmark.css
 * 
 * <usage>
 * At first, include both the css and js file at the top
 * 
 * Then, simply use: 
 * 	$('selector').ezMark([options]);
 *  
 * [options] accepts following JSON properties:
 *  checkboxCls - custom Checkbox Class
 *  checkedCls  - checkbox Checked State's Class
 *  radioCls    - custom radiobutton Class
 *  selectedCls - radiobutton's Selected State's Class
 *  
 * </usage>
 * 
 * View Documention/Demo here:
 * http://www.itsalif.info/content/ezmark-jquery-checkbox-radiobutton-plugin
 * 
 * @author Abdullah Rubiyath
 * @version 1.0
 * @date June 27, 2010
 */

(function($) {
  $.fn.ezMark = function(options) {
	options = options || {}; 
	var defaultOpt = { 
		checkboxCls   	: options.checkboxCls || 'ez-checkbox' , radioCls : options.radioCls || 'ez-radio' ,	
		checkedCls 		: options.checkedCls  || 'ez-checked'  , selectedCls : options.selectedCls || 'ez-selected' , 
		hideCls  	 	: 'ez-hide'
	};
    return this.each(function() {
    	var $this = $(this);
    	
    	// back out if the object in question has already been wrapped in an ezMark wrappers
        if($this.parent().hasClass(defaultOpt.checkboxCls) || $this.parent().hasClass(defaultOpt.radioCls)) return;
    	
    	var wrapTag = $this.attr('type') == 'checkbox' ? '<div class="'+defaultOpt.checkboxCls+'">' : '<div class="'+defaultOpt.radioCls+'">';
    	// for checkbox
    	if( $this.attr('type') == 'checkbox') {
    		$this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function() {
    			if( $(this).is(':checked') ) { 
    				$(this).parent().addClass(defaultOpt.checkedCls); 
    			} 
    			else {	$(this).parent().removeClass(defaultOpt.checkedCls); 	}
    		});
    		
    		if( $this.is(':checked') ) {
				$this.parent().addClass(defaultOpt.checkedCls);    		
    		}
    	} 
    	else if( $this.attr('type') == 'radio') {

    		$this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function() {
    			// radio button may contain groups! - so check for group
   				$('input[name="'+$(this).attr('name')+'"]').each(function() {
   	    			if( $(this).is(':checked') ) { 
   	    				$(this).parent().addClass(defaultOpt.selectedCls); 
   	    			} else {
   	    				$(this).parent().removeClass(defaultOpt.selectedCls);     	    			
   	    			}
   				});
    		});
    		
    		if( $this.is(':checked') ) {
				$this.parent().addClass(defaultOpt.selectedCls);    		
    		}    		
    	}
    });
  }
})(jQuery);