[![License: MIT](https://img.shields.io/github/license/wellingtoong/product-comparison-api)](LICENSE)
![Built with Love](https://img.shields.io/badge/Built%20with-%E2%9D%A4-red)

<!-- Status e qualidade -->

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fe5196.svg)](https://www.conventionalcommits.org/)
[![Commit Style](<https://img.shields.io/badge/Commits-lintados%20(Husky%20%2B%20git--commit--msg--linter)-informational>)](https://github.com/legend80s/git-commit-msg-linter)
[![Lint Staged](https://img.shields.io/badge/lint--staged-enabled-brightgreen)](https://github.com/okonet/lint-staged)
[![ESLint](https://img.shields.io/badge/ESLint-Flat%20Config-4B32C3)](https://eslint.org/docs/latest/use/configure/configuration-files-new)
[![Prettier](https://img.shields.io/badge/Code%20style-Prettier-ff69b4)](https://prettier.io)

<!-- Atividade do repo -->

[![Open Issues](https://img.shields.io/github/issues/wellingtoong/product-comparison-api)](https://github.com/wellingtoong/product-comparison-api/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

# API de Comparação de Produtos

## 📋 Visão Geral

Esta é uma API RESTful desenvolvida em Node.js com Express.js para fornecer dados de produtos destinados à comparação. A aplicação foi desenvolvida como parte de uma avaliação técnica, seguindo as melhores práticas de desenvolvimento backend e fornecendo endpoints claros e eficientes para recuperar informações detalhadas de produtos.

A API oferece funcionalidades para listar todos os produtos, buscar produtos específicos por ID e obter dados formatados especificamente para comparação entre produtos, incluindo campos como nome, preço, classificação, especificações e imagens.

## 🚀 Características Principais

- **API RESTful**: Endpoints bem definidos seguindo padrões REST
- **Rate Limiting**: Proteção contra abuso com limites diferenciados por endpoint
- **Documentação Swagger/OpenAPI**: Interface interativa para explorar e testar a API
- **Tratamento de Erros**: Sistema robusto de tratamento e padronização de erros
- **CORS Configurado**: Permite requisições cross-origin de qualquer origem
- **Logging Detalhado**: Middleware de logging para monitoramento de requisições
- **Dados Mock**: Produtos realistas armazenados em arquivo JSON local
- **Testes Automatizados**: Cobertura completa de testes unitários e de integração
- **Graceful Shutdown**: Encerramento elegante do servidor em produção
- **Documentação Completa**: README detalhado e documentação técnica

## 🛠️ Tecnologias Utilizadas

- **Node.js** (v22.12.0): Runtime JavaScript
- **Express.js** (v5.1.0): Framework web minimalista
- **CORS** (v2.8.5): Middleware para configuração de CORS
- **Express Rate Limit** (v8.0.1): Middleware para rate limiting
- **Swagger UI Express** (v5.0.1): Interface web para documentação OpenAPI
- **Swagger JSDoc** (v6.2.8): Geração de especificação OpenAPI a partir de comentários JSDoc
- **Jest** (v30.0.5): Framework de testes
- **Supertest** (v7.1.4): Biblioteca para testes de HTTP
- **Nodemon** (v3.1.10): Ferramenta de desenvolvimento para reinicialização automática

## 📦 Ferramentas de Desenvolvimento e Qualidade de Código

- **ESLint** (v9.33.0): Linter para identificar e corrigir problemas de código JavaScript/TypeScript
- **@eslint/js** (v9.33.0): Conjunto de regras oficiais do ESLint
- **eslint-config-prettier** (v10.1.8): Integração que desativa regras do ESLint conflitantes com o Prettier
- **eslint-plugin-import** (v2.32.0): Regras do ESLint para garantir boas práticas em imports/export
- **eslint-plugin-jest** (v29.0.1): Regras do ESLint específicas para testes com Jest
- **eslint-plugin-n** (v17.21.3): Regras do ESLint para projetos Node.js
- **eslint-plugin-prettier** (v5.5.4): Executa o Prettier como regra do ESLint
- **eslint-plugin-promise** (v7.2.1): Regras do ESLint para uso correto de Promises

## 📝 Padronização de Código e Commits

- **Prettier** (v3.6.2): Formatador automático de código
- **Husky** (v9.1.7): Gerenciador de git hooks para automatizar verificações antes de commits
- **lint-staged** (v16.1.5): Executa linters e formatadores apenas nos arquivos modificados no commit
- **git-commit-msg-linter** (v5.0.8): Linter para padronizar mensagens de commit

## 🌍 Suporte e Utilidades

- **globals (v16.3.0)**: Lista de variáveis globais reconhecidas pelo ESLint (Node, browser, etc.)

## 📁 Estrutura do Projeto

```
product-comparison-api/
├── src/
│   ├── config/
│   │   └── swagger.js              # Configuração do Swagger/OpenAPI
│   ├── controllers/
│   │   └── productController.js    # Lógica de negócio dos produtos
│   ├── middleware/
│   │   ├── errorHandler.js         # Tratamento global de erros
│   │   ├── logger.js               # Middleware de logging
│   │   └── rateLimiter.js          # Middleware de rate limiting
│   ├── routes/
│   │   └── productRoutes.js        # Definição das rotas da API
│   ├── utils/
│   │   └── dataReader.js           # Utilitário para leitura de dados
│   └── app.js                      # Arquivo principal da aplicação
├── data/
│   └── products.json               # Dados mock dos produtos
├── tests/
│   ├── app.test.js                 # Testes da aplicação principal
│   └── dataReader.test.js          # Testes do utilitário de dados
├── package.json                    # Configurações e dependências
├── Dockerfile                      # Configuração da imagem Docker
├── eslint.config.js                # Regras de linting do projeto
├── LICENSE                         # Licença do projeto
├── package.json                    # Configurações e dependências
├── package-lock.json               # Lockfile para versões exatas das dependências
├── README.md                       # Documentação principal
├── run.md                          # Instruções de execução
```

## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passos para Instalação

1. **Clone ou baixe o projeto**

   ```bash
   # Se usando Git
   git clone <url-do-repositorio>
   cd product-comparison-api

   # Ou extraia o arquivo ZIP e navegue até o diretório
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Verifique a instalação**
   ```bash
   npm run dev
   ```

A API estará disponível em `http://localhost:3000`

## 🚀 Como Executar

### Modo de Desenvolvimento

```bash
npm run dev
```

Inicia o servidor com nodemon para reinicialização automática durante o desenvolvimento.

### Modo de Produção

```bash
npm start
```

Inicia o servidor em modo de produção.

### Scripts úteis

```bash
# Desenvolvimento e Produção
npm run dev            # nodemon
npm start              # produção

# Testes
npm test               # todos os testes
npm run test:watch     # watch mode
npm run test:cov       # com coverage
npm run test:ci        # cobertura + runInBand (p/ CI)
npm run test:staged    # apenas testes relacionados aos arquivos staged (pre-commit)

# Qualidade
npm run lint           # checagem ESLint
npm run lint:fix       # corrigir ESLint
npm run format         # checar Prettier
npm run format:fix     # aplicar Prettier

# Husky (já configurado em "prepare")
npm run prepare
```

**Nota sobre Testes e Encerramento do Servidor:**
Para garantir que os testes do Jest sejam executados de forma limpa e o servidor Express seja encerrado corretamente após a conclusão dos testes, a aplicação foi configurada para:

- Iniciar o servidor Express apenas quando `NODE_ENV` não for `test`.
- Utilizar `process.on('SIGTERM')` e `process.on('SIGINT')` para um encerramento gracioso do servidor em ambientes de produção.
- O script `npm test` define `NODE_ENV=test` e inclui `forceExit: true` e `detectOpenHandles: true` na configuração do Jest para auxiliar na identificação e encerramento de operações assíncronas pendentes.

### 🐳 Executando com Docker

Você pode rodar a aplicação diretamente em um container Docker, sem precisar instalar Node.js ou npm na sua máquina.

1. Construir a imagem

No diretório raiz do projeto, execute:

```bash
docker build -t product-comparison-api .
```

Isso irá gerar a imagem product-comparison-api com base no Dockerfile.

2. Rodar o container

```bash
docker run -p 3000:3000 product-comparison-api
```

A aplicação estará disponível em: `http://localhost:3000`

3. Usando variáveis de ambiente

Você pode passar variáveis de ambiente no `docker run`:

```bash
docker run -p 8080:3000 -e PORT=3000 product-comparison-api
```

Agora a API estará acessível em: `http://localhost:8080`

4. Executando em modo interativo (dev)
   Se quiser usar o container em modo de desenvolvimento com hot reload (via **nodemon**):

```bash
docker run -it --rm -p 3000:3000 -v $(pwd):/app product-comparison-api npm run dev
```

## 🛡️ Rate Limiting (Controle de Taxa)

A API implementa um sistema robusto de rate limiting para proteger contra abuso e garantir o uso justo dos recursos:

### Limites Configurados

| Endpoint                                 | Limite          | Janela de Tempo | Descrição                                            |
| ---------------------------------------- | --------------- | --------------- | ---------------------------------------------------- |
| **Geral**                                | 100 requisições | 15 minutos      | Aplicado a todos os endpoints                        |
| **Health Check** (`/health`)             | 200 requisições | 10 minutos      | Mais permissivo para monitoramento                   |
| **Comparação** (`/api/products/compare`) | 30 requisições  | 5 minutos       | Mais restritivo por ser computacionalmente intensivo |

### Comportamento do Rate Limiting

- **Identificação por IP**: Os limites são aplicados por endereço IP do cliente
- **Headers de Resposta**: Informações sobre o limite são incluídas nos headers HTTP (`RateLimit-*`)
- **Resposta 429**: Quando o limite é excedido, retorna status HTTP 429 com detalhes do erro
- **Logging**: Todas as violações de rate limit são registradas no console para monitoramento

### Exemplo de Resposta de Rate Limit Excedido

```json
{
  "error": true,
  "message": "Muitas requisições a partir deste IP. Tente novamente após 15 minutos.",
  "retryAfter": "15 minutos",
  "timestamp": "2025-08-16T22:30:00.000Z",
  "path": "/api/products"
}
```

## 📖 Documentação Swagger/OpenAPI

A API inclui documentação interativa completa usando Swagger/OpenAPI 3.0:

### Acessando a Documentação

- **Interface Interativa**: `http://localhost:3000/api-docs`
- **Especificação JSON**: `http://localhost:3000/api-docs.json`
- **Informações da API**: `http://localhost:3000/` (rota raiz)

### Recursos da Documentação

- **Interface Interativa**: Teste todos os endpoints diretamente no navegador
- **Esquemas Detalhados**: Modelos de dados completos para requisições e respostas
- **Exemplos Práticos**: Exemplos de uso para cada endpoint
- **Códigos de Status**: Documentação completa de todos os códigos de resposta possíveis
- **Rate Limiting**: Informações sobre limites de taxa para cada endpoint

### Esquemas Principais

- **Product**: Modelo completo de produto com todas as especificações
- **ProductComparison**: Modelo otimizado para comparação entre produtos
- **HealthResponse**: Resposta do endpoint de verificação de saúde
- **RateLimitError**: Formato padronizado de erro de rate limiting
- **NotFoundError**: Formato de erro para recursos não encontrados

## 📚 Endpoints da API

### Base URL

```
http://localhost:3000/api
```

### 1. Health Check

```http
GET /health
```

**Descrição**: Verifica se a API está funcionando corretamente.

**Resposta de Sucesso (200)**:

```json
{
  "status": "OK",
  "message": "API de Comparação de Produtos está funcionando",
  "timestamp": "2025-08-16T22:30:00.000Z"
}
```

### 2. Listar Todos os Produtos

```http
GET /api/products
```

**Descrição**: Retorna todos os produtos disponíveis com informações completas.

**Resposta de Sucesso (200)**:

```json
{
  "success": true,
  "message": "Produtos recuperados com sucesso",
  "data": [
    {
      "id": "smartphone-001",
      "nome": "Smartphone Galaxy Pro Max",
      "urlImagem": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      "descricao": "Smartphone premium com tela AMOLED...",
      "preco": 2499.99,
      "classificacao": 4.8,
      "especificacoes": {
        "dimensoes": "160.8 x 78.1 x 7.4 mm",
        "peso": "228g",
        "cor": "Azul Oceano"
      }
    }
  ],
  "total": 6,
  "timestamp": "2025-08-16T22:30:00.000Z"
}
```

### 3. Buscar Produto por ID

```http
GET /api/products/{id}
```

**Parâmetros**:

- `id` (string): ID único do produto

**Resposta de Sucesso (200)**:

```json
{
  "success": true,
  "message": "Produto encontrado com sucesso",
  "data": {
    "id": "smartphone-001",
    "nome": "Smartphone Galaxy Pro Max",
    "urlImagem": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    "descricao": "Smartphone premium com tela AMOLED de 6.7 polegadas...",
    "preco": 2499.99,
    "classificacao": 4.8,
    "especificacoes": {
      "dimensoes": "160.8 x 78.1 x 7.4 mm",
      "peso": "228g",
      "cor": "Azul Oceano",
      "tela": "6.7\" AMOLED 120Hz",
      "processador": "Snapdragon 8 Gen 2"
    }
  },
  "timestamp": "2025-08-16T22:30:00.000Z"
}
```

**Resposta de Erro (404)**:

```json
{
  "error": true,
  "message": "Produto com ID 'produto-inexistente' não encontrado",
  "timestamp": "2025-08-16T22:30:00.000Z",
  "path": "/api/products/produto-inexistente"
}
```

### 4. Dados para Comparação

```http
GET /api/products/compare
```

**Descrição**: Retorna produtos formatados especificamente para comparação, com campos resumidos e organizados.

**Resposta de Sucesso (200)**:

```json
{
  "success": true,
  "message": "Dados de comparação recuperados com sucesso",
  "data": [
    {
      "id": "smartphone-001",
      "nome": "Smartphone Galaxy Pro Max",
      "preco": 2499.99,
      "classificacao": 4.8,
      "urlImagem": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      "resumo": "Smartphone premium com tela AMOLED de 6.7 polegadas, processador octa-core de última geração...",
      "especificacoesPrincipais": {
        "dimensoes": "160.8 x 78.1 x 7.4 mm",
        "peso": "228g",
        "cor": "Azul Oceano"
      }
    }
  ],
  "total": 6,
  "timestamp": "2025-08-16T22:30:00.000Z"
}
```

## 🔍 Produtos Disponíveis

A API contém dados mock de 6 produtos diferentes:

1. **Smartphone Galaxy Pro Max** (ID: `smartphone-001`)
2. **Notebook UltraBook Pro 15** (ID: `laptop-002`)
3. **Fone de Ouvido Wireless Premium** (ID: `headphone-003`)
4. **Smartwatch Fitness Pro** (ID: `smartwatch-004`)
5. **Tablet Pro 11 polegadas** (ID: `tablet-005`)
6. **Câmera Digital Mirrorless 4K** (ID: `camera-006`)

Cada produto contém informações detalhadas incluindo nome, descrição, preço, classificação, URL da imagem e especificações técnicas completas.

## ⚠️ Tratamento de Erros

A API implementa um sistema robusto de tratamento de erros com as seguintes características:

### Tipos de Erro

1. **404 Not Found**: Produto ou rota não encontrada
2. **400 Bad Request**: JSON malformado na requisição
3. **500 Internal Server Error**: Erros internos do servidor

### Formato Padrão de Erro

```json
{
  "error": true,
  "message": "Descrição do erro",
  "timestamp": "2025-08-16T22:30:00.000Z",
  "path": "/api/endpoint-que-causou-erro"
}
```

### Logging

Todas as requisições e erros são registrados no console com timestamps e informações detalhadas para facilitar o debugging e monitoramento.

## 🧪 Testes

O projeto inclui uma suíte completa de testes automatizados:

### Cobertura de Testes

- **Testes de Integração**: Verificam o funcionamento completo dos endpoints
- **Testes Unitários**: Validam funções individuais e utilitários
- **Testes de Erro**: Garantem o tratamento adequado de cenários de erro
- **Testes de CORS**: Verificam a configuração correta de CORS

### Executar Testes

```bash
# Executar todos os testes
npm test

# Executar e verificar coverage
npm run test:cov

# Executar testes com watch mode
npm run test:watch
```

### Resultados Esperados

```
Test Suites: 2 passed, 2 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        ~1.2s
```

## 🔒 Segurança e CORS

A API está configurada com:

- **CORS habilitado** para todas as origens (`*`)
- **Métodos HTTP permitidos**: GET, POST, PUT, DELETE
- **Headers permitidos**: Content-Type, Authorization
- **Validação de entrada** básica nos endpoints
- **Tratamento seguro de erros** sem exposição de informações sensíveis

## 📊 Monitoramento e Logs

### Sistema de Logging

A API inclui middleware de logging que registra:

- Timestamp da requisição
- Método HTTP e URL
- User-Agent do cliente
- Status code da resposta
- Tempo de processamento em milissegundos

### Exemplo de Log

```
📝 [2025-08-16T22:30:00.000Z] GET /api/products - Mozilla/5.0...
📤 [2025-08-16T22:30:00.000Z] GET /api/products - 200 (15ms)
```

## 🚀 Deploy e Produção

### Configurações de Produção

A aplicação está configurada para:

- Escutar em `0.0.0.0` (todas as interfaces de rede)
- Usar a porta definida em `process.env.PORT` ou 3000 como fallback
- Suportar variáveis de ambiente para configuração

### Variáveis de Ambiente

```bash
PORT=3000  # Porta do servidor (opcional, padrão: 3000)
```

## 🤝 Contribuição e Desenvolvimento

### Estrutura de Desenvolvimento

O projeto segue uma arquitetura modular com separação clara de responsabilidades:

- **Controllers**: Lógica de negócio
- **Routes**: Definição de endpoints
- **Middleware**: Funcionalidades transversais (logging, erros)
- **Utils**: Utilitários e helpers
- **Tests**: Testes automatizados

### Boas Práticas Implementadas

1. **Código Limpo**: Comentários explicativos e estrutura organizada
2. **Tratamento de Erros**: Sistema robusto e padronizado
3. **Testes Automatizados**: Cobertura completa de funcionalidades
4. **Documentação**: README detalhado e comentários no código
5. **Modularização**: Separação clara de responsabilidades
6. **Logging**: Monitoramento detalhado de requisições

## 📝 Licença

Este projeto é distribuído sob a licença **MIT**.  
Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Wellington Gonzalez**

![Author](https://img.shields.io/badge/author-Wellington%20Gonzalez-blue)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Wellington%20Gonzalez-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wellingtoong/)
[![GitHub: wellingtoong](https://img.shields.io/badge/GitHub-wellingtoong-181717?logo=github)](https://github.com/wellingtoong)

---

Para mais informações sobre como executar o projeto, consulte o arquivo [run.md](./run.md).
