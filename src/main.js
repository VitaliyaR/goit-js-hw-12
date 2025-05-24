import {
    getImagesByQuery,
    setQuery,
    getCurrentQuery,
    getCurrentPage,
    incrementPage
  } from './js/pixabay-api.js';
  
  import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
  } from './js/render-functions.js';
  
  import iziToast from 'izitoast';
  import "izitoast/dist/css/iziToast.min.css";
  
  const form = document.querySelector('.form');
  const input = form.querySelector('input[name="search-text"]');
  const loadMoreButton = document.getElementById('load-more');
  
  let currentImages = [];
  let totalHits = 0;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const query = input.value.trim();
  
    if (!query) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search term.',
      });
      return;
    }
  
    setQuery(query);
    showLoader();
    clearGallery();
  
    try {
      const { hits, totalHits: total } = await getImagesByQuery(query, 1);
      currentImages = hits;
      totalHits = total;
  
      if (hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        hideLoadMoreButton();
      } else {
        createGallery(hits);
  
        if (currentImages.length >= totalHits) {
          hideLoadMoreButton();
          iziToast.info({
            title: 'End of Results',
            message: "We're sorry, but you've reached the end of search results.",
          });
        } else {
          showLoadMoreButton();
        }
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      hideLoader();
    }
  });
  
  loadMoreButton.addEventListener('click', async () => {
    showLoader();
    incrementPage();
  
    try {
      const { hits: newImages } = await getImagesByQuery(getCurrentQuery(), getCurrentPage());
  
      if (newImages.length > 0) {
        currentImages = [...currentImages, ...newImages];
        createGallery(newImages);
  
        // >>> Додаємо плавне прокручування <<< 
        const firstCard = document.querySelector('.gallery-item');
        if (firstCard) {
          const { height } = firstCard.getBoundingClientRect();
          window.scrollBy({
            top: height * 2,
            behavior: 'smooth'
          });
        }
      }
  
      if (currentImages.length >= totalHits) {
        hideLoadMoreButton();
        iziToast.info({
          title: 'End of Results',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong while loading more images.',
      });
    } finally {
      hideLoader();
    }
  });
  