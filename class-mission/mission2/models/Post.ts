import { model, Schema} from "mongoose"
import { MyPost } from "../interfaces"

const PostSchema = new Schema<MyPost>(
    {
        name: {
            type: String,
            required: [true, "名稱必填"]
        },
        content: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        tags: {
            type: [String],
            default: []
        },
        type: {
            type: String,
            default: ''
        },
        likes: {
            type: Number,
            required: [true, '必填按讚數']
        },
        comments: {
            type: Number,
            required: [true, '必填評論數']
        },
        createAt: {
            type: Date,
            default: Date.now,
            select: false
        }
    }
)

const Post = model<MyPost>('Post', PostSchema);

export {
    Post,
    PostSchema
}