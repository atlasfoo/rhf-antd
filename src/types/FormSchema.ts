import { z } from 'zod'
import { FruitKeys } from './SelectValues'

export const FormSchema = z.object({
  name: z.string().min(3),
  password: z.string().min(6),
  longText: z.string().min(30),
  email: z.string().email(),
  check: z.boolean(),
  select: z.nativeEnum(FruitKeys),
  number: z.number().min(1).int(),
})

export type FormSchemaType = z.infer<typeof FormSchema>
