import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



export const createGallery = (images) => {
    const galleryContainer = document.querySelector('.gallery');
  
    const markup = images
      .map(image => {
        return `
          <li class="gallery-item">
            <a href="${image.largeImageURL}" class="gallery-link">
              <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
            </a>
            <div class="image-info">
              <div class="info-labels">
                <span>Likes</span>
                <span>Views</span>
                <span>Comments</span>
                <span>Downloads</span>
              </div>
              <div class="info-values">
                <span>${image.likes}</span>
                <span>${image.views}</span>
                <span>${image.comments}</span>
                <span>${image.downloads}</span>
              </div>
            </div>
          </li>
        `;
      })
      .join('');
  
    galleryContainer.insertAdjacentHTML('beforeend', markup);
  };
  
  export const clearGallery = () => {
    document.querySelector('.gallery').innerHTML = '';
  };
  
  export const showLoader = () => {
    document.getElementById('loader').style.display = 'block';
  };
  
  export const hideLoader = () => {
    document.getElementById('loader').style.display = 'none';
  };
  
  export const showLoadMoreButton = () => {
    document.getElementById('load-more').style.display = 'inline-block';
  };
  
  export const hideLoadMoreButton = () => {
    document.getElementById('load-more').style.display = 'none';
  };
  