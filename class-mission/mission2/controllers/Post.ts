import { Post, PostSchema } from '../models/Post'
import { MyPost } from '../interfaces'
import { successHandler } from '../services/successHandler'
import { errorHandler } from '../services/errorHandler'
import { ServerResponse } from 'http'

export const PostController = {
  async getAll(res: ServerResponse) {
    try {
      const data = await Post.find()
      successHandler(res, data)
    } catch(e) {
      errorHandler(res, e)
    }
  },
  async create(res: ServerResponse, body: string) {
    try {
    const postData: MyPost = JSON.parse(body)
    console.log('create')
    const data = await Post.create(postData)
        successHandler(res, data)
    } catch(e) {
      console.log(e)
      errorHandler(res, e)
    }
  },
  async update(res: ServerResponse, body: string) {
    try {
      const patchData: MyPost = JSON.parse(body)
      const { _id } = patchData
      console.log(patchData)
      const exist = await Post.find({ _id }).count()
      if (exist) {
        await Post.updateOne({ _id }, { $set: patchData } )
        const newData = await Post.findById(_id) || {}
        successHandler(res, newData)
      } else {
        throw '沒有對應 id 資料'
      } 
    } catch(e) {
      errorHandler(res, e)
    }
  },
  async deleteById(res: ServerResponse, _id: string) {
    try {
      const data = await Post.find({ _id })
      if (data.length) {
        await Post.deleteOne({ _id })
        successHandler(res, data)
      } else {
        throw '沒有對應 id 資料'
      }
    } catch(e) {
    errorHandler(res, e)
  }
  },
  async deleteAll(res: ServerResponse) {
    try {
      await Post.deleteMany({})
      successHandler(res)
    } catch (e) {
      errorHandler(res, e)
    }
  },
  options(res: ServerResponse) {
    successHandler(res)
  }
}