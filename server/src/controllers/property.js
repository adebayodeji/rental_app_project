import { z } from "zod"
import { PropertySchema } from "../schemas/index"
import { saveProperty } from "../services/property"

export const createProperty = {
    schema: {
        body: PropertySchema,
    },
    async handler(request, reply) {
        try {
            const {
                additional_bills,
                availability,
                not_allowed,
                property_address,
                property_details,
                property_image,
                property_name,
                property_type,
                rental_price,
                rental_terms,
            } = request.body
            await saveProperty({
                additional_bills,
                availability,
                not_allowed,
                property_address,
                property_details,
                property_image,
                property_name,
                property_type,
                rental_price,
                rental_terms,
            })
            reply.status(204).send()
        } catch (error) {
            reply.code(500).send({
                message: "Unable to create property",
            })
        }
    },
}

export const getProperty = {
    params: z.object({ id: z.string() }),
    response: {
        200: PropertySchema,
    },
    async handler(request, reply) {
        try {
            const { id } = request.params
            const propertyData = await getProperty(id)
            if (propertyData) {
                reply.send(propertyData)
                return;
            }
            reply
                .code(404)
                .send({ message: `Property with id  ${id} doesn't exist` })
        } catch (error) {
            reply.code(500).send({
                message: 'Unable to fetch property',
            })
        }
    },
}

export const getAllProperty = {
    response: {
        200: Property
    }
}
