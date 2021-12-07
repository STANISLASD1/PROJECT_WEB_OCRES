const { json } = require('express');
var express = require('express');
var router = express.Router();

const Post = require('../models/user.model.js');

/* POST nouvelle photo */
const createUser = async (req, res) => {
  const post = new Post({
    name: req.body.name,
    picture: req.body.picture
  });

  const create = await post.save();
  res.json(create);
}
router.post('/', createUser);

//################################################################################################

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