'use strict'

const AWS = require('aws-sdk');
AWS.config.update({ region: "eu-west-2" });

exports.handler = async (event, context) => {

    const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "eu-west-2" })
    const params = {
        TableName: 'Users',
        Key: {
            id: "123"
        }
    }

    try {
        const data = documentClient.get(params).promise();
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}