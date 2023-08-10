import { Collaborator } from "../types/collaborators.types";

import { ServiceLayerResponse } from "../types/api.types";

import { readCollaborators } from "../data/collaborators.data";


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


export {
    getCollaborators,
}