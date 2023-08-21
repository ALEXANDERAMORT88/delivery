import { Collaborator } from "../types/collaborators.types";

import { ServiceLayerResponse } from "../types/api.types";

import { readCollaborators,
readCollaboratorsByName, addCollaborator, editCollaborator, removeCollaborator, readCollaboratorsById } from "../data/collaborators.data";


const getCollaborators = (): Promise<ServiceLayerResponse<Collaborator>> =>  {
    return new Promise((res, rej) => {
    readCollaborators()
    .then((dataLayerResponse: Collaborator []) => {
const localCollaboratorDB = dataLayerResponse;
res({ code: 200, result: localCollaboratorDB});
    })
    .catch((error)=>{
        rej({ code: 500, message: "Unexpected error", errorMessage: error});
    });
  });
};

const getCollaboratorsByName =(collaboratorName: string): Promise<ServiceLayerResponse<Collaborator>> => {
return new Promise((res, rej)=> { readCollaboratorsByName(collaboratorName).then((dataLayerResponse)=> {
   if ((dataLayerResponse as Collaborator[]).length === 0) {
    res({code: 404, message: 'Collaborator does not exist'})
   } else {
    res({code: 200, result: dataLayerResponse as Collaborator })
   }
}) .catch(error=>{
    rej({code: 500, message:'Unexpected error', erroMessage: error});
     });
   });
};

const getCollaboratorById = (employeeId: string): Promise<ServiceLayerResponse<Collaborator>> => {
return new Promise((res, rej)=>{
    readCollaboratorsById(employeeId).then((dataLayerResponse) => {
        if ((dataLayerResponse as Collaborator[]).length === 0) {
            res({code: 404, message: 'Collaborator not found'});
        } else {
            res({code: 200, result: dataLayerResponse as Collaborator});
        }
    }).catch(error => {
        rej({code: 500, message: 'Unexpected error', errorMessage: error});
    });
});
};


const postCollaborator = (body: Collaborator): Promise<ServiceLayerResponse<Collaborator>> => { return new Promise((res, rej) => {
    addCollaborator(body).then((dataLayerResponse)=>{
        res({code: 201, message: dataLayerResponse as string});
    }) .catch(error => {
        rej({code: 500, message: 'Unexpected error', errorMessage: error});
    })
});
};

const putCollaborator = (id: string, body: Collaborator): Promise<ServiceLayerResponse<Collaborator>> => {
    return new Promise((res,  rej)=> {
    editCollaborator(id, body).then((dataLayerResponse) => {
        if (dataLayerResponse === 200) {
            res({code: 200, message: 'Collaborator updated successfully' as string})
        };
    }) .catch(error => {
        if (error === 404) {
           rej({code: 404, message:'Collaborator not found'})
        } else {
            rej({code: 500, message: 'Unexpected error', errorMessage: error});
        }
    });
});
};

const deleteCollaborator = (id: string): Promise<ServiceLayerResponse<Collaborator>> => { return new Promise((res, rej) => {
    removeCollaborator(id).then((dataLayerResponse)=> {
        if (dataLayerResponse === 200) {
            res({code: 200, message: 'Collaborator removed successfully'})
        }
    }).catch((error)=> {
        if (error === 404) {
            rej({code: 404, message: 'Collaborator not found'});
        } else {
            rej({code: 500, message: 'Unexpected error', errorMessage: error})
        }
    });
 });
};

export {
    getCollaborators, putCollaborator,getCollaboratorsByName, postCollaborator, deleteCollaborator, getCollaboratorById
};