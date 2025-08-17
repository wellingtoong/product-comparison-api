/**
 * Middleware de logging para registrar todas as requisições HTTP
 * Fornece informações úteis para debugging e monitoramento
 */
export const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const userAgent = req.get('User-Agent') || 'Unknown';

  // Log da requisição
  console.log(`[${timestamp}] ${method} ${url} - ${userAgent}`);

  // Captura o tempo de início da requisição
  const startTime = Date.now();

  // Override do método res.end para capturar o status da resposta
  const originalEnd = res.end;
  res.end = function (...args) {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;

    // Log da resposta com tempo de processamento
    console.log(`[${timestamp}] ${method} ${url} - ${statusCode} (${duration}ms)`);

    // Chama o método original
    originalEnd.apply(this, args);
  };

  next();
};
