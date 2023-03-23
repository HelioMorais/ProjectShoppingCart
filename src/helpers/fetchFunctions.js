const API_URL = ('https://api.mercadolibre.com/sites/MLB/search?q=');
const ENDPOINT = ('https://api.mercadolibre.com/items/');

export const fetchProduct = async (paramID) => {
  if (!paramID) {
    throw new Error('ID não informado');
  }
  const response = await fetch(`${ENDPOINT}${paramID}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`${API_URL}${query}`);
  const data = await response.json();
  return data.results;
};
