const  productModel = require("./models/products.model");

module.exports = class productManagerModel {  
    constructor() {
        this.model = productModel
    }

    // async readProducts(){
    //     const products = await this.model.find()
    //     return (products)

    // }

    async getProducts() {

        const products = await this.model.find()
        return (products);

    }

    async getProductById(pid) {
        const productId = await this.model.findById({ _id: pid })
  
        if (!productId) return `Prducto no encontrado,`

        return productId
    }


    async addProduct(newProduct){
        
        let {
            name,
            model,
            price,
            img,
            code,
            idcategory,
            stock,
        } = newProduct

        if (!name || !model || !price || !img || !code || !idcategory || !stock) return `Ingrese todos los Campos`

        const product = await this.model.create(newProduct)

        return product

    }

    async updateProduct(pid, product) {
        await this.model.deleteProductById(pid)
        const productDelete = await this.model.findById(pid)
        const productUpdate = await this.model.updateOne({ _id: pid, productDelete })
        return productUpdate
    }

    async deleteProduct() {
        const removeProduc = await this.model.deleteProduct({ _id: pid })
        return removeProduc


    }
}

