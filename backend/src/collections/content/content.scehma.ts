import mongoose, { model, Schema ,Types ,type InferSchemaType} from "mongoose";
import { boolean, maxLength, string, trim } from "zod";

export const ContentType =[ "note",
  "idea",
  "link",
  "task","video"]




const contentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 200,
    },

    body: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ContentType,
      index: true,
      default: "note",
    },

    isPublic: {
      type: Boolean,
      default: false,
    },

    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    tags: {
      type: [String], 
      default: [],
      index: true,
    },

    archived: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);



export  type Content = InferSchemaType<typeof contentSchema>
export const contentModel = model('content',contentSchema)