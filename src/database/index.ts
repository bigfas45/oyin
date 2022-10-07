import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.MONGO_URI!

const connectDb = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDb;
