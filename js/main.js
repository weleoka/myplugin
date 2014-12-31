/**
 * Place your JS-code here.
 */
$(document).ready(function()
{
  'use strict';
  console.log('Everything is ready.');

  // Plugin for making slideshow.
  $('.slideshow IMG:first')
      .addClass('active');

  $('.slideshow_thumbs IMG:first')
      .addClass('selected');
      
  setInterval(function() {$().slideSwitch();}, 2000);

});