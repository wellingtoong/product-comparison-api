import rateLimit from 'express-rate-limit';

/**
 * Rate Limiter geral para todas as rotas da API
 * Limite: 100 requisições por IP a cada 15 minutos
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições por IP
  message: {
    error: true,
    message: 'Muitas requisições a partir deste IP. Tente novamente após 15 minutos.',
    retryAfter: '15 minutos',
    timestamp: new Date().toISOString(),
  },
  standardHeaders: true, // Retorna informações de rate limit nos headers `RateLimit-*`
  legacyHeaders: false, // Desabilita headers `X-RateLimit-*`
  handler: (req, res) => {
    console.log(`Rate limit excedido para IP: ${req.ip} na rota: ${req.path}`);
    res.status(429).json({
      error: true,
      message: 'Muitas requisições a partir deste IP. Tente novamente após 15 minutos.',
      retryAfter: '15 minutos',
      timestamp: new Date().toISOString(),
      path: req.path,
    });
  },
});

/**
 * Rate Limiter mais restritivo para endpoints específicos
 * Limite: 30 requisições por IP a cada 5 minutos
 */
export const strictLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 30, // Limite de 30 requisições por IP
  message: {
    error: true,
    message: 'Muitas requisições para este endpoint. Tente novamente após 5 minutos.',
    retryAfter: '5 minutos',
    timestamp: new Date().toISOString(),
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    console.log(`Rate limit estrito excedido para IP: ${req.ip} na rota: ${req.path}`);
    res.status(429).json({
      error: true,
      message: 'Muitas requisições para este endpoint. Tente novamente após 5 minutos.',
      retryAfter: '5 minutos',
      timestamp: new Date().toISOString(),
      path: req.path,
    });
  },
});

/**
 * Rate Limiter para health check (mais permissivo)
 * Limite: 200 requisições por IP a cada 10 minutos
 */
export const healthCheckLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  max: 200, // Limite de 200 requisições por IP
  message: {
    error: true,
    message: 'Muitas verificações de saúde. Tente novamente após 10 minutos.',
    retryAfter: '10 minutos',
    timestamp: new Date().toISOString(),
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    console.log(`Rate limit de health check excedido para IP: ${req.ip}`);
    res.status(429).json({
      error: true,
      message: 'Muitas verificações de saúde. Tente novamente após 10 minutos.',
      retryAfter: '10 minutos',
      timestamp: new Date().toISOString(),
      path: req.path,
    });
  },
});

/**
 * Função utilitária para criar rate limiters personalizados
 * @param {number} windowMs - Janela de tempo em milissegundos
 * @param {number} max - Número máximo de requisições
 * @param {string} message - Mensagem personalizada
 * @returns {Function} Middleware de rate limiting
 */
export const createCustomLimiter = (windowMs, max, message) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      error: true,
      message,
      timestamp: new Date().toISOString(),
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      console.log(`Rate limit personalizado excedido para IP: ${req.ip} na rota: ${req.path}`);
      res.status(429).json({
        error: true,
        message,
        timestamp: new Date().toISOString(),
        path: req.path,
      });
    },
  });
};
