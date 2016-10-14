var apiKey = require('./../.env').apiKey;
var Search = require('./../js/search.js').searchModule;

$(document).ready(function(){
    var testSearch = new Search();
     $("form").submit(function(event){
          event.preventDefault();
          testSearch.getRepos();
       });
    });
