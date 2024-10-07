import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK)
import { buffer } from 'micro'

const endpointSecret = process.env.STRIPE_EPS

export default async function handler(req, res) {
    await mongooseConnect()

    const sig = req.headers['stripe-signature']

    let event
    try {
        event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret)
    } catch (err) {
        res.status(400).send('webhook Error: ' + err.message)
    }

    switch (event.type) {
        case 'checkout.session.completed':
            const data = event.data.object
            const orderId = data.metadata.orderId
            const paid = data.payment_status === 'paid'
            if(orderId && paid) {
                await Order.findByIdAndUpdate(orderId,{
                    paid: true,
                })
            }
            break;
        default:
            break;
    }

    res.status(200).send('ok')
}

export const config = {
    api: { bodyParser: false }
}
