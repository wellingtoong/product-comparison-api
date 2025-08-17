import express from 'express';
import {
  getAllProducts,
  getProductById,
  getProductsForComparison,
} from '../controllers/productController.js';
import { strictLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/compare', strictLimiter, getProductsForComparison);
router.get('/products/:id', getProductById);

export default router;
