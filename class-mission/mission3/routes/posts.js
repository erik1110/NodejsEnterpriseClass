var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
// const handleSuccess = require('../services/handleSuccess');
// const handleError = require('../services/handleError');
const PostsController = require('../controllers/posts');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', PostsController.getPosts);
router.post('/', PostsController.createPosts);
router.delete('/:id', PostsController.deleteOnePosts);
router.put('/:id', PostsController.updateOnePosts);
  
module.exports = router;