
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const { connectToDB } = require("./lib/utils");
const stripe = require("stripe")("sk_test_51PgWf2H7zMarlxqXLSceDqmPnLvJMYC1SHcRXllAYPwfJKdlvdTpukBcNFCfFzyuLxm5ewpgQCYYJZ2NTF68Fpyk00hc9wCpqy");


app.use(express.json());
app.use(cors());


// const authenticateJWT = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1];
//     if (!token) return res.sendStatus(403);
// const secret = process.env.SECRET_KEY;
//     jwt.verify(token, secret , (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };
// checkout api
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


// app.post('/register', async (req, res) => {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
//     res.status(201).send('User registered');
// });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//         return res.status(401).send('Invalid credentials');
//     }
//     const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
//     res.status(200).json({ token });
// });

// app.get('/protected', authenticateJWT, (req, res) => {
//     res.send('This is a protected route');
// });


app.listen(4000,()=>{
    console.log("server  started at 4000")
})