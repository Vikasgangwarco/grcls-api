// const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex: true }).catch(err => console.log(err));



const Products = require("./code/databases/market/products.js");


async function insertFakeProducts(){
	let i=0;
	try{
		console.log("first loop");
		while(i<10){
			let p = new Products({name:""+i*2,price:i*10,product_type:"physical",});
			await p.save();
			i++;
		}
		console.log("2nd loop");
		i=0;
		
		console.log("3rd loop");
		i=0;
		while(i<10){
			let p = new Products({name:""+i*4,price:i*13,product_type:"digital",});
			await p.save();
			i++;
		}

		console.log("done");
		process.exit();

	}
	catch(err)
	{
		console.log(err.message);
	}
	
};

setTimeout(insertFakeProducts,5000);
