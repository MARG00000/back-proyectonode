const router = require('express').Router()
const user = require('../models/User')
router.post('/register', async(req ,res) =>{
    const user = new user({
        name: req.body.name,
        address: req.body.address,
        lastname:req.body.lastname,
        age: req.body.age,
        password: req.body.password

    })
    try {
        const saveUser = await user.save()
        res.json({
            error: null,
            data: 'saveUser'
        })

    } catch (error) {
        res.status(400).json({error})
        
    }
    
})

module.exports = router