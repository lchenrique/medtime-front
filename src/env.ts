import {z} from "zod"

const envSchema = z.object({
  BASE_URL: z.string().url(),
  NEXTAUTH_URL: z.string().url(),
  CLERK_SECRET_KEY: z.string(),
  DATABASE_URL: z.string().url(),
  BDU: z.string(),
  BDP: z.string(),
  NEXTAUTH_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
})


export const env = envSchema.parse(process.env)