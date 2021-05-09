const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const productsLogic = require('../mainLogic/products-logic');
const fs = require('fs');
const uuid = require('uuid');

router.post('/add-product', async (request, response) => {
    try {
       
        const product = new Product(request.body);
        const addedProduct = await productsLogic.addProduct(product);
        response.json({product : addedProduct});
    } catch (error) {
        response.status(500).send(error.message);
    }
});


router.get('/get-all-products', async (request, response) => {
    try {
        const products = await productsLogic.getAllProducts();
        response.json(products);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get('/get-one-product/:_id', async (request, response) => {
    try {
        const _id = request.params._id;
        const products = await productsLogic.getOneProduct(_id);
        response.json(products);
    } catch (error) {
        response.status(500).send(error);
    }
});

// router.get('/image/:name', async (request, response) => {
//     try {
//         const name = request.params.name;
//         fs.readFile('./uploads/products/' + name,(err,data)=> {
//             if(err){
//                 throw err;
//             }
//             response.end(data);
//         });
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

// router.delete('/remove-product/:_id', async (request, response) => {
//     try {
//         const _id = request.params._id;
//         await productsLogic.deleteProduct(_id);
//         response.status(204).json({message: "Product Deleted Successfully"});
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

module.exports = router;