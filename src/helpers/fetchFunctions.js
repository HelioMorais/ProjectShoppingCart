const API_URL = ('https://api.mercadolibre.com/sites/MLB/search?q=');

export const fetchProduct = async () => {
  const url = `${API_URL}${produto}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(`${API_URL}${query}`);
  const data = await response.json();
  return data.results;
};
