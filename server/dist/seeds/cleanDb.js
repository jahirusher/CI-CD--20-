import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        if (model?.db?.db) {
            let modelExists = await models[modelName].db.db.listCollections({
                name: collectionName
            }).toArray();
            if (modelExists?.length) {
                await db.dropCollection(collectionName);
            }
        }
        else {
            console.log(`Model ${modelName} does not exist in the database`);
        }
    }
    catch (err) {
        throw err;
    }
};
