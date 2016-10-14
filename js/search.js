var apiKey = require('./../.env').apiKey;

function Search(){

}

 Search.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length ; i++)
    {
      $("#output").append("<li> Name: " + response[i].full_name + "</li>");
      $("#output").append("<li> Description: " + response[i].description + "</li>");
      $("#output").append("<li> Date Created: " + moment(response[i].created_at).format() + "</li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
