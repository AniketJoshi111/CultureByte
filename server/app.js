
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const { connectToDB } = require("./lib/utils");


const stripe = require("stripe")(process.env.Stripe_Key);   // stripe integration


app.use(express.json());
app.use(cors());


//route for payment api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;
    
    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.dish,
                images:[product.imgdata]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity || 1, 
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({id:session.id})
 
})


app.listen(4000,()=>{
    console.log("server  started at 4000")
})