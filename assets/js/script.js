//Define Global Variables
var dogType = "";
var dogTypeParse = "";
var dogPicUrl = "";
key = 0;

//Create a function that calls data from hashtagy API
var getHashtags = function () {

 
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://hashtagy-generate-hashtags.p.rapidapi.com/v1/insta/tags?keyword=" +
      dogType +
      "&include_tags_info=true",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ac049e0aacmsh4a22781a68935f2p12f181jsnbf8e06889ca5",
      "X-RapidAPI-Host": "hashtagy-generate-hashtags.p.rapidapi.com",
    },
  };
  $.ajax(settings)
  //create catch function incase there is a problem with the call
  .catch(function(error) {
 
// See notes in .done function for comments on the section below
    $("#topTen").remove();

    $("#hashtag-column").prepend ('<h3 id="topTen">Top 10 Hashtags</h3>');
    $("#hashtag-column").css("background-color","hsl(171, 100%, 41%)");
    $("#hashtagZero").remove();
    $("#hashtagOne").remove();
    $("#hashtagTwo").remove();
    $("#hashtagThree").remove();
    $("#hashtagFour").remove();
    $("#hashtagFive").remove();
    $("#hashtagSix").remove();
    $("#hashtagSeven").remove();
    $("#hashtagEight").remove();
    $("#hashtagNine").remove();
    $("#extraOne").remove();
    $("#extraTwo").remove();
    $("#hashtagColumns").remove();

    $("#hashtagText").append(
        '<div id ="hashtagColumns" class="columns is-gapless"><div class="column"> <div id="hashtagZero">No Hashtags To Display</div></div></div>'
      );
    
//function if call was successful
      }).done(function (data) {
//create local variables using the data from the api call
    var hashtagZero = data.data.hashtags[0].hashtag;
    var hashtagOne = data.data.hashtags[1].hashtag;
    var hashtagTwo = data.data.hashtags[2].hashtag;
    var hashtagThree = data.data.hashtags[3].hashtag;
    var hashtagFour = data.data.hashtags[4].hashtag;
    var hashtagFive = data.data.hashtags[5].hashtag;
    var hashtagSix = data.data.hashtags[6].hashtag;
    var hashtagSeven = data.data.hashtags[7].hashtag;
    var hashtagEight = data.data.hashtags[8].hashtag;
    var hashtagNine = data.data.hashtags[9].hashtag;

/*remove and prepend the Top Ten heading for each dog search - otherwise it will have the heading 
redisplayed for each dog search (could have put it directly in html instead and used a css update from hidden to unhidden)*/    
    $("#topTen").remove();
    $("#hashtag-column").prepend ('<h3 id="topTen">Top 10 Hashtags</h3>');
//add background colour to column
    $("#hashtag-column").css("background-color","hsl(171, 100%, 41%)");
//add background colour to chart - creates a small boarder around it
    $("#chartDiv").css("background-color","hsl(171, 50%, 41%)");
//remove all the hashtag appends and re-add them for each dog search - extraOne and extra Two are for spacing
    $("#hashtagZero").remove();
    $("#hashtagOne").remove();
    $("#hashtagTwo").remove();
    $("#hashtagThree").remove();
    $("#hashtagFour").remove();
    $("#hashtagFive").remove();
    $("#hashtagSix").remove();
    $("#hashtagSeven").remove();
    $("#hashtagEight").remove();
    $("#hashtagNine").remove();
    $("#extraOne").remove();
    $("#extraTwo").remove();
    $("#hashtagColumns").remove();
//using nested columns so the hashtag text can take advantage of the flexbox capabilities built into Bulma - better for mobile and smaller devices
    $("#hashtagText").append(
        '<div id ="hashtagColumns" class="columns is-variable is-1"><div class="column"> <div id="hashtagZero">#' +
          hashtagZero +
          '</div><div id="hashtagOne">#' +
          hashtagOne +
          '</div><div id="hashtagTwo">#' +
          hashtagTwo +
          '</div><div id="hashtagThree">#' +
          hashtagThree +
          '</div></div><div class="column"> <div id="hashtagFour">#' +
          hashtagFour +
          '</div><div id="hashtagFive">#' +
          hashtagFive +
          '</div><div id="hashtagSix">#' +
          hashtagSix +
          '</div><div id=extraOne></div></div><div class="column"> <div id="hashtagSeven">#' +
          hashtagSeven +
          '</div><div id="hashtagEight">#' +
          hashtagEight +
          '</div><div id="hashtagNine">#' +
          hashtagNine +
          '</div><div id=extraTwo></div></div></div>'
      );
//create chart based on additional hashtag data as part of our original api call
    var chart = JSC.chart("chartDiv", {
      debug: true,
      title: { position: "center", label_text: "Top 5 Hashtag Stats"},
      defaultSeries: {
        type: "pieDonut",
        angle_orientation: 220,
        shape_padding: 0.2,
      },
      defaultPoint: {
        label_text: '<span style="width:60px">%name</span>',
        tooltip:
          "<b>%name</b><br/>Total Posts: <b>{%yValue/1000000:n1}M</b> {%percentOfTotal:n1}% <br/>Avg Likes: <b>%zValue</b><hr>Avg. Posts per Hour: <b>%postPerHour</b>",
      },
      legend: {
        visible: false,
        header: "Top 5 Hashtags Total Posts",
        template: "%value {%zValue:n0}yrs %icon %name",
        defaultEntry_value: "{%yValue/1000000:n1}M",
      },

      zAxis_formatString: "n1",

      series: [
        {
          name: "Top Hashtag Posts",
          points: [
            {
              name: data.data.hashtags[0].hashtag,
              y: data.data.hashtags[0].total_posts,
              z: data.data.hashtags[0].average_likes,
              attributes: { postPerHour: data.data.hashtags[0].posts_per_hour },
            },
            {
              name: data.data.hashtags[1].hashtag,
              y: data.data.hashtags[1].total_posts,
              z: data.data.hashtags[1].average_likes,
              attributes: { postPerHour: data.data.hashtags[1].posts_per_hour },
            },
            {
              name: data.data.hashtags[2].hashtag,
              y: data.data.hashtags[2].total_posts,
              z: data.data.hashtags[2].average_likes,
              attributes: { postPerHour: data.data.hashtags[2].posts_per_hour },
            },
            {
              name: data.data.hashtags[3].hashtag,
              y: data.data.hashtags[3].total_posts,
              z: data.data.hashtags[3].average_likes,
              attributes: { postPerHour: data.data.hashtags[3].posts_per_hour },
            },
            {
              name: data.data.hashtags[4].hashtag,
              y: data.data.hashtags[4].total_posts,
              z: data.data.hashtags[4].average_likes,
              attributes: { postPerHour: data.data.hashtags[4].posts_per_hour },
            },
          ],
        },
      ],
    });
  });
};

//Function to call 2 APIs from theDogAPI for facts and pics
var getDogs = function () {

//First call is to get the facts + a dog picture unique ID code
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.thedogapi.com/v1/breeds/search?q=" + dogTypeParse,
    method: "GET",
    headers: {
      "x-api-key": "21d2859c-1fef-4be4-9b60-202f7c47dd39",
    },
  };

//if first call is successful, then the following local variables are defined with that data
  $.ajax(settings).done(function (data) {
    var bredFor = data[0].bred_for;
    var breedGroup = data[0].breed_group;
    var avgHeight = data[0].height.metric;
    var avgWeight = data[0].weight.metric;
    var lifeSpan = data[0].life_span;
    var temperment = data[0].temperament;
    var imageId = data[0].reference_image_id;

//Second call is to use the unique pic ID to get the dog pic
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://api.thedogapi.com/v1/images/" + imageId,
      method: "GET",
      headers: {
        "x-api-key": "21d2859c-1fef-4be4-9b60-202f7c47dd39",
      },
    };

//if second call is successful
    $.ajax(settings).done(function (data) {
//add css styling to column and remove any prior data from previous dog searches   
      $("#facts-column").css("background-color","rgb(123, 201, 220)");
      $("#sorryImg").remove();
      $("#dogPic").remove();
      $("#dogBredFor").remove();
      $("#dogBreed").remove();
      $("#lifeSpan").remove();
      $("#avgWeight").remove();
      $("#avgHeight").remove();
      $("#dogTemperment").remove();
//create dog picture with alt text
      dogPicUrl = data.url;
      $("#facts-column").append(
        '<img src="' +
          dogPicUrl +
          '" id="dogPic" alt="' +
          dogTypeParse +
          ' image"/>'
      );
//append all the facts
      $("#facts-column").append(
        '<p id="dogBredFor"><strong>What was my baby bred for:</strong> ' +
          bredFor+'</p>'
      );
      $("#facts-column").append(
        '<p id="dogBreed"><strong>What breed group do they belong to:</strong> ' +
          breedGroup+'</p>'
      );
      $("#facts-column").append(
        '<p id="lifeSpan"><strong>How long will my baby be with me:</strong> ' +
          lifeSpan+'</p>'
      );
      $("#facts-column").append(
        '<p id="avgWeight"><strong>How fat will my baby get:</strong> ' +
          avgWeight +
          ' kg</p>'
      );
      $("#facts-column").append(
        '<p id="avgHeight"><strong>How tall will my baby get:</strong> ' +
          avgHeight +
          ' cm</p>'
      );
      $("#facts-column").append(
        '<p id="dogTemperment"><strong>How would others decribe my baby:</strong> ' +
          temperment+'</p>'
      );
//create catch function incase of dog image call error - local image will display with facts   
  }).catch(function(error) {
    $("#facts-column").css("background-color","rgb(123, 201, 220)")
    $("#sorryImg").remove();
    $("#dogPic").remove();
    $("#dogBredFor").remove();
    $("#dogBreed").remove();
    $("#lifeSpan").remove();
    $("#avgWeight").remove();
    $("#avgHeight").remove();
    $("#dogTemperment").remove();
    $("#facts-column").append('<img id="sorryImg" src="./assets/img/Sorry.png"/>'
    );
    $("#facts-column").append(
      '<p id="dogBredFor"><strong>What was my baby bred for:</strong> ' +
        bredFor+'</p>'
    );
    $("#facts-column").append(
      '<p id="dogBreed"><strong>What breed group do they belong to:</strong> ' +
        breedGroup+'</p>'
    );
    $("#facts-column").append(
      '<p id="lifeSpan"><strong>How long will my baby be with me:</strong> ' +
        lifeSpan+'</p>'
    );
    $("#facts-column").append(
      '<p id="avgWeight"><strong>How fat will my baby get:</strong> ' +
        avgWeight +
        ' kg</p>'
    );
    $("#facts-column").append(
      '<p id="avgHeight"><strong>How tall will my baby get:</strong> ' +
        avgHeight +
        ' cm</p>'
    );
    $("#facts-column").append(
      '<p id="dogTemperment"><strong>How would others decribe my baby:</strong> ' +
        temperment+'</p>'
    );
  });

  // create catch function for if first call for dog facts and imgage ID fails
  }).catch(function(error) {
    $("#sorryImg").remove();
    $("#dogPic").remove();
    $("#dogBredFor").remove();
    $("#dogBreed").remove();
    $("#lifeSpan").remove();
    $("#avgWeight").remove();
    $("#avgHeight").remove();
    $("#dogTemperment").remove();
    $("#facts-column").append('<img id="sorryImg" src="./assets/img/Sorry.png"/>'
    );
    $("#facts-column").append(
      '<p id="dogBredFor"><strong>Sorry! We have no dog facts for you at this time</strong></p>'
    );
  });
};

/*create search button - make it so they can search in any case combonation and same result appears
the hashtagy API is case sensitive and will not work otherwise*/
$("#search-button").click(function (event) {
  dogType = $("#dog-type").val();
  dogTypeParse = dogType.replace(/\b[a-z]/g, function (dogType) {
    return dogType.toUpperCase();
  });
//create local storage unique key to call for the information later
  key = key + 1;
  localStorage.setItem("dog" + key, JSON.stringify(dogTypeParse));
//run the functions based on the click event
  getHashtags();
  getDogs();
//create buttons for future searches of previously seached dog breed
  $("#buttons").append(
    '<button class = "button is-primary is-large"id="button' +
      key +
      '">' +
      dogTypeParse +
      "</button>"
  );
  
//make clipboard button visable and add some styling
  $("#copyToClipboard").css("visibility","visible");
  $("#hashtagText").css("margin-bottom","0px");
  $("#copyToClipboard").css("margin-bottom","25px");
  $("#copyToClipboard").css("margin-top","0px");
});

//create event function for copy to clipboard so user can copy all hashtags to clipboard
$("#copyToClipboard").click(function (event) {
  let textToCopy = document.getElementById("hashtagText").innerText;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {});
  } else {
    console.log("Browser Not compatible");
  }
});

//create event functions for the buttons of previously searched dogs using data stored in local storage
$(document).on("click", "#button1", function () {
  dogType = JSON.parse(localStorage.getItem("dog1"));
  dogTypeParse = JSON.parse(localStorage.getItem("dog1"));
  getHashtags();
  getDogs();
});

$(document).on("click", "#button2", function () {
  dogType = JSON.parse(localStorage.getItem("dog2"));
  dogTypeParse = JSON.parse(localStorage.getItem("dog2"));
  getHashtags();
  getDogs();
});

$(document).on("click", "#button3", function () {
  dogType = JSON.parse(localStorage.getItem("dog3"));
  dogTypeParse = JSON.parse(localStorage.getItem("dog3"));
  getHashtags();
  getDogs();
});

$(document).on("click", "#button4", function () {
  dogType = JSON.parse(localStorage.getItem("dog4"));
  dogTypeParse = JSON.parse(localStorage.getItem("dog4"));
  getHashtags();
  getDogs();
});
$(document).on("click", "#button5", function () {
  dogType = JSON.parse(localStorage.getItem("dog5"));
  dogTypeParse = JSON.parse(localStorage.getItem("dog5"));
  getHashtags();
  getDogs();
});

$(document).on("click", "#button6", function () {
  dogType = JSON.parse(localStorage.getItem("dog6"));
  dogTypeParse = JSON.parse(localStorage.getItem("dog6"));
  getHashtags();
  getDogs();
});
