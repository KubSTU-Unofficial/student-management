import { z } from "zod"

export const formSchema = z.object({
  otp: z.string(),
})