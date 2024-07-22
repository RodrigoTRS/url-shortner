import { env } from "../env"
import { Request, Response } from "express"
import { Url } from "../models/Url"
import mongoose from "mongoose"


export async function redirectToRequestedUrl(req: Request, res: Response) {
    const to = req.query.to
    
    mongoose.connect(`mongodb+srv://${env.MONGO_USER}:${env.MONGO_PASSWORD}@urlshortner.yqm8lst.mongodb.net/urls?retryWrites=true&w=majority&appName=urlshortner`)

    const url = await Url.findOne({
        key: to
    })

    if (!url) {
        res.status(500)
    } else {
        res.status(200).redirect(url?.receivedUrl)
    }

}