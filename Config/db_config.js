const mongoose = require("mongoose");
module.exports = {
  connectDatabase: async (req, res) => {
    try {
      const con = await mongoose
        .connect(process.env.DB_URI, {
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
