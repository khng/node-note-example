module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.ENV || 'development', // process.env is only if you are using .env file, in this case it is unnecessary

    development: {
        db: {
            dialect: 'sqlite',
            storage: ':memory:',
        }
    },

    production: {
        db: {
            // dialect: 'sqlite',
            // storage: 'db/database.sqlite', // need to create that dir/file from root manually
            dialect: 'postgres',
            host: 'localhost',
            port: 5432
        }
    }
}