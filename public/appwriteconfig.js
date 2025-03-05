import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("p2"); // Your Project ID

const databases = new Databases(client);

export { databases };
