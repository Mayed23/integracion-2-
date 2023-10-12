const { Router } = require(`express`)
const cartsManagerMongo  = require(`../Dao/Mongo/cartsManager.js`)


const cartRouter = Router()
const car = new cartsManagerMongo()


cartRouter.post("/", async (req,res) => {
    const cartNew = req.body
    try{
        const carts = await car.addCart(cartNew)

        res.status(200).json(carts)
    }catch(error){
        console.log(error)
    }
})    

cartRouter.get("/", async (req, res)=>{
    try{
        const carts = await car.getCart()
        return carts
    } catch(error){
        console.log(error)
    }
})

cartRouter.get("/:_id", async (req, res)=>{
    let _id = req.params.id
    try{
        const cart = await car.getCartById(_id)
        return cart
        
    }catch(error){
        console.log(error)
    }
})   


cartRouter.post("/cid/products/pid", async (req, res)=>{
    let cartsId = req.params.cid
    let prodId = req.params.pid
    try{
        const addCart = await car.addToCarts({cartsId, prodId})
        return addCart
    }catch (error){
        console.log(error)
    }
    
})

module.exports = cartRouter