import { model, Schema ,Types} from "mongoose";
import { boolean, maxLength, trim } from "zod";

export const ContentType =[ "note",
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
            required : true ,
            enum : ContentType,
            index : true
        }
        ,
        isPublic :{
            type : String,
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
export const contentModel = model('content',contentSchema)