var apiKey = require('./../.env').apiKey;

function Search(){

}

 Search.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    if(response.length == 0){
      $("#output").append("<li>  No User History Found! Try Again? </li>");
    }
    else{
      for(var i = 0; i < response.length ; i++){
        $("#output").append("<li> Name: " + response[i].full_name + "</li>");
        $("#output").append("<li> Description: " + response[i].description + "</li>");
        $("#output").append("<li id='dates'> Date Created: " + moment(response[i].created_at).format("YYYY-MM-DD") + "</li>");
      }
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $("#output").append("<li>  No User History Found! Try Again? </li>");
  });

  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $("#user-data").append("<li> User Found: " + response.login + "</li>");
    $("#user-data").append("<li> <img src=" + response.avatar_url + "</img> </li>");
    $("#user-data").append("<li> Followers: " + response.followers + "</li>");
  });
};

exports.searchModule = Search;
