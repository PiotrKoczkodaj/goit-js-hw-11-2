import Notiflix from 'notiflix';
import axios from 'axios';
const form = document.querySelector('.search-form');
const API_KEY = '34989150-F6282D23D45A19C7980767166'
const input = document.querySelector('input[name="searchQuery"]')
const body = document.body;
console.log('f');
const fetchData = async () => {
    try {
    const response = await axios.get("https://pixabay.com/api/?key=34989150-f6282d23d45a19c7980767166&"+"q="+`${input.value}`+"&image_type=photo&orientation=horizontal&safesearch=true?likes,views");
    console.log(response.data.hits[0]);
  } catch (error) {
    console.error(error);
  }
}

const renderHtml = (data) => {
    const galleryContainer = document.createElement('div');
    form.after(galleryContainer);

    data.hits.map((item) => {
        galleryContainer.innerHTML += `<div class="photo-card">
  <img src="${item.previewURL}" alt="${item.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${item.likes}</b>
    </p>
    <p class="info-item">
      <b>Views${item.views}</b>
    </p>
    <p class="info-item">
      <b>Comments${item.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads${item.downloads}</b>
    </p>
  </div>
</div>`; 
})
}


form.addEventListener('submit',e => {
  e.preventDefault();
  
fetchData()
// let API_GALLERY = fetch("https://pixabay.com/api/?key=34989150-f6282d23d45a19c7980767166&"+"q="+`${input.value}`+"&image_type=photo&orientation=horizontal&safesearch=true").then(response => {
//     if (!response.ok) {
//     throw new Error(response.status);
//     }
//     return response.json()
// }).then(data => { 

//     renderHtml(data);

//     if (data.total === 0) {
//         Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//     } else {
//         Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//     }
    
    
// })
})