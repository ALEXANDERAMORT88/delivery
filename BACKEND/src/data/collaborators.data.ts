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


};

const readCollaboratorsByName = (collaboratorName: string) => {
// eslint-disable-next-line no-async-promise-executor
return new Promise(async(res, rej) => { try {  const mongoResult = await CollaboratorSchema.findOne({ name: collaboratorName}); if (mongoResult === null) { rej(404)
} else {
 res(mongoResult);
}
} catch (error) {
    rej(error)
    console.log("Unexpected Error")
}
});
};

const addCollaborator = (body: Collaborator) =>{
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async(res, rej) => {
        try { const collaborator = new CollaboratorSchema(body);
            await collaborator.save();
            res("Partner added successfully");
        } catch (error) {
            rej(error)
            console.error("unexpected error");
        }
    });
};

const editCollaborator = (employeeId: string, body: Collaborator) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise (async(res, rej)=> {
        try {
            const collaborator = await
            CollaboratorSchema.findById(employeeId, body, {new: true});
            if (collaborator === null) {
                rej(404);
            } else {
                res(200);
            }
        } catch (error) {
            rej(error);
        }
    });
};

const removeCollaborator = (employeeId: string) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise( async(res, rej)=> {
        try {
            const removePartner = await
            CollaboratorSchema.findByIdAndRemove(employeeId);
            if (removePartner === null) {
                rej(404);
            } else {
                res(200);
            }

        } catch (error) {
            rej(error);
        }
    });
};

export {
    readCollaborators, readCollaboratorsByName, addCollaborator, removeCollaborator, editCollaborator
};