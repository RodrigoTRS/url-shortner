import { Request, Response } from "express"
import { randomBytes } from "node:crypto"
import mongoose from "mongoose"
import { Url } from "../models/Url"
import { env } from "../env"


export async function generateShortenedUrl(req: Request, res: Response) {
    const url = req.body.url
    const key = randomBytes(8).toString("hex")

    const baseUrl = env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "http://u.sitecom.com.br"

    const redirectUrl = `${baseUrl}/redirect?to=${key}`

    mongoose.connect(`mongodb+srv://${env.MONGO_USER}:${env.MONGO_PASSWORD}@urlshortner.yqm8lst.mongodb.net/urls?retryWrites=true&w=majority&appName=urlshortner`)
    
    const newUrl = new Url({
        receivedUrl: url,
        key: key,
        generatedAt: new Date()
    })

    await newUrl.save()

    res.status(200).json({ url: redirectUrl })
}