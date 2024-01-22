import {z} from "zod"

const envSchema = z.object({
  BASE_URL: z.string().url(),
  BASE_NAME: z.string(),
  NEXTAUTH_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
})


export const env = envSchema.parse(process.env)