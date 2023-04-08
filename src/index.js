import Notiflix from 'notiflix';
import axios from 'axios';
const form = document.querySelector('.search-form');
const API_KEY = '34989150-F6282D23D45A19C7980767166';
const input = document.querySelector('input[name="searchQuery"]');
const btn = document.querySelector('button[type="submit"]');
const body = document.body;
let pageValue = 1;
const fetchData = async () => {
    try {
      const response = await axios.get("https://pixabay.com/api/?key=34989150-f6282d23d45a19c7980767166&" + "q=" + `${input.value}` + "&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&"+`page=${pageValue}`);
      return response
  } catch (error) {
    console.error(error);
  }
}

const renderHtml = async (data) => {
const galleryContainer = document.createElement('div');
  galleryContainer.classList.add('gallery-container');
  form.after(galleryContainer);

 data = await fetchData()
  data.data.hits.map((item) => {
    galleryContainer.innerHTML += `<div class="photo-card">
  <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" height=220 width=340/>
  <div class="info">
    <p class="info-item">
      <b>Likes ${item.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${item.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${item.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${item.downloads}</b>
    </p>
  </div>
</div>`});

  const paginationBtn = document.createElement('button');
  paginationBtn.textContent = 'Load more';
  galleryContainer.append(paginationBtn);
//////////////////////////////////////////////////////////////////////////////
  paginationBtn.addEventListener('click', () => {
    pageValue += 1;
    
    
  })
  ////////////////////////////////////////////////
     if (data.total===0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    } else {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
  }

}

form.addEventListener('submit',(e) => {

  e.preventDefault()
  fetchData()
  renderHtml()
})



