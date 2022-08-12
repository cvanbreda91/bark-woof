//personaliity API
var dogType ="";
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
    
    fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/'+dogType, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));}

    

$("#search-button").click(function(event) {
    dogType = $("#dog-type").val();
    key=key+1;
    console.log(dogType);
    localStorage.setItem('dog'+key, JSON.stringify(dogType));
    getHashtags();
    getDogs();

    $("#buttons").append('<button id="button'+key+'">'+dogType+'</button>')
    
})