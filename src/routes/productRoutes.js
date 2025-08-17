import express from 'express';
import { 
  getAllProducts,
  getProductById,
  getProductsForComparison
} from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.get('/products/compare', getProductsForComparison);

export default router;