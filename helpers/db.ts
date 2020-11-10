import { MongoClient, Database } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

let database: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri('mongodb+srv://gidi:Sf80d0A0K1gzUaZq@cluster0.ohhif.mongodb.net/?retryWrites=true&w=majority')

  database = client.database('scheduale-training');
}

function getDb() {
  return database;
}

export default getDb;