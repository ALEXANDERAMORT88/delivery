"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollaborators = void 0;
const collaborators_data_1 = require("../data/collaborators.data");
const getCollaborators = () => {
    return new Promise((res, rej) => {
        (0, collaborators_data_1.readCollaborators)()
            .then((dataLayerResponse) => {
            const localCollaboratorDB = dataLayerResponse;
            res({ code: 200, result: localCollaboratorDB });
        })
            .catch((error) => {
            rej({ code: 500, message: "Unexpected error", errorMessage: error });
        });
    });
};
exports.getCollaborators = getCollaborators;
