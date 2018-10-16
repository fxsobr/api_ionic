export const environment = {
    server: {port: process.env.SERVER_PORT || 3000},
    db: {url: process.env.DB_URL || 'mongodb://173.82.104.22/api-exemplo'},
    security: {saltRounds: process.env.SALT_ROUND || 10,
               apiSecret: process.env.API_SECRET || 'api'}

}