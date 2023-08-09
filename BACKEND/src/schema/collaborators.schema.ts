import mongoose from "mongoose";
import { Collaborator } from "../types/collaborators.types";

const collaboratorSchema = new mongoose.Schema <Collaborator> ({

    ein: { type:String, require: true},
    collaboratorName: {type: String, require: true},
    email: {type: String, require: true},
    address: {type: String, require: true},
 })

 const CollaboratorSchema = mongoose.model("Collaborators", collaboratorSchema);

 export {CollaboratorSchema};