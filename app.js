console.log("Let's get this party started!");
const form = document.getElementById('search-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: 'SerBfh0ohKzz0gzt95anRGmWlsm7sQBE'
        }
    })
    .then(function(response) {
        const gifUrl = response.data.data[0].images.original.url;
        const gifElement = document.createElement('img');
        gifElement.src = gifUrl;
        document.body.appendChild(gifElement);
    })
    .catch(function(error) {
        console.log(error);
    });
    const removeButton = document.querySelector('.remove-button');

    removeButton.addEventListener('click', function() {
        // const parentElement = removeButton.parentElement;
        // parentElement.remove();
        const gifs = document.querySelectorAll('img');
        gifs.forEach(function(gif) {
            gif.remove();
        });
    });
});