import app from './fastify.js'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
async function main() {
    try {
        await app.listen({ port: 3000 })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

app.addHook('onRoute', (routeOptions) => {
    if (!routeOptions.schema) {
        routeOptions.schema = {}
    }

    routeOptions.schema.response = {
        ...routeOptions.schema.response,
        '4xx': z.object({
            message: z.string(),
        }),
        '5xx': z.object({
            message: z.string(),
        }),
    }
})

main()
    .then(async () => {
        await prisma.$connect()
        console.log('Connection to prisma db successful')
    })
    .catch(async (e) => {
        await prisma.$disconnect()
        process.exit(1)
    })
