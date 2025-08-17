import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_FILE_PATH = path.join(__dirname, '../../data/products.json');

export const readProductsData = async () => {
  try {

    await fs.access(PRODUCTS_FILE_PATH);
    const fileContent = await fs.readFile(PRODUCTS_FILE_PATH, 'utf-8');
    
    const products = JSON.parse(fileContent);
    
    if (!Array.isArray(products)) {
      throw new Error('Dados dos produtos devem ser um array');
    }
    
    return products;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Arquivo de dados dos produtos não encontrado');
    }
    
    if (error instanceof SyntaxError) {
      throw new Error('Formato JSON inválido no arquivo de produtos');
    }
    
    throw error;
  }
};
