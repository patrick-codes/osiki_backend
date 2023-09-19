const mongoose = require("mongoose");
require('dotenv').config();
module.exports = {
  connectDatabase: async (req, res) => {
    try {
       let db = process.env.DB_URI;
      const con = await mongoose
        .connect(db, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        })
        .then(() => {
          console.log(
            "Database connected Successfully",
          );
        });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },
};
