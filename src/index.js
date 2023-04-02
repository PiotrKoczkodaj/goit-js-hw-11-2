const form = document.querySelector('.search-form');
const API_KEY = '34989150-F6282D23D45A19C7980767166'
const input = document.querySelector('input[name="searchQuery"]')
const body = document.body;




form.addEventListener('submit', (e) => {
    e.preventDefault();
let API_GALLERY = fetch("https://pixabay.com/api/?key=34989150-f6282d23d45a19c7980767166&"+"q="+`${input.value}`+"&image_type=photo&orientation=horizontal&safesearch=true").then(response => {
    if (!response.ok) {
    throw new Error(response.status);
    }
    return response.json()
}).then(data => {
    data.hits.map((item) => {
        body.innerHTML += `<img src="${item.previewURL}">`
        console.log(item)
    })
})
})