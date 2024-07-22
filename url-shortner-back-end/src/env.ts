import { z } from "zod"

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production"]),
    MONGO_USER: z.string(),
    MONGO_PASSWORD: z.string()
})

export const env = envSchema.parse(process.env)
