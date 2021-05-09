const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userLogic = require('../mainLogic/user-logic');
const jwt = require("jsonwebtoken");
const jwtLogic = require('../helpers/jwt');
var nodemailer = require('nodemailer');


router.post('/user-register', async (request, response) => {
    try {
        const user = new User(request.body);
        //check if user & email exists
        const checkEmail = await userLogic.checkEmail(user.email);
        const checkId = await userLogic.checkId(user.id);
        if (checkEmail.length !== 0) { throw "Email already exists" }
        if (checkId.length !== 0) { throw "ID already exists" }
        /// --------------------
        //Send Mail On Registration
        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'lovetyagi17061998@gmail.com',
                pass: 'Lovetyagi@123'
            }
        });

        var mailOptions = {
            from: 'lovetyagi17061998@gmail.com',
            to: user.email ,
            subject: "Successfull Registration!",
            html: `Welcome ${user.firstName} To Enigma.<br/> Thank you for registration.<br/>
                  <br/><p>Admin: Love Tyagi</p>`,
        };

        transport.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            } else {
                console.log("Email has been sent successfully");
            }
        })
        const newUser = await userLogic.addUser(user);
        newUser.password = null;
        //save jwt token
        const jwtToken = jwt.sign({ user: newUser }, 'secretkey');
        response.json({ user: newUser, jwtToken });
    } catch (error) {
        response.status(500).send(error);
    }
});


router.post('/user-login', async (request, response) => {
    try {
        const details = request.body;
        const getUser = await userLogic.login(details);
        if (getUser.length === 0) {
            response.json('Wrong email / password');
            return;
        }
        const user = getUser[0];
        const jwtToken = jwt.sign({ user }, 'secretkey');
        response.json({ user, jwtToken });
    } catch (error) {
        response.status(500).send(error.message);
    }
});

// router.put('/update-password', async (request, response) => {

//     try {
//         console.log("Hi");
//         const user = new User(request.body);
//         const checkEmail = await userLogic.checkEmail(user.email);
//         if (!checkEmail) { throw "Email doen't exists" }
//         else{
//             console.log(user);
//             var updateUser = await userLogic.updateUser(user);
//             if (updateUser === null) { response.sendStatus(404); return; }
//             response.status(200).json({message : "User Updated Successfully"});
//         }
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });


router.get('/auto-login', jwtLogic.verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json(err);
        } else {
            res.json(authData);
        }
    });
});

// Get all UsersList
router.get('/get-all-users', async (request, response) => {
    try {
        const users = await userLogic.getAllUsers();
        response.json(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;