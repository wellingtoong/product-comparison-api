export const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const userAgent = req.get('User-Agent') || 'Unknown';

  console.log(`[${timestamp}] ${method} ${url} - ${userAgent}`);

  const startTime = Date.now();

  const originalEnd = res.end;
  res.end = function (...args) {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;

    console.log(`[${timestamp}] ${method} ${url} - ${statusCode} (${duration}ms)`);
    originalEnd.apply(this, args);
  };

  next();
};
