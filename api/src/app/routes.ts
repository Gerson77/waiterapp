import { Router } from 'express';
import { listCategories } from './useCases/categories/listCategories';
import { createCategories } from './useCases/categories/createCategories';
import { listProducts } from './useCases/products/listProducts';
import { createProducts } from './useCases/products/createProducts';
import multer from 'multer';
import path from 'node:path';
import { listProductsByCategory } from './useCases/categories/listProductsByCategory';
import { listOrders } from './useCases/Orders/listOrders';
import { createOrder } from './useCases/Orders/createOrder';
import { changeOrderStatus } from './useCases/Orders/changeOrderStatus';
import { cancelOrder } from './useCases/Orders/cancelOrder';
import { deleteProduct } from './useCases/products/deleteProduct';

export const router = Router();

const uploads = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// List Categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategories);

// list products
router.get('/products', listProducts);

// Create product
router.post('/products', uploads.single('image'), createProducts);

// delete product
router.delete('/products/:productId', deleteProduct);

// get products by category
router.get('/categories/:categoryId/products',listProductsByCategory);

// list orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
