const cartsModel  =  require(`./models/carts.model.js`) 
const  productModel  = require(`./models/products.model.js`) 


 //const prd = productManagerMongo()

module.exports = class cartsManagerMongo {
    constructor(){
        this.model= cartsModel
    }

    async getCart () {
        const carts = await this.model.find()
        return []
    }

    async addCart () {
        const cartNew = {
            products: []
    } 
    const cart =  await this.model.create(cartNew)
    return (cart)
    }
   

    // exist = async (id)=>{
    //     let carts = await this.model.fin()
    //     return carts.find(cart => cart.id === id)
    // }

    async getCartById(id){
        const cartId = await this.model.findById({_id: id})
        if(!cartId) return `Carro de compra no existe`
        return cartId
    }
    async addToCarts(cartId, prodId){
        let cartsId = await this.model.findById(cartId)
        if (!cartsId) return "Carrito no encontrado"   
        let prodpId = await this.prd.findById(prodId)
        if (!prodpId) return "Producto no encontrado" 
        let cartsAll = await this.model.find()
        let cartsFilter = cartsAll.filter(cart => cart.id != cartId)

        if(cartsId.products.some(prod => prod.id === prodId)){
         let prodInCart = cartId.products.find (prod => prod.id === prodId)
         prodInCart.cantidad+1
            let cartNew = [prodInCart, ...cartsFilter] 
            await this.model.create(cartNew)
            return cartNew
        }
        cartId.products.push({id:prodId.id, cantidad:1})

        let cartsNew = [cartId, ...cartsFilter]

        await this.model.create (cartsNew)
        return cartsNew

    }

    async deleteCarts(_id){

        const removeCarts = await this.model.deleteCarts({_id: id})
        return removeCarts

    }
}    

