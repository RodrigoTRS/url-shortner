import { Schema, model } from "mongoose";

const urlSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    receivedUrl: {
        type: String,
        required: true
    },
    generatedAt: Date,
})

export const Url = model("Url", urlSchema)