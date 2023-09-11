const userLogin = require("../Model/user_model");
module.exports = {
  getAllUsers: async (req, res) => {
    res.send("Get All Users!!");
  },

  getSingleUser: async (req, res) => {
    res.send("Get Single User");
  },

  createUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        res.send(400);
        throw new Error("All Fields Are Required");
      }

      const existingUser = await userLogin.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User with same email already exist" });
      }

      const hashedPwd = await bcrypt.hash(password, 10);
      const user = await userLogin.create({
        username,
        email,
        password: hashedPwd,
      });

      //send user details to user fo confirmation of succesfull signup

      if (user) {
        res.send(200).json({ username: user.username, email: user.email });
      } else {
        res.send(400);
        throw new Error("Details not Valid");
      }
      res.status(200).json(user);
    } catch (error) {}
  },
};
