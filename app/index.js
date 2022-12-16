const path=require("path")
const {getClient} = require("./googleDocsClient")
const log = console.log


const createDocument = async (documentId,title) => {
    try {
        const client = await getClient()
        const createResponse = await client.documents.create({
            requestBody: {
                title,
                documentId 
            },
        });
    return createResponse?.data    
    }
    catch (error) {
        log("ERROR "+error)
    }
}

module.exports={createDocument}