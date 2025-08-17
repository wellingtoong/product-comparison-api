# syntax=docker/dockerfile:1.7

############################
# 1) Dependências (dev)
############################
FROM node:22-alpine AS deps
WORKDIR /app

# Copia manifestos primeiro para aproveitar cache
COPY package*.json ./

# Evita que o script "prepare" (husky) rode na instalação
ENV HUSKY=0
RUN npm ci

############################
# 2) Testes (falha a build se falhar)
############################
FROM deps AS test
WORKDIR /app
# Copia o restante do código
COPY . .

ENV NODE_ENV=test
# Mantém HUSKY=0 herdado
RUN npm run test:ci

############################
# 3) Dependências de produção
############################
FROM node:22-alpine AS prod-deps
WORKDIR /app
COPY package*.json ./

# Evita rodar scripts (prepare) e instala apenas deps de produção
ENV HUSKY=0
RUN npm ci --omit=dev --ignore-scripts

############################
# 4) Runtime (leve e seguro)
############################
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Executa como usuário sem privilégios
USER node

# Copia node_modules de produção
COPY --chown=node:node --from=prod-deps /app/node_modules ./node_modules
# Copia o código fonte
COPY --chown=node:node . .

# Porta padrão (ajuste se necessário)
EXPOSE 3000

# Healthcheck simples para /health (ajuste se usar outra rota/porta)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT:-3000}/health || exit 1

# Comando de inicialização
CMD ["node", "src/app.js"]
