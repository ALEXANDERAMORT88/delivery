import mongoose from "mongoose";
import { Collaborator } from "../types/collaborators.types";

const collaboratorSchema = new mongoose.Schema <Collaborator> ({

    businessId: { type:String, require: true},
    collaboratorName: {type: String, require: true},
    email: {type: String, require: true},
    location: {type: String, require: true},
 })

 const CollaboratorSchema = mongoose.model<Collaborator>("Collaborators", collaboratorSchema);

 export {CollaboratorSchema};