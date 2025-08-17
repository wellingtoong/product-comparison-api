import request from 'supertest';
import app from '../src/app.js';

describe('API de Comparação de Produtos', () => {
  
  describe('Health Check', () => {
    it('deve retornar status 200 e informações do health check', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);
      
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/products', () => {
    it('deve retornar todos os produtos com status 200', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);
      
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(response.body).toHaveProperty('total');
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.total).toBeGreaterThan(0);
    });

    it('deve retornar produtos com estrutura correta', async () => {
      const response = await request(app)
        .get('/api/products')
        .expect(200);
      
      const firstProduct = response.body.data[0];
      expect(firstProduct).toHaveProperty('id');
      expect(firstProduct).toHaveProperty('nome');
      expect(firstProduct).toHaveProperty('urlImagem');
      expect(firstProduct).toHaveProperty('descricao');
      expect(firstProduct).toHaveProperty('preco');
      expect(firstProduct).toHaveProperty('classificacao');
      expect(firstProduct).toHaveProperty('especificacoes');
    });
  });

  describe('GET /api/products/:id', () => {
    it('deve retornar um produto específico com status 200', async () => {
      const response = await request(app)
        .get('/api/products/smartphone-001')
        .expect(200);
      
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveProperty('id', 'smartphone-001');
      expect(response.body.data).toHaveProperty('nome');
    });

    it('deve retornar erro 404 para produto inexistente', async () => {
      const response = await request(app)
        .get('/api/products/produto-inexistente')
        .expect(404);
      
      expect(response.body).toHaveProperty('error', true);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('não encontrado');
    });
  });

  describe('GET /api/products/compare', () => {
    it('deve retornar dados formatados para comparação', async () => {
      const response = await request(app)
        .get('/api/products/compare')
        .expect(200);
      
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
      
      const firstProduct = response.body.data[0];
      expect(firstProduct).toHaveProperty('id');
      expect(firstProduct).toHaveProperty('nome');
      expect(firstProduct).toHaveProperty('preco');
      expect(firstProduct).toHaveProperty('classificacao');
      expect(firstProduct).toHaveProperty('resumo');
      expect(firstProduct).toHaveProperty('especificacoesPrincipais');
    });
  });
});

