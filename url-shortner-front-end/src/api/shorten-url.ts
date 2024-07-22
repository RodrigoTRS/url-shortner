import { api } from "@/lib/axios";

export async function shortenUrl(url: string) {
    try {
        const response = await api.post("/generate", { url })
        return response.data.url
        
    } catch (error) {
        throw error
    }
}