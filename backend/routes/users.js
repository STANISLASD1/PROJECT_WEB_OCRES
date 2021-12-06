
//var express = require('express');
//var router = express.Router();

const router = require('express').Router();
const authController= require('../controllers/auth.controller'); 
router.post("/resgister", authController.signUp);
module.exports= router;

/* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//);

//module.exports = router;
