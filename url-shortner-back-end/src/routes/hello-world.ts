import { Request, Response } from "express"

export async function helloWorld(req: Request, res: Response) {
    res.status(200).json({ message: "Hello world!"})
}