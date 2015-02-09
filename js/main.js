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


/*

It's mostly due to people who do something stupid like
setInterval(function{ $('.slideshow').animate(...); }, 3000);. Instead they
should wait for the end of each animation to queue the second. It's an easy
fix and we could all get much smoother, battery-conscious animations if it
landed. –  Paul Irish Mar 6 '13 at 2:28

Till exempel:
$('p:first').animate(
	{
		height: '+=100',  // Assumes px.
		backgroundColor: 'green' // background-color works too.
	},
	{
		duration: 'slow',
		easing: 'swing',
		complete: function() {alert('done!');},
		queue: false
	}
);


stop( [clearQueue], [gotoEnd]); // set by true .... default false.
)

Animations may be stopped globally by setting the property $.fx.off to true



*/
