//personaliity API
var dogType ="";
var dogTypeParse="";
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
            var dogPicUrl = data.url;
            console.log(dogPicUrl)
            $("#facts-column").append('<img src="'+dogPicUrl+'" alt="'+dogTypeParse+' image"/>')
          });
      });
}

    

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