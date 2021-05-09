const Cart = require('../models/cart');
const CartDetail = require('../models/cart-detail');

function createCart(cart) {
    return cart.save();
}

function addProduct(product) {
    return product.save();
}

function checkIfProductExistsInCart(product) {
    return CartDetail.findOne({ cartId: product.cartId, productId: product.productId });
}

function checkIfUserExistsInCart(userID) {
    return Cart.findOne({ userId: userID });
}

function checkIfCartExists(cartID) {
    return CartDetail.findOne({ cartId: cartID });
}

function updateProduct(product) {
    return new Promise((resolve, reject) => {
        CartDetail.updateOne({ _id: product._id }, product, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(info.n ? product : null);
        });
    });
}

function addProductToCart(body) {
    return new Promise((resolve, reject) => {
        CartDetail.findOneAndUpdate({ cartId: body.cartId }, { $push: { products: body.products } }, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(info);
        });
    });
}


function getAllProductsOfCart(cartId) {
    return CartDetail.find({ cartId: cartId }).exec();
}

function deleteProductFromCart(_id) {
    return CartDetail.deleteOne({ _id });
}

function clearCart(cartId) {
    // console.log("logic: ", cartId);
    return CartDetail.deleteMany({cartId : cartId});
}



module.exports = {
    createCart,
    addProduct,
    checkIfProductExistsInCart,
    checkIfUserExistsInCart,
    addProductToCart,
    checkIfCartExists,
    updateProduct,
    getAllProductsOfCart,
    deleteProductFromCart,
    clearCart,
}