const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
var firebase = require('firebase-admin');
// const firebase = require('https://www.gstatic.com/firebasejs/7.14.1/firebase.js')

const instance =new Razorpay({
    key_id: 'rzp_test_U4Srz1wTBLqlBL',
    key_secret:'06mcVBgQLebeFrPALpVNi3pY'
});
const firebaseConfig = {
    apiKey: "AIzaSyCk2y1X6n-D0q7wvMkWpw3CrsBbd0rqT4g",
    authDomain: "bubbly-hope-386107.firebaseapp.com",
    projectId: "bubbly-hope-386107",
    storageBucket: "bubbly-hope-386107.appspot.com",
    messagingSenderId: "678578659104",
    appId: "1:678578659104:web:33114c8b6bd87e66d20145",
    measurementId: "G-YBTYCBMFSQ"
};
      // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

router.get('/', (req, res) => {
    var options = {
        amount: 1000000,
        currency: 'INR',
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            console.log(err);
        } else {
            console.log(order);
            res.render('checkout', {amount: order.amount, order_id: order.id});
        }
    });
});
 

router.post('/pay-verify',(req,res) => {
    console.log(req.body);
    body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', '06mcVBgQLebeFrPALpVNi3pY')
                                    .update(body.toString())
                                    .digest('hex');
                                    console.log("sig"+req.body.razorpay_signature);
                                    console.log("sig"+expectedSignature);
    
    if(expectedSignature === req.body.razorpay_signature){
      console.log("Payment Success");
    }else{
      console.log("Payment Fail");
    }
  })

module.exports = router;