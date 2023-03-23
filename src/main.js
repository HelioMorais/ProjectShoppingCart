import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCustomElement,
  createCartProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

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

const loadProductsCart = async () => {
  try {
    const idCart = getSavedCartIDs();
    const cartPromises = idCart.map((element) => fetchProduct(element));
    const cartProducts = await Promise.all(cartPromises);
    const cartProductsContainer = document.querySelector('.cart__products');
    cartProducts.forEach((product) => {
      const productElement = createCartProductElement(product);
      cartProductsContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error(error);
  }
};

window.onload = loadProductsCart;
