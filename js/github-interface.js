var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

     $("form").submit(function(event){
          event.preventDefault();
        $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
          console.log(response);
        }).fail(function(error){
          console.log(error.responseJSON.message);

        });
      });
    });
