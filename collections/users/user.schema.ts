import { Schema ,model ,models,type InferSchemaType} from "mongoose";


const userSchema = new Schema(
    {
        name : {
            type : String,
            required : true,
            minLength : 3
        },
        email : 
        {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim: true,
            index: true,
        },
        password: {
      type: String,
      required: true,
      select: false, 
    },

    },
    {
        timestamps : true
    }
)

export  type User = InferSchemaType<typeof userSchema>

export const UserModel = model("User",userSchema)