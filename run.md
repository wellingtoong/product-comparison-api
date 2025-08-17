# Instruções de Execução

## 📋 Pré-requisitos do Sistema

Antes de executar a aplicação, certifique-se de que seu sistema atende aos seguintes requisitos:

### Software Necessário

1. **Node.js** (versão 18.0.0 ou superior)
   - Download: https://nodejs.org/
   - Verificar instalação: `node --version`

2. **npm** (gerenciador de pacotes, incluído com Node.js)
   - Verificar instalação: `npm --version`

3. **Terminal/Prompt de Comando**
   - Windows: Command Prompt, PowerShell ou Git Bash
   - macOS/Linux: Terminal

### Verificação do Ambiente

Execute os seguintes comandos para verificar se o ambiente está configurado corretamente:

```bash
# Verificar versão do Node.js
node --version
# Saída esperada: v18.x.x ou superior

# Verificar versão do npm
npm --version
# Saída esperada: 8.x.x ou superior
```

## 🚀 Instalação e Configuração

### Passo 1: Obter o Código

#### Opção A: Download do Arquivo ZIP

1. Baixe o arquivo ZIP do projeto
2. Extraia o conteúdo em um diretório de sua escolha
3. Navegue até o diretório extraído

#### Opção B: Clone do Repositório (se disponível)

```bash
git clone <url-do-repositorio>
cd product-comparison-api
```

### Passo 2: Instalar Dependências

No diretório raiz do projeto, execute:

```bash
npm install
```

Este comando irá:

- Baixar e instalar todas as dependências listadas no `package.json`
- Criar o diretório `node_modules`
- Gerar o arquivo `package-lock.json` (se não existir)

**Dependências que serão instaladas:**

- `express`: Framework web para Node.js
- `cors`: Middleware para configuração de CORS
- `express-rate-limit`: Middleware para rate limiting (limitação de requisições)
- `swagger-ui-express`: Interface web para documentação OpenAPI
- `swagger-jsdoc`: Geração de especificação OpenAPI a partir de comentários JSDoc

**Dependências de desenvolvimento:**

- `jest`: Framework de testes
- `supertest`: Biblioteca para testes HTTP
- `nodemon`: Ferramenta de desenvolvimento para reinicialização automática
- `@eslint/js`: Configuração base do ESLint
- `eslint`: Linter para garantir qualidade de código
- `eslint-config-prettier`: Integração para evitar conflitos entre ESLint - `e Prettier
- `eslint-plugin-import`: Regras de lint para import/export
- `eslint-plugin-jest`: Regras de lint específicas para testes com Jest
- `eslint-plugin-n`: Regras para boas práticas em projetos Node.js
- `eslint-plugin-prettier`: Executa o Prettier como regra de ESLint
- `eslint-plugin-promise`: Regras para melhor uso de Promises
- `globals`: Conjunto de definições globais para ESLint
- `prettier`: Formatador de código automático
- `husky`: Hooks de Git para automatizar verificações antes de commits/push
- `lint-staged`: Executa linters apenas nos arquivos alterados (staged)
- `git-commit-msg-linter`: Garante mensagens de commit no padrão Conventional Commits

### Passo 3: Verificar Estrutura do Projeto

Após a instalação, verifique se a estrutura do projeto está correta:

```
product-comparison-api/
├── node_modules/          # Dependências (criado após npm install)
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── app.js
├── data/
│   └── products.json
├── tests/
├── Dockerfile
├── eslint.config.js
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── run.md
```

## 🏃‍♂️ Executando a Aplicação

### Modo de Desenvolvimento (Recomendado)

Para desenvolvimento, use o comando que ativa o nodemon para reinicialização automática:

```bash
npm run dev
```

**O que acontece:**

- O servidor inicia na porta 3000 (ou na porta definida em `process.env.PORT`)
- O nodemon monitora mudanças nos arquivos
- O servidor reinicia automaticamente quando arquivos são modificados
- Logs detalhados são exibidos no console

**Saída esperada:**

```
> product-comparison-api@1.0.0 dev
> nodemon src/app.js

[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/app.js`
🚀 Servidor rodando na porta 3000
📍 Acesse: http://localhost:3000
🏥 Health check: http://localhost:3000/health
```

### Modo de Produção

Para executar em modo de produção:

```bash
npm start
```

**Diferenças do modo de desenvolvimento:**

- Não há reinicialização automática
- Menor overhead de recursos
- Adequado para ambientes de produção

## 🔍 Testando a API

### 1. Verificação Básica

Abra seu navegador e acesse:

```
http://localhost:3000/health
```

**Resposta esperada:**

```json
{
  "status": "OK",
  "message": "API de Comparação de Produtos está funcionando",
  "timestamp": "2025-08-16T22:30:00.000Z"
}
```

### 2. Testando Endpoints com curl

#### Listar todos os produtos:

```bash
curl http://localhost:3000/api/products
```

#### Buscar produto específico:

```bash
curl http://localhost:3000/api/products/smartphone-001
```

#### Dados para comparação:

```bash
curl http://localhost:3000/api/products/compare
```

### 3. Testando com Ferramentas Gráficas

#### Postman

1. Importe a coleção de endpoints
2. Configure a base URL: `http://localhost:3000`
3. Teste cada endpoint individualmente

#### Insomnia

1. Crie um novo workspace
2. Configure requests para cada endpoint
3. Teste as respostas

## 🧪 Executando Testes

### Testes Completos

Execute todos os testes automatizados:

```bash
npm test
```

**Saída esperada:**

```
Test Suites: 2 passed, 2 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        1.197 s
Ran all test suites.
```

### Testes em Modo Watch

Para desenvolvimento, execute testes em modo de observação:

```bash
npm run test:watch
```

Este modo:

- Executa testes automaticamente quando arquivos são modificados
- Permite execução seletiva de testes
- Fornece feedback instantâneo durante o desenvolvimento

## 🔧 Configurações Avançadas

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (opcional):

```env
PORT=3000
NODE_ENV=development
```

### Configuração de Porta

Para usar uma porta diferente:

```bash
# Linux/macOS
PORT=8080 npm start

# Windows (Command Prompt)
set PORT=8080 && npm start

# Windows (PowerShell)
$env:PORT=8080; npm start
```

### Configuração de CORS

Por padrão, a API aceita requisições de qualquer origem. Para restringir, modifique o arquivo `src/app.js`:

```javascript
app.use(
  cors({
    origin: 'http://localhost:3000', // Apenas esta origem
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);
```

## 🐛 Solução de Problemas

### Problema: Porta já em uso

**Erro:**

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Soluções:**

1. Use uma porta diferente: `PORT=3001 npm start`
2. Encontre e termine o processo que usa a porta:

   ```bash
   # Linux/macOS
   lsof -ti:3000 | xargs kill -9

   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

### Problema: Módulos não encontrados

**Erro:**

```
Error: Cannot find module 'express'
```

**Solução:**

```bash
# Remover node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Problema: Permissões no Linux/macOS

**Erro:**

```
EACCES: permission denied
```

**Soluções:**

1. Use sudo (não recomendado): `sudo npm install`
2. Configure npm para usar diretório local:
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   export PATH=~/.npm-global/bin:$PATH
   ```

### Problema: Testes falhando

**Possíveis causas e soluções:**

1. **Servidor já rodando**: Pare o servidor antes de executar testes
2. **Porta ocupada**: Use `PORT=0 npm test` para porta aleatória
3. **Dependências desatualizadas**: Execute `npm update`

## 📊 Monitoramento e Logs

### Logs da Aplicação

Durante a execução, a API gera logs detalhados:

```
📝 [2025-08-16T22:30:00.000Z] GET /api/products - Mozilla/5.0...
📤 [2025-08-16T22:30:00.000Z] GET /api/products - 200 (15ms)
```

### Interpretação dos Logs

- `📝`: Log de requisição recebida
- `📤`: Log de resposta enviada
- `❌`: Log de erro capturado
- Timestamp no formato ISO 8601
- Método HTTP e URL
- Status code e tempo de processamento

## 🚀 Deploy e Produção

### Preparação para Deploy

1. **Instalar apenas dependências de produção:**

   ```bash
   npm install --production
   ```

2. **Configurar variáveis de ambiente:**

   ```bash
   export NODE_ENV=production
   export PORT=80
   ```

3. **Executar em modo produção:**
   ```bash
   npm start
   ```

### Usando PM2 (Recomendado para produção)

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar aplicação com PM2
pm2 start src/app.js --name "product-api"

# Monitorar aplicação
pm2 status
pm2 logs product-api
```

**Nota:** Este documento foi criado como parte da avaliação técnica e contém todas as informações necessárias para executar a aplicação com sucesso.
