import './mocks/fetchSimulator';
import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Teste se o retorno da função fetchProductsList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const result = await fetchProductsList('computador')
    expect (result).toEqual(computadorSearch);
  });

  it('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: Termo de busca não informado', async () => {
    await expect(fetchProductsList()).rejects.toThrow(new Error('Termo de busca não informado'));
  });

  it('Execute a função fetchProduct com o argumento do produto "MLB1405519561" e teste se fetch foi chamada;', () => {
    fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste se, ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1405519561";', () => {
    fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: ID não informado', async () => {
    const error = 'ID não informado';
    await expect(fetchProduct()).rejects.toThrow(error);
  });

  it('Teste se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo.', async () => {
    const produto = 'MLB1405519561';
    const { response } = await fetchProduct(produto);
    expect(response).toBe(produto.response);
  });

});
