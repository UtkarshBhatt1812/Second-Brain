import {z} from 'zod'

const envSchema = z.object({
    PORT : z.string().transform(Number),
    MONGO_URL : z.string(),
    JWT_SECRET : z.string()
})

export const env = envSchema.parse(process.env)