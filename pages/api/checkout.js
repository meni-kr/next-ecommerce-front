import { mongooseConnect } from "@/lib/mongoose"
import { Product } from "@/models/Product"


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.json('Error: Not allowed')
        return
    }
    const {
        name, email, city,
        postalCode, streetAddress, country,
        products,
    } = req.body
    await mongooseConnect()
    const productsId = products.split(',')
    const uniqueId = [...new Set(productsId)]
    const productsInfos = await Product.find({ _id: uniqueId })

    let line_items = []
    for (const productId of uniqueId) {
        const productInfo = productsInfos.find(p => p._id.toString() === productId)
        const quantity = productsId.filter(id => id === productId)?.length || 0
        if (quantity > 0 && productInfo) {
            line_items.push({
                quantity,
                price_data:{
                    currency:'USD',
                    product_data:{name:productInfo.title},
                    unit_amount:quantity * productInfo.price
                }
            })
        }
    }

    res.json({line_items})

}