//personaliity API
var dogType ="";
var dogTypeParse="";
var dogPicUrl = "";
var hashtags ="";
key=0;

var getHashtags= function() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": 'https://hashtagy-generate-hashtags.p.rapidapi.com/v1/insta/tags?keyword='+dogType+'&include_tags_info=true',
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': 'ac049e0aacmsh4a22781a68935f2p12f181jsnbf8e06889ca5',
            'X-RapidAPI-Host': 'hashtagy-generate-hashtags.p.rapidapi.com'
        }
      }
      $.ajax(settings).done(function (data) {
        console.log(data);
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

        if (hashtags === ""){
        hashtags ="hashtags";
        $("#hashtagText").append('<p id="hashtagZero">#'+hashtagZero+'</p>');
        $("#hashtagText").append('<p id="hashtagOne">#'+hashtagOne+'</p>');
        $("#hashtagText").append('<p id="hashtagTwo">#'+hashtagTwo+'</p>');
        $("#hashtagText").append('<p id="hashtagThree">#'+hashtagThree+'</p>');
        $("#hashtagText").append('<p id="hashtagFour">#'+hashtagFour+'</p>');
        $("#hashtagText").append('<p id="hashtagFive">#'+hashtagFive+'</p>');
        $("#hashtagText").append('<p id="hashtagSix">#'+hashtagSix+'</p>');
        $("#hashtagText").append('<p id="hashtagSeven">#'+hashtagSeven+'</p>');
        $("#hashtagText").append('<p id="hashtagEight">#'+hashtagEight+'</p>');
        $("#hashtagText").append('<p id="hashtagNine">#'+hashtagNine+'</p>');}
        if (hashtags === "hashtags"){
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
        $("#hashtagText").append('<p id="hashtagZero">#'+hashtagZero+'</p>');
        $("#hashtagText").append('<p id="hashtagOne">#'+hashtagOne+'</p>');
        $("#hashtagText").append('<p id="hashtagTwo">#'+hashtagTwo+'</p>');
        $("#hashtagText").append('<p id="hashtagThree">#'+hashtagThree+'</p>');
        $("#hashtagText").append('<p id="hashtagFour">#'+hashtagFour+'</p>');
        $("#hashtagText").append('<p id="hashtagFive">#'+hashtagFive+'</p>');
        $("#hashtagText").append('<p id="hashtagSix">#'+hashtagSix+'</p>');
        $("#hashtagText").append('<p id="hashtagSeven">#'+hashtagSeven+'</p>');
        $("#hashtagText").append('<p id="hashtagEight">#'+hashtagEight+'</p>');
        $("#hashtagText").append('<p id="hashtagNine">#'+hashtagNine+'</p>');

        }

      })
}

var getDogs= function() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.thedogapi.com/v1/breeds/search?q="+dogTypeParse,
        "method": "GET",
        "headers": {
          "x-api-key": "21d2859c-1fef-4be4-9b60-202f7c47dd39"
        }
      }
      
      $.ajax(settings).done(function (data) {
        console.log(data);
        var bredFor = data[0].bred_for;
        var breedGroup = data[0].breed_group;
        var avgHeight = data[0].height.metric;
        var avgWeight = data[0].weight.metric;
        var lifeSpan = data[0].life_span;
        var temperment = data[0].temperament;
        console.log (bredFor,breedGroup,avgHeight,avgWeight,lifeSpan,temperment)
        var imageId = data[0].reference_image_id;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.thedogapi.com/v1/images/"+imageId,
            "method": "GET",
            "headers": {
              "x-api-key": "21d2859c-1fef-4be4-9b60-202f7c47dd39"
            }
          }
          
          $.ajax(settings).done(function (data) {
            console.log(data);
            if (dogPicUrl === "") {
            dogPicUrl = data.url;
            console.log(dogPicUrl)
            $("#facts-column").append('<img src="'+dogPicUrl+'" id="dogPic" alt="'+dogTypeParse+' image"/>')
            $("#facts-column").append('<p id="dogBredFor"><strong>What was my baby bred for:</strong> '+bredFor)
            $("#facts-column").append('<p id="dogBreed"><strong>What breed group do they belong to:</strong> '+breedGroup)
            $("#facts-column").append('<p id="lifeSpan"><strong>How long will my baby be with me:</strong> '+lifeSpan)
            $("#facts-column").append('<p id="avgWeight><strong>How fat will my baby get:</strong> '+avgWeight+' kg')
            $("#facts-column").append('<p id="avgHeight"><strong>How tall will my baby get:</strong> '+avgHeight+' cm')
            $("#facts-column").append('<p id="dogTemperment"><strong>How would others decribe my baby:</strong> '+temperment)}
              if(dogPicUrl != ""){
                $("#dogPic").remove();
                $("#dogBredFor").remove();
                $("#dogBreed").remove();
                $("#lifeSpan").remove();
                $("#avgWeight").remove();
                $("#avgHeight").remove();
                $("#dogTemperment").remove();
                dogPicUrl = data.url;
                console.log(dogPicUrl)
                $("#facts-column").append('<img src="'+dogPicUrl+'" id="dogPic" alt="'+dogTypeParse+' image"/>')
                $("#facts-column").append('<p id="dogBredFor"><strong>What was my baby bred for:</strong> '+bredFor)
                $("#facts-column").append('<p id="dogBreed"><strong>What breed group do they belong to:</strong> '+breedGroup)
                $("#facts-column").append('<p id="lifeSpan"><strong>How long will my baby be with me:</strong> '+lifeSpan)
                $("#facts-column").append('<p id="avgWeight><strong>How fat will my baby get:</strong> '+avgWeight+' kg')
                $("#facts-column").append('<p id="avgHeight"><strong>How tall will my baby get:</strong> '+avgHeight+' cm')
                $("#facts-column").append('<p id="dogTemperment"><strong>How would others decribe my baby:</strong> '+temperment)}})
          });
      };


    

$("#search-button").click(function(event) {
    dogType = $("#dog-type").val();
    dogTypeParse = dogType.replace(/\b[a-z]/g, function(dogType) {
        return dogType.toUpperCase();
    });
    key=key+1;
    localStorage.setItem('dog'+key, JSON.stringify(dogTypeParse));
    getHashtags();
    getDogs();

    $("#buttons").append('<button id="button'+key+'">'+dogTypeParse+'</button>')
    
})



// let copyToClipboardButton = document.getElementById('copyToClipboard');

$("#copyToClipboard").click(function(event){
    let textToCopy = document.getElementById('hashtagText').innerText;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Copied to clipboard')
        })
    } else {
        console.log('Browser Not compatible')
    }

})