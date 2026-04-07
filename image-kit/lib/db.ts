import { mongoose } from "mongoose"

const DB_URI = process.env.DB_URI!

if (!DB_URI) {
    throw new Error("Define database uri in env variable")
}

let cached = global.mongoose  

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

export const connectToDB = async () => {
    if (cached.conn) return cached.conn

    if (!cached.promise) {
        mongoose.connect(DB_URI)
            .then(() => mongoose.connection)
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        throw error;
    }

    return cached.conn;
}