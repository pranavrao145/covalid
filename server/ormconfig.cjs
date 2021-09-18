module.exports = {
    type: "cockroachdb",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DATABASE,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    "entities": [
        "src/entities/*.ts"
    ]
}
