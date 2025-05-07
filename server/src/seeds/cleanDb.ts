import db from '../config/connection.js';

export default async (_modelName: "Question", collectionName: string) => {
  try {
    if (db?.db) {
      const collections = await db.db.listCollections({ name: collectionName }).toArray();

      if (collections.length) {
        await db.dropCollection(collectionName);
        console.log(`Dropped collection: ${collectionName}`);
      } else {
        console.log(`No collection found named: ${collectionName}`);
      }
    } else {
      console.error("No database connection.");
    }
  } catch (err) {
    console.error("Error cleaning database:", err);
    throw err;
  }
};

