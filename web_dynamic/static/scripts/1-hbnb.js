#!/usr/bin/node

$(document).ready(function() {
   $('input:checkbox]').change(function(){
     if ($(this).is(':checked')) {
         let dict = {};
         dict[$(this).attr('data-id') = $(this).attr('data-name')];
     } else {
       delete dict[$(this).attr('data-id')];
     }
    });
});