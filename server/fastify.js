import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyJWT from '@fastify/jwt'
import {
    serializerCompiler,
    validatorCompiler,
} from 'fastify-type-provider-zod'

const fastify = Fastify({ logger: true, requestTimeout: 5000 })

fastify.setValidatorCompiler(validatorCompiler)
fastify.setSerializerCompiler(serializerCompiler)
fastify.withTypeProvider()

fastify.register(cors, {
    origin: true,
    optionsSuccessStatus: 200,
    exposedHeaders: [
        'Content-Type',
        'Cache-Control',
        'Content-Language',
        'Expires',
        'Last-Modified',
        'Content-Disposition',
    ],
})

fastify.register(fastifyJWT, { secret: 'secret' })

export default fastify
