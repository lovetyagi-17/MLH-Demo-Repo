const express = require('express');
const router = express.Router();
const shoppingLogic = require('../mainLogic/shopping-logic');
const Cart = require('../models/cart');
const CartDetail = require('../models/cart-detail');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/create-cart', async (request, response) => {
    try {
        // console.log("worki", request.body.userId);
        const checkId = await shoppingLogic.checkIfUserExistsInCart(request.body.userId);
        if(checkId){
            // console.log("checkId", checkId);
            return response.json({message: 'Cart is already Existing'})
        }
        var cart = new Cart(request.body);
        cart.date = new Date();
        cart.userId = request.body.userId;
        let myCart = await shoppingLogic.createCart(cart);
        response.json(myCart);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post('/add-product', async (request, response) => {
    try {
        let data = request.body;
        // console.log("data: ", request.body);
        const userData = await shoppingLogic.checkIfUserExistsInCart(request.body.userId);
        if(userData){
            let cartData = await shoppingLogic.checkIfCartExists(userData._id);
            // console.log(cartData);
            if(cartData){
                // data.cartId = userData._id;
                // console.log("hima------->>>>: ", data);
                let productArray = {
                    cartId: ObjectId(userData._id),
                    products: {
                        productId: data.productId,
                        quantity: data.quantity,
                        price: data.price,
                        name: data.name
                    }
                }
                // console.log("Araay: ", productArray);
                let result = await shoppingLogic.addProductToCart(productArray);
                return response.json(result);
            }
            var cartDetails = new CartDetail();
            cartDetails.cartId = userData._id;
            cartDetails.products = data
            cartDetails.save((err, result) => {
                // console.log("else:  ", result);
                return response.json(result);
            });
        }
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get('/get-all-products/:cartId', async (request, response) => {
    try {
        let cartId = request.params.cartId;
        let products = await shoppingLogic.getAllProductsOfCart(cartId);
        return response.json({ status: "Success", code: 200, data: products });
    } catch (error) {
        response.status(500).send(error);
    }
});

router.delete('/clear-cart/:id', async (request, response) => {
    try{
        // console.log("Cart Cler Successfully: ", request.params.id);
        let cartId = request.params.id;
        let remainedData = await shoppingLogic.clearCart(cartId);
        response.json(remainedData);
    } catch(error){
        response.status(500).send(error.message);
    }
});


router.delete('/remove-product/:_id', async (request, response) => {
    try {
        const _id = request.params._id;
        await shoppingLogic.deleteProductFromCart(_id);
        response.sendStatus(204);
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = router;