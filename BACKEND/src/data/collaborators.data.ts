import { Collaborator } from "../types/collaborators.types";
import { CollaboratorSchema } from "../schema/collaborators.schema";


const readCollaborators = (): Promise <Collaborator[]> => {
// eslint-disable-next-line no-async-promise-executor
return new Promise(async (res, rej)=>{try {
    const mongoResponse = await CollaboratorSchema.find();
    res(mongoResponse);
} catch (error) {
rej(error);
}})


}

export {
    readCollaborators,
};