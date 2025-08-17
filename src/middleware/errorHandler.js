export const errorHandler = (err, req, res, next) => {
  console.error('Erro capturado:', err);

  if (err.status) {
    return res.status(err.status).json({
      error: true,
      message: err.message,
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      error: true,
      message: 'JSON inválido na requisição',
      timestamp: new Date().toISOString(),
      path: req.path
    });
  }

  res.status(500).json({
    error: true,
    message: 'Erro interno do servidor',
    timestamp: new Date().toISOString(),
    path: req.path
  });
};

export const createError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

