const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const products = [

{
 id:1,
 name:"Camisa Brasil",
 price:199,
 image:"https://images.unsplash.com/photo-1551958219-acbc608c6377"
},

{
 id:2,
 name:"Camisa Barcelona",
 price:249,
 image:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
},

{
 id:3,
 name:"Camisa Real Madrid",
 price:259,
 image:"https://images.unsplash.com/photo-1546519638-68e109498ffc"
},

{
 id:4,
 name:"Camisa Manchester City",
 price:239,
 image:"https://images.unsplash.com/photo-1560272564-c83b66b1ad12"
},

{
 id:5,
 name:"Camisa PSG",
 price:229,
 image:"https://images.unsplash.com/photo-1521417531039-7e2c1c82e2f4"
}

]

app.get("/products",(req,res)=>{

  res.json(products)

})

app.listen(3000,()=>{

  console.log("Server running on port 3000")

})