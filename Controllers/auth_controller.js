const userLogin = require("../Model/user_model");
const asyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");


module.exports = {
  getAllUsers: asyncHandler(async (req, res) => {
    res.sendStatus("Get All Users!!");
  },
), 

  login:  async (req, res) => {
    try {
      const {email, password} = req.body;
      const user = await userLogin.findOne({email});
      if(!user){
        res.sendStatus(400).json({message: "User with this email already exist!!"})
      }
      const isMatch = await bcryptjs.compare(password);
      if(!isMatch){
        res.sendStatus(400).json({message: "Incorrect Password"});
      }

      const token = jwt.sign({id: user._id}, "passwordKey");
      res.json({token, ...user._doc});


    } catch (error) {res.sendStatus(500).json({error: e.message})
      
    }
    res.sendStatus("Get Single User");
  },

  createUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        res.sendStatus(400);
        throw new Error("All Fields Are Required");
      }

      const existingUser = await userLogin.findOne({ email });
      if (existingUser) {
        return res
          .sendStatus(400)
          .json({ message: "User with same email already exist" });
      }

      const hashedPwd = await bcryptjs.hash(password, 10);
      /*const user = await userLogin. create({
        username,
        email,
        password: hashedPwd,
      });
*/
      let user = new userLogin({
        username,
        email,
        password: hashedPwd,
      });
      user = await user.save();
      res.json(user);

      //send user details to user fo confirmation of succesfull signup

      /*if (user) {
        res.sendStatus(200).json({ username: user.username, email: user.email });
      } else {
        res.sendStatus(400);
        throw new Error("Details not Valid");
      }*/
      //res.sendStatus(200).json(user);
    } catch (error) {
      res.sendStatus(500).json({ error: e.message });
    }
  },
};
