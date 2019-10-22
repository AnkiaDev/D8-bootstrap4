/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.memo = {
    attach: function (context, settings) {
      
      
    }
  };
  
  const article = document.getElementById("response-event");
  article.addEventListener('click', (event) => {
    console.log("prout");
    
  })
  
})(jQuery, Drupal);
