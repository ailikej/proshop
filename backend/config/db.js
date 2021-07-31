import mongoose from 'mongoose'

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1) // here 1 means exite with failure
    }
}

export default connectDB
