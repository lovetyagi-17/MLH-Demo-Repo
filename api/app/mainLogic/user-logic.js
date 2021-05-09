const User = require('../models/user');
const cryptography = require('../helpers/cryptography');


// function updateUser(checkEmail, updateData) {
//     return new Promise((resolve, reject) => {
//         User.updateOne({email : checkEmail }, updateData, {new:true},(err,info)=> {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(info.n ? updateData : null);
//         });
//     });
// }

/// ------- Register -------- //
function addUser(user) {
    user.password = cryptography.hash(user.password);
    return user.save();
}

function getAllUsers() {
    return User.find({}).exec();
}

function checkEmail(email) {
    return User.find({ email }).exec();
}

function checkId(id) {
    return User.find({ id }).exec();
}

/// ------- Login -------- //
function login(details) {
    details.password = cryptography.hash(details.password);
    return User.find({ email: details.email, password: details.password });
}

module.exports = {
    addUser,
    checkEmail,
    // updateUser,
    checkId,
    login,
    getAllUsers,
}
