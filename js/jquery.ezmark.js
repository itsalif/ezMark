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
*   $('selector').ezMark([options]);
*  
* [options] accepts following JSON properties:
*  checkboxClass   - class applied to wrapping container (div) of a checkbox input
*  checkedClass    - class applied to wrapping container when the input is checked
*  radioClass      - class applied to the wrapping container (div) of a radio input
*  hideClass       - class applied to the input
*  hoverClass      - class applied while hovering over the label or div
*  labelClass      - class applied to associated label for custom input
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
    var NAMESPACE = 'ezmark';
    var DELEGATE_CLASS = NAMESPACE + '-del';

    $.fn.ezMark = function (options) {
        var defaults = {
            checkboxClass: NAMESPACE + '-checkbox',
            radioClass: NAMESPACE + '-radio',
            checkedClass: NAMESPACE + '-checked',
            hideClass: NAMESPACE + '-hide',
            hoverClass: NAMESPACE + '-hover',
            labelClass: NAMESPACE + '-label',
            labelCheckboxClass: NAMESPACE + '-label-checkbox',
            labelRadioClass: NAMESPACE + '-label-radio'
        };

        $.extend(defaults, options);

        return this.each(function () {
            var type = this.type;

            if ((type === 'radio' || type === 'checkbox') && !$.data(this, NAMESPACE)) {
                var $this = $(this);
                var classNames;

                if (type === 'checkbox') {
                    classNames = {
                        input: defaults.checkboxClass,
                        label: defaults.labelCheckboxClass
                    };
                }
                else {
                    classNames = {
                        input: defaults.radioClass,
                        label: defaults.labelRadioClass
                    };
                }

                $this.addClass(defaults.hideClass + ' ' + DELEGATE_CLASS).wrap('<div class="' + classNames.input + ' ' + DELEGATE_CLASS + '">');
                var $parent = $this.parent();

                if (this.checked) {
                    $parent.addClass(defaults.checkedClass);
                }

                $('label[for=' + this.id + ']').addClass(defaults.labelClass + ' ' + DELEGATE_CLASS + ' ' + classNames.label);
                $.data(
                    $parent[0],
                    NAMESPACE,
                    {
                        classNames: {
                            checkedClass: defaults.checkedClass,
                            hoverClass: defaults.hoverClass
                        }
                    }
                );
            }
        });
    };

    $(function () {
        $(document.body).delegate('input.' + DELEGATE_CLASS, 'change', function () {
            var $this = $(this);
            var type = this.type;
            var $parent = $this.parent();
            var parent = $parent[0];
            var className = $.data(parent, NAMESPACE).classNames.checkedClass;

            if (type === 'checkbox') {
                $parent[(this.checked ? 'add' : 'remove') + 'Class'](className);
            }
            else if (type === 'radio') {
                $('input[name="' + this.name + '"]').parent().removeClass(className);
                if (this.checked) {
                    $parent.addClass(className);
                }
            }
        }).delegate('div.' + DELEGATE_CLASS, 'hover', function () {
            $(this).toggleClass($.data(this, NAMESPACE).classNames.hoverClass);
        }).delegate('label.' + DELEGATE_CLASS, 'hover', function () {
            var $divWrapper = $('#' + this.htmlFor).parent();
            $divWrapper.toggleClass($.data($divWrapper[0], NAMESPACE).classNames.hoverClass);
        });
    });
}(jQuery));