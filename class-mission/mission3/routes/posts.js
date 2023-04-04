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
  const newPost = await Post.create(req.body);
  res.status(200).json({
    status: "success",
    data: newPost
  })
});
  
module.exports = router;