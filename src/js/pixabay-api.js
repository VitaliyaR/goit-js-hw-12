import axios from 'axios';

const API_KEY = '50344127-726c85bb6f98eba42715a8612';

let currentPage = 1;
let currentQuery = '';

// Функція для отримання зображень
export const getImagesByQuery = async (query, page = 1) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 15,
        page: page,
      },
    });

    return {
      hits: response.data.hits,
      totalHits: response.data.totalHits,
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    return {
      hits: [],
      totalHits: 0,
    };
  }
};

// Установлює новий запит і скидає сторінку
export const setQuery = (query) => {
  currentQuery = query;
  currentPage = 1;
};

// Отримати поточний запит
export const getCurrentQuery = () => currentQuery;

// Отримати поточну сторінку
export const getCurrentPage = () => currentPage;

// Інкремент сторінки
export const incrementPage = () => {
  currentPage += 1;
};
