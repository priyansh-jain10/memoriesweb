import mongoose from 'mongoose';

const postSchema =mongoose.Schema({
    title:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount: {
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()

    },
});// A schema that defines each post has to have this fields required in it.

const PostMessage=mongoose.model('PostMessage',postSchema);
export default PostMessage;

