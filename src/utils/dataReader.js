import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtém o diretório atual do módulo ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para o arquivo de dados dos produtos
const PRODUCTS_FILE_PATH = path.join(__dirname, '../../data/products.json');

/**
 * Lê os dados dos produtos do arquivo JSON
 * @returns {Promise<Array>} Array com os dados dos produtos
 */
export const readProductsData = async () => {
  try {
    // Verifica se o arquivo existe
    await fs.access(PRODUCTS_FILE_PATH);

    // Lê o conteúdo do arquivo
    const fileContent = await fs.readFile(PRODUCTS_FILE_PATH, 'utf-8');

    // Parse do JSON
    const products = JSON.parse(fileContent);

    // Validação básica dos dados
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

/**
 * Valida a estrutura de um produto
 * @param {Object} product - Objeto do produto a ser validado
 * @returns {boolean} True se válido, false caso contrário
 */
export const validateProductStructure = (product) => {
  const requiredFields = ['id', 'nome', 'urlImagem', 'descricao', 'preco', 'classificacao'];

  return requiredFields.every((field) => {
    return product.hasOwnProperty(field) && product[field] !== null && product[field] !== undefined;
  });
};
