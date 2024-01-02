import { createProperty, getProperty } from '../controllers/property'

async function router(fastify) {
    fastify.post("/create-property", createProperty);
    fastify.get("property", getProperty);
}

export default router
