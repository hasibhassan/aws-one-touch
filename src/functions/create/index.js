import AWS from 'aws-sdk'
const db = new AWS.DynamoDB.DocumentClient()

async function createItem(id, data) {
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: { id, data },
    ReturnValues: 'ALL_NEW',
  }
  try {
    const newItems = await db.put(params).promise()
    return newItems
  } catch (err) {
    return err
  }
}

export default async (event, context) => {
  try {
    const pathId = context.awsRequestId
    const eventData = JSON.parse(event.body)
    const returnedData = await createItem(pathId, eventData)
    return returnedData
  } catch (err) {
    return { error: err }
  }
}
