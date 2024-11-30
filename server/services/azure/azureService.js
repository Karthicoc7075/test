const {BlobServiceClient} = require('@azure/storage-blob')
const azureConfig = require('../../config/azureConfig')


const blobServiceClient = BlobServiceClient.fromConnectionString(azureConfig.connectionString)


const postImagesContainerClient = blobServiceClient.getContainerClient(azureConfig.postImagesContainer)
const postVideosContainerClient = blobServiceClient.getContainerClient(azureConfig.postVideosContainer)
const profileImagesContainerClient = blobServiceClient.getContainerClient(azureConfig.profileImagesContainer)
const chatImagesContainerClient = blobServiceClient.getContainerClient(azureConfig.chatImagesContaniner)
const chatVideosContainerClient = blobServiceClient.getContainerClient(azureConfig.chatVideosContainer)
const chatDocsContainerClient = blobServiceClient.getContainerClient(azureConfig.chatDocsContainer)
const chatAudiosConatinerClient = blobServiceClient.getContainerClient(azureConfig.chatAudiosConatiner)

module.exports = {
    postImagesContainerClient,
    postVideosContainerClient,
    profileImagesContainerClient,
    chatImagesContainerClient,
    chatVideosContainerClient,
    chatDocsContainerClient,
    chatAudiosConatinerClient
}