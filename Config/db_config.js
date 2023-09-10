const mongoose = require('mongoose');

const connectDatabase = async () => { 
    try {
        await mongoose.connect(process.env.DB_URI,{useUnifiedTopology: true,useNewUrlParser:true});

    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDatabase;