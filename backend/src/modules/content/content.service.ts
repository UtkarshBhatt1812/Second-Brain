import type { Types } from "mongoose"
import type { User } from "../../collections/users/user.schema"
import { contentModel } from "../../collections/content/content.scehma"
import { validateContent } from "./contentParse.schema"
import { useSyncExternalStore } from "react"
export  type ContentUser = {
    id : Types.ObjectId,
    email : string
}
  export const serviceCreateContent =async (body : JSON ,user : ContentUser)=>{
    const data = validateContent.parse(body)
    const content = await contentModel.create({
      title : data.title,
      body : data.body,
      owner : user.id,
    });
    return content
  }
  export const serviceGetMyContent  =async (user :ContentUser )=>{
    const content = await contentModel.find({owner : user.id})
    return content;
  }  
  export const serviceUpdateContent =async (id : String, body : JSON , user : ContentUser)=>{
    const updatedContent = await contentModel.findOneAndUpdate(
    {
      _id: id,
      owner: user.id, 
    },
    {
      $set: body,
    },
    {
      new: true,
      runValidators: true,
    }

 
  );
  return updatedContent ; 
}
 export const serviceDeleteContent = async (
  id: string,
  user: ContentUser
) => {
  const deleted = await contentModel.findOneAndDelete({
    _id: id,
    owner: user.id,
  });

  if (!deleted) {
    throw new Error("Content not found or unauthorized");
  }

  return true;
};