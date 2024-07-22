import "dotenv/config"
import cors from "cors"
import express from "express"
import { generateShortenedUrl } from "./routes/generate-shortened-url"
import { redirectToRequestedUrl } from "./routes/redirect-to-requested-url"
import { helloWorld } from "./routes/hello-world"
import { env } from "./env"

const PORT = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.get("/hello", helloWorld)
app.post("/generate", generateShortenedUrl)
app.get("/redirect", redirectToRequestedUrl)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})
