import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const renderProducts = async () => {
  try {
    const products = await fetchProductsList('computador');
    const productsSection = document.querySelector('.products');

    products.forEach((product) => {
      const productElement = createProductElement(product);
      productsSection.appendChild(productElement);
    });
  } catch (error) {
    console.error(error.message);
  }
};

renderProducts();
