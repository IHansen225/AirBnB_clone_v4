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
    
    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        if (data.status === 'OK') {
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass('available');
        }
    });
});