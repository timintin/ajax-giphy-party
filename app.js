console.log("Let's get this party started!");

document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    let searchTerm = document.getElementById('searchTerm').value;
    let response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'mEfnphIOuOkBUd0Qo6yg74dnDNUdyWwu',  
            limit: 1
        }
    });
    let gifUrl = response.data.data[0].images.fixed_height.url;
    let img = document.createElement('img');
    img.src = gifUrl;
    document.getElementById('gifContainer').appendChild(img);
});

document.getElementById('removeImages').addEventListener('click', function() {
    document.getElementById('gifContainer').innerHTML = '';
});
