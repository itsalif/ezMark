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
 *  selectedCls - Selected State's Class
 *  disabledCls - Disabled State's Class
 *  focusCls    - Focus State's Class
 *  hideCls     - Hidden State's Class
 *  
 * </usage>
 * 
 * View Documention/Demo here:
 * http://www.itsalif.info/content/ezmark-jquery-checkbox-radiobutton-plugin
 * 
 * @author Abdullah Rubiyath
 * @contributor Mohammad Ariful Haque
 * @version 1.1
 * @date June 27, 2010
 */

(function($) {
	$.fn.ezMark = function(options) {
		options = options || {};
		var defaultOpt = {
			checkboxCls: options.checkboxCls || 'ez-checkbox',
			radioCls: options.radioCls || 'ez-radio',
			checkedCls: options.checkedCls || 'ez-checked',
			selectedCls: options.selectedCls || 'ez-selected',
			disabledCls: options.disabledCls || 'ez-disabled',
			focusCls: options.focusCls || 'ez-disabled',
			hideCls: options.hideCls || 'ez-hide'
		};
		return this.each(function() {
			var $this = $(this);
			var customClasses = $(this).attr('class') || '';
			var wrapTag = $this.attr('type') == 'checkbox' ? '<div class="' + defaultOpt.checkboxCls + ' ' + customClasses + '">' : '<div class="' + defaultOpt.radioCls + ' ' + customClasses + '">';
			// for checkbox
			if ($this.attr('type') == 'checkbox') {
				$this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function() {
					if ($(this).is(':checked')) {
						$(this).parent().addClass(defaultOpt.checkedCls);
					} else {
						$(this).parent().removeClass(defaultOpt.checkedCls);
					}
					if ($(this).is(':disabled')) {
						$(this).parent().addClass(defaultOpt.disabledCls);
					} else {
						$(this).parent().removeClass(defaultOpt.disabledCls);
					}
				}).focus(function() {
					$(this).parent().addClass(defaultOpt.focusCls);
				}).blur(function() {
					$(this).parent().removeClass(defaultOpt.focusCls);
				});

				if ($this.is(':checked')) {
					$this.parent().addClass(defaultOpt.checkedCls);
				}
				if ($this.is('[disabled]')) {
					$this.parent().addClass(defaultOpt.disabledCls);
				}
			}
			else if ($this.attr('type') == 'radio') {

				$this.addClass(defaultOpt.hideCls).wrap(wrapTag).change(function() {
					// radio button may contain groups! - so check for group
					$('input[name="' + $(this).attr('name') + '"]').each(function() {
						if ($(this).is(':checked')) {
							$(this).parent().addClass(defaultOpt.selectedCls);
						} else {
							$(this).parent().removeClass(defaultOpt.selectedCls);
						}
						if ($(this).is(':disabled')) {
							$(this).parent().addClass(defaultOpt.disabledCls);
						} else {
							$(this).parent().removeClass(defaultOpt.disabledCls);
						}
					});
				}).focus(function() {
					$(this).parent().addClass(defaultOpt.focusCls);
				}).blur(function() {
					$(this).parent().removeClass(defaultOpt.focusCls);
				});

				if ($this.is(':checked')) {
					$this.parent().addClass(defaultOpt.selectedCls);
				}
				if ($this.is('[disabled]')) {
					$this.parent().addClass(defaultOpt.disabledCls);
				}
			}
		});
	};
})(jQuery);