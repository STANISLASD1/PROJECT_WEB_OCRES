
//var express = require('express');
//var router = express.Router();

const router = require('express').Router();

const multer = require('multer');
const upload = multer();

//upload
const uploadController = require('../controllers/upload.controller');
router.post("/upload", upload.single('recfile'), uploadController.uploadProfil);

module.exports = router;






/* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//);

//module.exports = router;
