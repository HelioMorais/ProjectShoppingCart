import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCustomElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.querySelector('.products');

const createLoading = () => {
  const elementLoad = createCustomElement('p', 'loading', 'Carregando...');
  productsSection.appendChild(elementLoad);
};

const removeLoading = () => {
  const elementLoad = document.querySelector('.loading');
  productsSection.removeChild(elementLoad);
};

const renderProducts = async () => {
  createLoading();
  try {
    const products = await fetchProductsList('computador');
    products.forEach((product) => {
      productsSection.appendChild(createProductElement(product));
    });
    removeLoading();
  } catch (error) {
    console.error(error.message);
  }
};

renderProducts();

// async function createLoading() {
//   productsSection.appendChild(createCustomElement('p', 'loading', 'Carregando...'));
//   fetchProductsList('computador').then((response) => response.json())
//     .then((data) => productsSection.removeChild(document.querySelector('.loading')));
// }
// createLoading();

// async function createLoading() {
//   productsSection.appendChild(createCustomElement('p', 'loading', 'Carregando...'));
//   fetchProductsList('computador').then((response) => response.json()).then((data) => {
//   productsSection.removeChild(document.querySelector('.loading')))
// // codigo que envolva o 'data' aqui
// }
