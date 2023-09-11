const mongoose = require('mongoose');

module.exports = {
  connectDatabase: async (req, res, next) => {
    try {
      const connect = await mongoose.connect(
        process.env.DB_URI,
        {
          useUnifiedTopology: true,
          useNewUrlParser: true
        },
        console.log(
          'Database connected Successfully to: ',
          connect.connection.host,
          connect.connection.name
        )
      )
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }
}
