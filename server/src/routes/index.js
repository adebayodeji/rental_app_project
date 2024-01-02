import { createProperty } from '../controllers/property'

async function router(fastify) {
    fastify.post('/create-property', createProperty)
}

export default router
