const { json } = require('express');
var express = require('express');
var router = express.Router();
var multer = require('multer');

const Post = require('../models/user.model.js');

// stockage en local de la photo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/');
  },
  filename: function (req, file, cb) {
      const fileName = file.originalname.toLowerCase();
      cb(null, fileName)
  }
});

/* POST nouvelle photo */
const createUser = async (req, res) => {
  const post = new Post({
    name: req.body.name,
    picture: url + '/public/' + req.file.filename
  });

  post.save().then(result => {
    res.status(201).json({
        message: "Photo enregistrée avec succès!",
        userCreated: {
            _id: result._id,
            picture: result.picture
        }
    })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
}
router.post('/',upload.single('picture'), createUser);

/* GET toutes les photos */
const getUsers = async (req, res) => {
  const list = await Post.find();
  res.json(list);
}
router.get('/', getUsers);

/* Get une photo par id */
const researchUser = async (req, res) => {
  const research = await Post.findById(req.params.id);
  res.json(research);
}
router.get('/:id', researchUser);


/* DELETE photo par id */
const deleteUser = async (req, res) => {
  const suppr = await Post.remove({_id: req.params.id});
  res.json(suppr);
}
router.delete('/:id', deleteUser);


/* UPDATE name:photos par id */
const updateUser = async (req, res) => {  
  const update = await Post.updateOne(
    { _id: req.params.id },
    { $set: { 
        name: req.body.name
      } 
    }
  );
  res.json(update);
}
router.patch('/:id', updateUser);


module.exports = router;