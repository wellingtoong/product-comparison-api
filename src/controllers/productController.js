import { readProductsData } from '../utils/dataReader.js';
import { createError } from '../middleware/errorHandler.js';

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
        next(createError(500, 'Erro ao buscar produtos'));
    }
};

export const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await readProductsData();

        const product = products.find(p => p.id === id);

        if (!product) {
            return next(createError(404, `Produto com ID '${id}' não encontrado`));
        }

        res.status(200).json({
            success: true,
            message: 'Produto encontrado com sucesso',
            data: product,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        next(createError(500, 'Erro ao buscar produto'));
    }
};

export const getProductsForComparison = async (req, res, next) => {
    try {
        const products = await readProductsData();

        const comparisonData = products.map(product => ({
            id: product.id,
            nome: product.nome,
            preco: product.preco,
            classificacao: product.classificacao,
            urlImagem: product.urlImagem,
            resumo: product.descricao.substring(0, 100) + '...',
            especificacoesPrincipais: {
                dimensoes: product.especificacoes?.dimensoes || 'N/A',
                peso: product.especificacoes?.peso || 'N/A',
                cor: product.especificacoes?.cor || 'N/A'
            }
        }));

        res.status(200).json({
            success: true,
            message: 'Dados de comparação recuperados com sucesso',
            data: comparisonData,
            total: comparisonData.length,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        next(createError(500, 'Erro ao buscar dados de comparação'));
    }
};