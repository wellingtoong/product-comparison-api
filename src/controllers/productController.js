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
        
    }
};

export const getProductById = async (req, res, next) => {};

export const getProductsForComparison = async (req, res, next) => {};