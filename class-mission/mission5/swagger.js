const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Meta API',
        description: '示範'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       // can be "header", "query" or "cookie"
            name: "X-API-KEY",  // name of the header, query parameter or cookie
            description: "any description..."
        }
    },
}

const outputFile = './swagger-output.json'
const endpoiontsFiles = ['./app.js']

swaggerAutogen(outputFile, endpoiontsFiles, doc);
