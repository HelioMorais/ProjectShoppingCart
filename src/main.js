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

const createMessageError = () => {
  const elementMessage = document.createElement('p');
  elementMessage.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  elementMessage.classList = 'error';
  productsSection.appendChild(elementMessage);
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
    createMessageError();
  }
};

renderProducts();
