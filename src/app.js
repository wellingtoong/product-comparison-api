import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import productRoutes from './routes/productRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './middleware/logger.js';
import { generalLimiter, healthCheckLimiter } from './middleware/rateLimiter.js';
import { swaggerSpec, swaggerUiOptions } from './config/swagger.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de logging para todas as requisições
app.use(logger);

// Rate Limiting geral para toda a aplicação
app.use(generalLimiter);

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Middleware para parsing de JSON
app.use(express.json());

// Documentação Swagger/OpenAPI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

// Endpoint para acessar a especificação OpenAPI em JSON
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verificação de saúde da API
 *     description: Endpoint para verificar se a API está funcionando corretamente
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API funcionando corretamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthResponse'
 *       429:
 *         description: Rate limit excedido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RateLimitError'
 */
// Rota de health check com rate limiting específico
app.get('/health', healthCheckLimiter, (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'API de Comparação de Produtos está funcionando',
    timestamp: new Date().toISOString(),
    rateLimit: {
      general: 'Limite geral: 100 req/15min',
      healthCheck: 'Limite health check: 200 req/10min',
    },
    documentation: {
      swagger: '/api-docs',
      openapi: '/api-docs.json',
    },
  });
});

// Rota raiz com informações da API
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'API de Comparação de Produtos',
    version: '1.0.0',
    description: 'API RESTful para comparação de produtos desenvolvida em Node.js',
    documentation: {
      interactive: '/api-docs',
      openapi: '/api-docs.json',
    },
    endpoints: {
      health: '/health',
      products: '/api/products',
      productById: '/api/products/{id}',
      comparison: '/api/products/compare',
    },
    rateLimit: {
      general: '100 req/15min',
      healthCheck: '200 req/10min',
      comparison: '30 req/5min',
    },
  });
});

app.use('/api', productRoutes);

app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
  });
}

export default app;
