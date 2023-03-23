const API_URL = ('https://api.mercadolibre.com/sites/MLB/search?q=');

export const fetchProduct = async () => {

};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`${API_URL}${query}`);
  const data = await response.json();
  return data.results;
};
