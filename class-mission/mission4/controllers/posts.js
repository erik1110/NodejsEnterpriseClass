const handleSuccess = require('../services/handleSuccess');
const handleError = require('../services/handleError');
const Post = require('../models/posts');

const posts = {
    async getPosts(req, res){
        const myPost = await Post.find();
        handleSuccess(res, myPost);
    },
    async createPosts(req, res){
        try {
            const data = req.body;
            if (data.content) {
                const newPost = await Post.create({
                name: req.body.name,
                content: req.body.content
                });
                handleSuccess(res, newPost);
            } else {
                handleError(res);
            }
        } catch(err){
            handleError(res, err);
        }
    },
    async deleteOnePosts(req, res){
        try {
            const _id = req.params.id;
            const data = req.body;
            if (data.content) {
                const result = await Post.findByIdAndDelete(_id);
                if (result) {
                    handleSuccess(res, result);
                } else {
                    handleError(res);
                }
            } else {
                handleError(res);
            }
        } catch(err){
            handleError(res, err);
        }
    },
    async updateOnePosts(req, res){
        try {
            const _id = req.params.id;
            const data = req.body;
            if (data.content) {
                const update = {
                    name: req.body.name,
                    content: req.body.content
                  };
                const result = await Post.findByIdAndUpdate(_id, update, { new: true });
                if (result) {
                    handleSuccess(res, result);
                } else {
                    handleError(res);
                }
            } else {
                handleError(res);
            }
        } catch(err){
            handleError(res, err);
        }
    },
}
module.exports = posts;