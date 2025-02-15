import {z} from 'zod'

//this is used to validate api response
export const newDeckSchema = z.object({
  "deck_id": z.string(),
  "remaining": z.number(),
  "shuffled": z.boolean(),
  "success": z.boolean(),
})

//this is used for type validation
export type NewDeck = z.infer<typeof newDeckSchema>

//Validation function
export const validateNewDeckResponse = (data: unknown) => {
  const result = newDeckSchema.safeParse(data);
  if(!result.success){
    console.log(data)
    throw new Error("Invalid new deck API response format")
  }
  return result.data
}

//-----------------------------------------------------------------------------------------------------
const cardSchema =
  z.object({
    "code": z.string(),
    "image": z.string(),
    "images": z.object({
      "svg": z.string(),
      "png": z.string()
    }),
    "value": z.string(),
    "suit": z.string()
  })


export const holeCardsSchema = z.object({
  "success": z.boolean(),
  "deck_id": z.string(),
  "cards": z.array(cardSchema),
  "remaining": z.number()
})

export type HoleCards = z.infer<typeof holeCardsSchema>

export const validateHoleCardsResponse = (data: unknown) => {
  const result = holeCardsSchema.safeParse(data);
  if(!result.success){
    throw new Error("Invalid hole card API response format")
  }
  return result.data
}