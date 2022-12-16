const path=require('path')
const docs = require('@googleapis/docs')
require("dotenv").config()


const getClient = async () => {
    const serviceAccountfileName = process.env.GOOGLE_SERVICE_ACCOUNT_FILE
    const keyPath = path.resolve(__dirname, `../credentials/${serviceAccountfileName}`)

    const auth = new docs.auth.GoogleAuth({
        keyFilename: keyPath, 
        scopes: ['https://www.googleapis.com/auth/documents']
    });
    const authClient = await auth.getClient();

    client = await docs.docs({
        version: 'v1',
        auth: authClient
    });
    return client
}

module.exports={getClient}