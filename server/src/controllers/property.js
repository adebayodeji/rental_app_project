import { PropertySchema } from "../schemas/index";
import { createProperty } from "../services/property";

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
      } = request.body;
      await createProperty({
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
      });
      reply.status(204).send();
    } catch (error) {
      reply.code(500).send({
        message: "Unable to create property",
      });
    }
  },
};
