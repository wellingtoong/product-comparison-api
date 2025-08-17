import swaggerJsdoc from 'swagger-jsdoc';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Configuração do Swagger/OpenAPI
 */
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Comparação de Produtos',
      version: '1.0.0',
      description: `
        API RESTful desenvolvida em Node.js com Express.js para fornecer dados de produtos destinados à comparação.
        
        ## Características Principais
        - **Rate Limiting**: Proteção contra abuso com limites diferenciados por endpoint
        - **Tratamento de Erros**: Sistema robusto de tratamento e padronização de erros
        - **CORS Configurado**: Permite requisições cross-origin de qualquer origem
        - **Logging Detalhado**: Middleware de logging para monitoramento de requisições
        - **Dados Mock**: Produtos realistas armazenados em arquivo JSON local
        
        ## Rate Limiting
        - **Geral**: 100 requisições por IP a cada 15 minutos
        - **Health Check**: 200 requisições por IP a cada 10 minutos  
        - **Comparação**: 30 requisições por IP a cada 5 minutos (mais restritivo)
        
        ## Desenvolvido para
        Avaliação técnica demonstrando boas práticas de desenvolvimento backend.
      `,
      contact: {
        name: 'Wellington Gonzalez',
        email: 'wellington.gonzalez@hotmail.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de Desenvolvimento/Local',
      },
    ],
    tags: [
      {
        name: 'Health',
        description: 'Endpoints de verificação de saúde da API',
      },
      {
        name: 'Products',
        description: 'Operações relacionadas aos produtos',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['id', 'nome', 'urlImagem', 'descricao', 'preco', 'classificacao'],
          properties: {
            id: {
              type: 'string',
              description: 'Identificador único do produto',
              example: 'smartphone-001',
            },
            nome: {
              type: 'string',
              description: 'Nome do produto',
              example: 'Smartphone Galaxy Pro Max',
            },
            urlImagem: {
              type: 'string',
              format: 'uri',
              description: 'URL da imagem do produto',
              example: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
            },
            descricao: {
              type: 'string',
              description: 'Descrição detalhada do produto',
              example: 'Smartphone premium com tela AMOLED de 6.7 polegadas...',
            },
            preco: {
              type: 'number',
              format: 'float',
              description: 'Preço do produto em reais',
              example: 2499.99,
            },
            classificacao: {
              type: 'number',
              format: 'float',
              minimum: 0,
              maximum: 5,
              description: 'Classificação do produto (0-5 estrelas)',
              example: 4.8,
            },
            especificacoes: {
              type: 'object',
              description: 'Especificações técnicas do produto',
              properties: {
                dimensoes: {
                  type: 'string',
                  example: '160.8 x 78.1 x 7.4 mm',
                },
                peso: {
                  type: 'string',
                  example: '228g',
                },
                cor: {
                  type: 'string',
                  example: 'Azul Oceano',
                },
              },
              additionalProperties: true,
            },
          },
        },
        ProductComparison: {
          type: 'object',
          required: ['id', 'nome', 'preco', 'classificacao', 'urlImagem', 'resumo'],
          properties: {
            id: {
              type: 'string',
              description: 'Identificador único do produto',
              example: 'smartphone-001',
            },
            nome: {
              type: 'string',
              description: 'Nome do produto',
              example: 'Smartphone Galaxy Pro Max',
            },
            preco: {
              type: 'number',
              format: 'float',
              description: 'Preço do produto em reais',
              example: 2499.99,
            },
            classificacao: {
              type: 'number',
              format: 'float',
              minimum: 0,
              maximum: 5,
              description: 'Classificação do produto (0-5 estrelas)',
              example: 4.8,
            },
            urlImagem: {
              type: 'string',
              format: 'uri',
              description: 'URL da imagem do produto',
              example: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
            },
            resumo: {
              type: 'string',
              description: 'Resumo da descrição do produto (primeiros 100 caracteres)',
              example:
                'Smartphone premium com tela AMOLED de 6.7 polegadas, processador octa-core de última geração...',
            },
            especificacoesPrincipais: {
              type: 'object',
              description: 'Especificações principais para comparação',
              properties: {
                dimensoes: {
                  type: 'string',
                  example: '160.8 x 78.1 x 7.4 mm',
                },
                peso: {
                  type: 'string',
                  example: '228g',
                },
                cor: {
                  type: 'string',
                  example: 'Azul Oceano',
                },
              },
            },
          },
        },
        HealthResponse: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              example: 'OK',
            },
            message: {
              type: 'string',
              example: 'API de Comparação de Produtos está funcionando',
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              example: '2025-08-16T22:30:00.000Z',
            },
            rateLimit: {
              type: 'object',
              properties: {
                general: {
                  type: 'string',
                  example: 'Limite geral: 100 req/15min',
                },
                healthCheck: {
                  type: 'string',
                  example: 'Limite health check: 200 req/10min',
                },
              },
            },
          },
        },
        NotFoundError: {
          type: 'object',
          properties: {
            error: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: "Produto com ID 'produto-inexistente' não encontrado",
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              example: '2025-08-16T22:30:00.000Z',
            },
            path: {
              type: 'string',
              example: '/api/products/produto-inexistente',
            },
          },
        },
        RateLimitError: {
          type: 'object',
          properties: {
            error: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'Muitas requisições a partir deste IP. Tente novamente após 15 minutos.',
            },
            retryAfter: {
              type: 'string',
              example: '15 minutos',
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              example: '2025-08-16T22:30:00.000Z',
            },
            path: {
              type: 'string',
              example: '/api/products',
            },
          },
        },
        InternalServerError: {
          type: 'object',
          properties: {
            error: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'Erro interno do servidor',
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              example: '2025-08-16T22:30:00.000Z',
            },
            path: {
              type: 'string',
              example: '/api/products',
            },
          },
        },
      },
      responses: {
        NotFound: {
          description: 'Recurso não encontrado',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundError',
              },
            },
          },
        },
        RateLimit: {
          description: 'Rate limit excedido',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RateLimitError',
              },
            },
          },
        },
        InternalServerError: {
          description: 'Erro interno do servidor',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerError',
              },
            },
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, '../routes/*.js'), path.join(__dirname, '../app.js')],
};

/**
 * Especificação Swagger gerada
 */
export const swaggerSpec = swaggerJsdoc(swaggerOptions);

/**
 * Opções para o Swagger UI
 */
export const swaggerUiOptions = {
  explorer: true,
  swaggerOptions: {
    docExpansion: 'list',
    filter: true,
    showRequestDuration: true,
    tryItOutEnabled: true,
    requestInterceptor: (req) => {
      req.headers['X-API-Documentation'] = 'swagger-ui';
      return req;
    },
  },
  customCss: `
    .swagger-ui .topbar { display: none }
    .swagger-ui .info .title { color: #3b82f6 }
    .swagger-ui .scheme-container { background: #f8fafc; padding: 10px; border-radius: 5px }
  `,
  customSiteTitle: 'API de Comparação de Produtos - Documentação',
  customfavIcon: '/favicon.ico',
};
