const express = require('express');
const ProductData = require('./src/model/productdata');
const Userdata = require('./src/model/register');
const cors = require('cors');
// const jwt = require('jsonwebtoken');

var bodyparser = require('body-parser');

var app = new express();


app.use(cors());
// app.use(jwt());
app.use(bodyparser.json());
app.get('/products',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    ProductData.find()
    .then(product=>{
        res.send(product);
    });
});
app.post('/insert',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
    }
    var product = new ProductData(product);
    product.save();

}); 


app.post('/reg',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var users = {
        name : req.body.users.name,
        place : req.body.users.place,
        phone : req.body.users.phone,
        email : req.body.users.email,
        password : req.body.users.password
        
    }
    var users = new Userdata(users);
    users.save();

}); 


app.post('/delete',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var id = req.body.id;
    console.log(id + "id get");
    ProductData.deleteOne({_id : id})
    .then(products=>{
        console.log(products);
        res.send(products);
    });
});


app.get('/edit/:id', function(req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log(id + "id current");
    ProductData.findOne({ _id: id })
        .then(function(products) {
            console.log(products);
            res.send(products);
        });
});

app.put('/update/:id', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log(id + "id is updated");
    console.log(req.body);
    var product = {
        productId: req.body.productId,
        productName: req.body.productName,
        productCode: req.body.productCode,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        price: req.body.price,
        starRating: req.body.starRating,
        imageUrl: req.body.imageUrl
    }
    
    console.log(product);
    // var product = new ProductData(product);
    // product.save();
    ProductData.findOneAndUpdate({_id:id},{'$set':{productId:product.productId, productName:product.productName,
        productCode:product.productCode, releaseDate:product.releaseDate, description:product.description,
        price:product.price, starRating:product.starRating, imageUrl:product.imageUrl}})
    .then((item)=>{
        item.save();
        console.log("Update Success");
    })
    

});

app.listen(3000, function(){
    console.log("Port running good");
})