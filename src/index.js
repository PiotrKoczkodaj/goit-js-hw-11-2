const form = document.querySelector('.search-form');
const API_KEY = '34989150-F6282D23D45A19C7980767166'
const input = document.querySelector('input[name="searchQuery"]')

let API_GALLERY = fetch("https://pixabay.com/api/?key="+API_KEY+"&q=`yellow+flowers`&image_type=photo&orientation=horizontal&safesearch=true").then(response => {
    if (!response.ok) {
    throw new Error(response.status);
    }
    return response.json()
}).then(data => {
    console.log(data)
})


