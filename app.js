const express = require('express');
const path = require('path');

// const authRouter = require('./router/authRouter');
const storeOwnerRouter = require('./router/manageStore');
const app = express();


//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/auth', authRouter)

//assump owner is authenticated
app.use('/store_owner/manage_store' /*authentication middleware*/ ,  storeOwnerRouter)
module.exports = app;
