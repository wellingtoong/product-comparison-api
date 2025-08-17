import express from 'express';

import {
  getAllProducts,
  getProductById,
  getProductsForComparison,
} from '../controllers/productController.js';
import { strictLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retorna todos os produtos disponíveis
 *     description: Lista completa de produtos com todas as informações detalhadas
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de produtos recuperada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Produtos recuperados com sucesso"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *                 total:
 *                   type: integer
 *                   example: 6
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       429:
 *         description: Rate limit excedido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RateLimitError'
 */
router.get('/products', getAllProducts);

/**
 * @swagger
 * /api/products/compare:
 *   get:
 *     summary: Retorna produtos formatados para comparação
 *     description: Dados otimizados para comparação entre produtos com rate limiting mais restritivo
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Dados de comparação recuperados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Dados de comparação recuperados com sucesso"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProductComparison'
 *                 total:
 *                   type: integer
 *                   example: 6
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       429:
 *         description: Rate limit excedido (limite mais restritivo)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RateLimitError'
 */
router.get('/products/compare', strictLimiter, getProductsForComparison);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Retorna um produto específico pelo ID
 *     description: Busca detalhada de um produto usando seu identificador único
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único do produto
 *         schema:
 *           type: string
 *           example: "smartphone-001"
 *     responses:
 *       200:
 *         description: Produto encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Produto encontrado com sucesso"
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Produto não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotFoundError'
 *       429:
 *         description: Rate limit excedido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RateLimitError'
 */
router.get('/products/:id', getProductById);

export default router;
