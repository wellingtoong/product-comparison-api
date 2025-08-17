import { readProductsData } from "../utils/dataReader.js"

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await readProductsData();
        
        res.status(200).json({
            success: true,
            message: 'Produtos recuperados com sucesso',
            data: products,
            total: products.length,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Erro ao buscar produtos');
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await readProductsData();
        
        const product = products.find(p => p.id === id);
        
        if (!product) {
        console.error(`Produto com ID '${id}' não encontrado`);
        }
        
        res.status(200).json({
            success: true,
            message: 'Produto encontrado com sucesso',
            data: product,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Erro ao buscar produto');
    }
};

export const getProductsForComparison = async (req, res, next) => {};