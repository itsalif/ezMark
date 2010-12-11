ezMark jQuery Plugin
====================

  ezMark is a jQuery Plugin that allows you to stylize Radio button and Checkbox easily. Its very small 
  (minified version is ~1.5kb) compared to other similar scripts. It has been tested and works on all 
  major browsers (IE 6/7/8, Firefox, Safari, Chrome).


How to Use
----------

  At first include the CSS and JS files.
  
  * CSS:  &lt;link rel="stylesheet" href="css/ezmark.css" media="all"&gt;
  * JS:  &lt;script type="text/javascript" language="Javascript" src="jquery.ezmark.js"&gt;&lt;/script&gt;
  
  Then simply call the following method:
  
  $('selector').ezMark([options]);  
  
  
  You can customize to selector to apply only to checkbox or radiobuttons, like below:

  
  $('input[type="checkbox"]').ezMark(); // to apply only to checkbox use


  $('input[type="radio"]').ezMark(); // for only radio buttons

  
  For detailed usage, please check out usage.html file.
  
  
Online Documentation / Demo
---------------------------

* Online Documentation: <http://www.itsalif.info/content/ezmark-jquery-checkbox-radiobutton-plugin>
  
* Online Demo: <http://www.itsalif.info/content/demo-ezmark-jquery-plugin/>
  
     
License & Policy
---------------------------

Copyright (c) 2010 Abdullah Rubiyath <http://www.itsalif.info>. 
The script has been released under MIT License.
