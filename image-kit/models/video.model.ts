import mongoose, { model, models, Schema } from "mongoose";

export const VIDEO_DIMENTIONS = {
    height: 1080,
    width: 1920
} as const;

export interface VideoInterface {
    _id?: mongoose.Types.ObjectId,
    title: string,
    description: string,
    videoUrl: string,
    thumbnailUrl: string,
    controls?: string,
    transformation?: {
        height: number,
        width: number,
        quality: number
    },
    createdAt?: Date,
    updatedAt?: Date
}

const userSchema = new Schema<VideoInterface>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    controls: { type: Boolean, default: true },
    transformation: {
        height: { type: Number, default: VIDEO_DIMENTIONS.height },
        width: { type: Number, default: VIDEO_DIMENTIONS.width },
        quality: { type: Number, min: 1, max: 100 },
    },
}, { timestamps: true })

const Video = models?.Video || model<VideoInterface>("Video", userSchema)
export default Video