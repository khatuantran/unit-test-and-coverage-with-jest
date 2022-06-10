const express = require('express');
const router = express.Router();
const db = require('../models/index')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Account = require('../models/account')(db.sequelize)
const Owner = require('../models/storeOwner')(db.sequelize)
function isValidFormatData(username, password, email){
    // console.log(username, password, email)
    const patternUsername = /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
    const patternPassword = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/
    const patternEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    // console.log(patternUsername.test(username),  patternPassword.test(password), patternEmail.test(email))
    return patternUsername.test(username) && patternPassword.test(password) && patternEmail.test(email)
}

router.post('/sign_up', async function(req, res){
    console.log('Type of user: ', req.query.type)
    switch(req.query.type){
        case 'owner':{
            if(!isValidFormatData(req.body.username, req.body.password, req.body.email)){
                return res.json({
                    type:'error',
                    message: 'Invalid data input',
                })
            }
            const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);
            console.log(hashPassword)
            const newAccount = {
                username: req.body.username,
                password: hashPassword,
                state: 'non-activated',
                type:'owner',
            }
            try {
                const account = await Account.create(newAccount)
                const owner = await Owner.create({
                    name: req.body.name,
                    email: req.body.email,
                    accountId: account.accountId,
                })
                res.json({
                    type:'success',
                    account
                })
            } catch (err) { 
                console.log(err.detail)
                res.json({
                    type:'error',
                    message: err.original.detail
                })
            }
            
            break;
        }
        case 'freelancer':{
            //not yet implemented
            break
        }
        default: {
            res.json({
                type:'error',
                message: 'inccorect type'
            })
            break;
        }
    }
    
})
module.exports = router;