const express = require('express');
const router = express.Router();
const db = require('../models/index')
// const StoreOwner = require('../models/storeOwner')(db.sequelize)
const Store = require('../models/store')(db.sequelize)
// const Account = require('../models/account')(db.sequelize)
 

router.post('/create', async function (req, res) {
    if(req.body.name == null || req.body.phoneNumber == null || req.body.address == null){
        return res.status(400).json({
            type: 'error',
            message: 'Invalid input data'
        })
    }    
    
    try{
        const store = await Store.create({
            ownerId: 9999,
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
        })
        res.status(200).json({
            type: 'success',
            store
        })
    } catch (err) {
        res.status(500).json({
            type: 'error',
            message: 'Database query error'
        })
    }
})

router.get('/', async function (req, res) {
    try{
        const storeList = await Store.findAll({
            where: {
                ownerId: 9999
            }
        })
        res.status(200).json({
            type: 'success',
            storeList
        })
    } catch (err){
        res.status(500).json({
            type: 'error',
            message: 'Database query error'
        })
    }
})
module.exports = router;
