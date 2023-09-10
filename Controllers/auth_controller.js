
const getAllUsers = (req, res)=>{
    res.send('Get All Users!!');
}

const getSingleUser = (req, res)=>{
    res.send('Get Single User');
}

const createUser = async (req, res)=>{
try {

    const {name, email, password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: 'User with same email already exist'});
    }
    
} catch (error) {
    
}
   
}


module.exports = {getAllUsers,createUser,getSingleUser};