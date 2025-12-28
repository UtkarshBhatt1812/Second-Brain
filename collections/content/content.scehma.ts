import mongoose, { model, Schema ,Types ,type InferSchemaType} from "mongoose";
import { boolean, maxLength, trim } from "zod";

const ContentType =[ "note",
  "idea",
  "link",
  "task","video"]
const contentSchema = new Schema(
    {
        
        title :{
            type : String,
            required : true,
            trim : true,
            maxLength : 200 
        },
        body : {
            type : String,
            required : true,
        }
        ,
        type : {
            type : String,
            enum : ContentType,
            index : true,
            default : 'note'
        }
        ,
        isPublic :{
            type : boolean,
            default : false
        }
        ,owner : {
            type : Types.ObjectId
            ,ref : "User"
            ,required : true
        },
        archived : {
            type : boolean,
            default : false
        }
    }
)
export  type Content = InferSchemaType<typeof contentSchema>
export const contentModel = model('content',contentSchema)