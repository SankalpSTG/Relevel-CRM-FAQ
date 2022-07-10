require('dotenv').config()
var jwt = require('jsonwebtoken')
var errorActions = require('./../misc/erroractions')
var bcrypt = require("bcrypt")

async function authenticate(req, res, nex){
    const authheader = req.headers['authorization']
    const token = authheader && authheader.split(' ')[1]
    if(!token){
        return res.status(401).send(errorActions.failedToAuthenticate)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if(err) return res.status(403).send(errorActions.failedToAuthenticate)
        //Here you can validate your user data extracted from token.
        req.body.userId = user.serial_id
        req.body.userType = user.user_type
        nex()        
    })
}
module.exports = {
    authenticate: authenticate
}