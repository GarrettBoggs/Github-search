var apiKey = require('./../.env').apiKey;
var Search = require('./../js/search.js').searchModule;

$(document).ready(function(){
    var testSearch = new Search();
     $("form").submit(function(event){
          var user = $("#user").val();
          event.preventDefault();
          testSearch.getRepos(user);
       });
    });
