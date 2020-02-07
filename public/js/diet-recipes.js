(function($,doc){
  $('body').addClass('body-img');

  let recipe = "{{header}}";
  let userCalories = "{{query.cal}}";

  let recipeString = recipe.replace('+'," ");

  $('.page-title').html(recipeString.toUpperCase());

  console.log('recipe:',recipe);
  let userSearch = recipe;
  console.log('userSearch:',userSearch);
  let APPID = "ea609d64";
  let APIKEY = "308c7451b81f8d1eaa36b355b451f12d";
  let recipieURL =
  "https://api.edamam.com/search?q=" +
  userSearch +
  "&app_id=" +
  APPID +
  "&app_key=" +
  APIKEY +
  "&to=100";
  $.ajax({
      url: recipieURL,
      method: 'GET',
      context: doc.body,
      dataType: 'json',
      crossDomain: true,
      async: false,
      error: function (jqXHR, textStatus, errorThrown) {
          return jqXHR;
      },
      success: function(response){
          var positions = response;
          resp = positions;
      },
      complete: function(response){
          console.log('response:',response);
          console.log(response.responseJSON);

          $('.calories').html(Math.round(userCalories));

          var mealCalories = (userCalories / 3);
          

          for(var i = 0; i < 3; i++){
              var randomNumber = Math.round(Math.random() * 99);
              console.log('randomNumber:',randomNumber);
              var recipeResults = response.responseJSON.hits[randomNumber].recipe;
              var calories = recipeResults.calories;

              if(calories < mealCalories){
                  console.log(recipeResults.label); //name of recipe
                  console.log(recipeResults.calories);
                  console.log(recipeResults.image);
                  console.log(recipeResults.shareAs); //link URL to recipe page
                  console.log('--------------');

                  var badHtml = '<div class="col-md-4">'+
                                  '<div class="card meal1" >'+
                                      '<div class="card-header">'+
                                          '<h3>'+recipeResults.label+'</h3>'+
                                      '</div>'+
                                      '<div class="card-body">'+
                                          '<a href="'+recipeResults.shareAs+'"><img class="recipe-image" src="'+recipeResults.image+'"></a>'+
                                          '<p class="recipe-name"></p>'+
                                          '<h2>Calories: <span class="recipe-calories">'+Math.round(recipeResults.calories)+'</span></h2>'+
                                      '</div></div></div>';

                  $('.meals').append(badHtml);
                  
              }else {
                  i--;
              }
              
          }
      }
  });
    

        


})(jQuery,document);