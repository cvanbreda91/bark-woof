//personaliity API
var dogType ="";
var dogTypeParse="";
var dogPicUrl = "";
key=0;

var getHashtags= function() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ac049e0aacmsh4a22781a68935f2p12f181jsnbf8e06889ca5',
            'X-RapidAPI-Host': 'hashtagy-generate-hashtags.p.rapidapi.com'
        }
    };
    
    fetch('https://hashtagy-generate-hashtags.p.rapidapi.com/v1/insta/tags?keyword='+dogType+'&include_tags_info=true', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));}

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