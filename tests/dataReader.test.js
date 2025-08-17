import { readProductsData, validateProductStructure } from '../src/utils/dataReader.js';

describe('Data Reader Utility', () => {
  
  describe('readProductsData', () => {
    it('deve ler os dados dos produtos com sucesso', async () => {
      const products = await readProductsData();
      
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    });

    it('deve retornar produtos com estrutura válida', async () => {
      const products = await readProductsData();
      
      products.forEach(product => {
        expect(validateProductStructure(product)).toBe(true);
      });
    });
  });

  describe('validateProductStructure', () => {
    it('deve validar produto com estrutura correta', () => {
      const validProduct = {
        id: 'test-001',
        nome: 'Produto Teste',
        urlImagem: 'https://example.com/image.jpg',
        descricao: 'Descrição do produto teste',
        preco: 99.99,
        classificacao: 4.5,
        especificacoes: {}
      };
      
      expect(validateProductStructure(validProduct)).toBe(true);
    });

    it('deve rejeitar produto com campos obrigatórios faltando', () => {
      const invalidProduct = {
        id: 'test-001',
        nome: 'Produto Teste'
      };
      
      expect(validateProductStructure(invalidProduct)).toBe(false);
    });

    it('deve rejeitar produto com campos null ou undefined', () => {
      const invalidProduct = {
        id: 'test-001',
        nome: null,
        urlImagem: 'https://example.com/image.jpg',
        descricao: 'Descrição do produto teste',
        preco: 99.99,
        classificacao: 4.5
      };
      
      expect(validateProductStructure(invalidProduct)).toBe(false);
    });
  });
});

