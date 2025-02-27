require("dotenv").config();
const mongoose = require("mongoose");


let templateIds=[];

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex: true }).catch(err => console.log(err));

let Templates = require("./code/databases/certifications/templates.js");
let Certificates = require("./code/databases/certifications/certificates.js");

async function insertTemplates(){
	for (var i = 0; i < 10; i++) {
		try{
			let a = new Templates({name:"name"+i,description:"description",logo:"logo",color:"#3453554"});
			await a.save();
			templateIds.push(a._id);
		}
		catch(err)
		{
			console.log("crash at" + i);
			console.log(err);
		}
	}
} 


async function insertCertificates(){
	for (var i = 0; i < templateIds.length; i++) {
		try{
			let a = new Certificates({template:templateIds[i],name:"someting"});
			await a.save();
		}
		catch(err)
		{
			console.log("crash at" + i);
			console.log(err);
		}
	}
} 


async function main(){
	await insertTemplates();
	if(templateIds.length==10)
	{
		await insertCertificates();
	}
	console.log("done");
}

main();
