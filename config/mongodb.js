import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`mongodb://localhost:27017/prescripto`)

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.