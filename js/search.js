var apiKey = require('./../.env').apiKey;

function Search(){

}

 Search.prototype.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    if(response.length == 0){
      $("#repo-data").append("<li> This user has no Repos! </li>");
    }
    else{
      for(var i = 0; i < response.length ; i++){
        $("#repo-data").append("<li> <a target='_blank' href=" + response[i].html_url + " >" + response[i].full_name + "</li>");
        $("#repo-data").append("<li> Description: " + response[i].description + "</li>");
        $("#repo-data").append("<li id='dates'> Date Created: " + moment(response[i].created_at).format("YYYY-MM-DD") + "</li>");
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
    $("#user-data").append("<li> Following: " + response.following + "</li>");
  });
};

exports.searchModule = Search;
