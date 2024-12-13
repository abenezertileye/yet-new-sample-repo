const Helper = require('../models/helper')
const jwt = require('jsonwebtoken')

//create token
let MaxAge = 3*24*60*60
function createToken(id){
    return jwt.sign({id}, 'osjcosj56as', {expiresIn:MaxAge})
}

//signup
exports.signup = async(req, res) => {
    const {first_name, last_name, email, password} = req.body
    try{
        const helper = await Helper.create({first_name,last_name, email, password})
        const token = createToken(helper._id)
        res.send(
            {first_name:first_name,
            last_name: last_name,
            email:email,
            token:token,}
        )
    }catch(err){
        console.log(err.message)
    }
}

//login
exports.login = async function(req, res){
    const {email, password} = req.body
    try{
        const helper = await Helper.login(email, password)
        const token = createToken(helper._id)
        const theHelper = await Helper.findById(helper._id);
        res.send(
            {first_name:theHelper.first_name,
                last_name: theHelper.last_name,
            email:email,
            token:token,}
        )
        
    }catch(err){
        res.send(err.message)
    }
}