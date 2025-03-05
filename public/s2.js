const { Client, Account, Databases, Storage } = Appwrite;

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Appwrite API endpoint
    .setProject('p2'); // Replace with your Project ID

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);