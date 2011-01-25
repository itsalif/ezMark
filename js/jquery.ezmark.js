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
 *  checkboxClass - custom checkbox class
 *  checkedClass  - checked state's class
 *  radioClass    - custom radiobutton class
 *  
 * </usage>
 * 
 * View Documention/Demo here:
 * http://www.itsalif.info/content/ezmark-jquery-checkbox-radiobutton-plugin
 * 
 * @author Abdullah Rubiyath, Gregory Waxman
 * @version 2.0
 * @date January 25, 2011
 */

(function ($) {
    $.fn.ezMark = function (options) {
        var defaults = {
            checkboxClass: 'ez-checkbox', 
            radioClass: 'ez-radio',
            checkedClass: 'ez-checked', 
            hideClass: 'ez-hide'
        };

        $.extend(defaults, options)

        return this.each(function () {
            var type = this.type;

            if ((type === 'radio' || type === 'checkbox') && !$.data(this, 'ezmark-checkedclass')) {
                var $this = $(this);
                var className = type === 'checkbox' ? defaults.checkboxClass : defaults.radioClass;
            
                $this.addClass(defaults.hideClass + ' ez-mark-del').wrap('<div class="' + className + '">');
                this.checked && $this.parent().addClass(defaults.checkedClass);
                $.data(this, 'ezmark-checkedclass', defaults.checkedClass); 
            }
        });
    }

    $(function () {        
        $(document.body).delegate('.ez-mark-del', 'change', function () {
            var $this = $(this);
            var type = this.type;
            var className = $.data(this, 'ezmark-checkedclass');

            if (type === 'checkbox') {                
                $this.parent()[(this.checked ? 'add' : 'remove')+'Class'](className);
            }
            else if (type === 'radio') {
                $('input[name="' + this.name + '"]').parent().removeClass(className);
                this.checked && $this.parent().addClass(className);
            }
        });
    });
})(jQuery);