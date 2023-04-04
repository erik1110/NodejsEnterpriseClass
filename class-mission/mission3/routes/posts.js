var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Post = require('../models/post')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async function(req, res, next) {
    const posts = await Post.find();
    res.status(200).json({
      data: posts
    })
});

router.post('/', async function(req, res, next) {
  console.log(req.body)
  const newPost = await Post.create({
    name: req.body.name,
    content: req.body.content
  });
  res.status(200).json({
    status: 'success',
    data: newPost
  })
});

router.delete('/:id', async function(req, res){
  const _id = req.params.id;
  console.log(_id);
  const result = await Post.findByIdAndDelete(_id);
  if (result) {
    res.status(200).json({
      status: 'success'
    })
  } else {
    res.status(400).json({
      status: 'error',
      message: `${_id}不存在`
    })
  }

router.put('/:id', async function(req, res) {
  const _id = req.params.id;
  console.log(_id);
  const update = {
    name: req.body.name,
    content: req.body.content
  };
  const result = await Post.findByIdAndUpdate(_id, update, { new: true });
  if (result) {
    res.status(200).json({
      status: 'success',
      data: result
    })
  } else {
    res.status(400).json({
      status: 'error',
      message: `${_id}不存在`
    })
  }
});
  


});
module.exports = router;