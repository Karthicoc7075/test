

function generateSasToken(blobClient) {

    const sasToken = blobClient.generateSasUrl({
        permissions: 'r',
        startsOn: new Date(new Date().valueOf() - 1000),
        expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // 1 hour
    })
    console.log('sasToken:', sasToken);
    
    return new Promise((resolve) => {
        resolve(sasToken);
    })

}


module.exports = generateSasToken;