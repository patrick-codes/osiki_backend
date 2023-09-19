const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
     /* validate: {
        validator: (value) => {
          const re = /^ [A-Z0-9._%+-]+@ ([A-Z0-9-]+.)+ [A-Z] {2,4}$/i;
          return value.match(re);
        },
        message: "Please enter the email", 
      },*/
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userdetails", userSchema);
