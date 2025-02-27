//                                                                                
//  ▄▄▄   ▄▄                                                ▄▄  ▄▄▄▄▄▄▄▄    ▄▄▄    
//  ███   ██                                                ██  ▀▀▀▀▀███   █▀██    
//  ██▀█  ██   ▄████▄    ▄████▄   ██▄████▄   ▄████▄    ▄███▄██      ▄██      ██    
//  ██ ██ ██  ██▄▄▄▄██  ██▀  ▀██  ██▀   ██  ██▄▄▄▄██  ██▀  ▀██      ██       ██    
//  ██  █▄██  ██▀▀▀▀▀▀  ██    ██  ██    ██  ██▀▀▀▀▀▀  ██    ██     ██        ██    
//  ██   ███  ▀██▄▄▄▄█  ▀██▄▄██▀  ██    ██  ▀██▄▄▄▄█  ▀██▄▄███    ██      ▄▄▄██▄▄▄ 
//  ▀▀   ▀▀▀    ▀▀▀▀▀     ▀▀▀▀    ▀▀    ▀▀    ▀▀▀▀▀     ▀▀▀ ▀▀   ▀▀       ▀▀▀▀▀▀▀▀ 
//                                  API Server...
// EMAIL: iamn71@neoned71.com
// WEBSITE: me.neoned71.com

var figlet = require('figlet');


//Thin, Straight Stellar Invita
figlet('Neoned71',font="Stellar", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    // console.log("Email: iamn71@neoned71.com");

});

figlet('API Server',font="Thin", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    console.log("Email: iamn71@neoned71.com");

});

const session = require("express-session");
const fs= require("fs");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const multer = require("multer");
var upload = multer();
var cors = require('cors');



// var passportSocketio=require("passport.socketio");


var express = require('express');
var cookieParser=require("cookie-parser");
const uuid = require('uuid');
const url = require('url');
var app = express();
const http = require('http');
const https = require('https');
var bodyParser = require("body-parser");
var base64js = require('base64-js');


const passport = require("./passport/setup_otp");


require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useUnifiedTopology: true,useNewUrlParser: true}).catch(err => console.log(err));

//app.use(cors());
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));


// app.use(upload.array());
var port=process.env.SERVER_PORT;
//session keys and secrets
var sessionKey=process.env.SESSION_KEY;
var sessionSecret=process.env.SESSION_SECRET;


var port=process.env.SERVER_PORT;

var sessionStore=new MongoStore({ mongooseConnection: mongoose.connection });

var sessionMiddleWare=session({
        key:sessionKey,
        secret: sessionSecret,
        resave: false,
        saveUninitialized: true,
        store: sessionStore
    });


const Events=require("./code/databases/events/events.js");

async function test(){
    try{
        await Events.removePhase("631cef94dd35f0414ee5335c","631cf0fa725fa5e56a864021");
        console.log("done");

    }
    catch(err)
    {
        console.log(err.message);
    }
}

test();


