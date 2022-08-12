//personaliity API
var dogType ="";
var dogTypeParse=dogType.replace(/\b[a-z]/g, function(dogType) {
    return dogType.toUpperCase();
});
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
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ac049e0aacmsh4a22781a68935f2p12f181jsnbf8e06889ca5',
            'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
    };
    
    fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/'+dogTypeParse, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));}

    

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