import { z } from 'zod'

export const PropertySchema = z.object({
    additional_bills: z.string(),
    availability: z.string(),
    not_allowed: z.string(),
    property_address: z.string(),
    property_details: z.string(),
    property_image: z.string(),
    property_name: z.string(),
    property_type: z.string(),
    rental_price: z.string(),
    rental_terms: z.string(),
    user_id: z.number().int(),
})
