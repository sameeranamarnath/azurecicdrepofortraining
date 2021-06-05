const config = {}

config.host = "https://todoappdb.documents.azure.com:443/"
config.authKey =
  '1gPFCRmq5X5X5XtE9CwvRSACW6vVclbVKmH57eksIe3sKh7lSg13SnjHiKjdz4u2c359mK4MojLrWAHMaS2ONw=='
config.databaseId = 'ToDoList'
config.containerId = 'Items'

if (config.host.includes('https://localhost:')) {
  console.log('Local environment detected')
  console.log(
    'WARNING: Disabled checking of self-signed certs. Do not have this code in production.'
  )
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  console.log(
    `Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`
  )
}

module.exports = config
