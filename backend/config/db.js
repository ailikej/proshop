import mongoose from 'mongoose'
const connectDB = async () => {
    try {
        // const conn = await mongoose.connect(process.env.MONGO_URI, {
        const conn = await mongoose.connect(
            'mongodb+srv://eric1234:eric1234@cluster0.op9dn.mongodb.net/proshop?retryWrites=true&w=majority',
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
            }
        )

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1) // here 1 means exite with failure
    }
}

export default connectDB
