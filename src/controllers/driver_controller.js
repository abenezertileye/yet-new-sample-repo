const Driver = require('../models/driver')
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
        const driver = await Driver.create({first_name,last_name, email, password})
        const token = createToken(driver._id)
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
        const driver = await Driver.login(email, password)
        const token = createToken(driver._id)
        const theDriver = await Driver.findById(driver._id);
        res.send(
            {first_name:theDriver.first_name,
                last_name: theDriver.last_name,
            email:email,
            token:token,}
        )
        
    }catch(err){
        res.send(err.message)
    }
}