import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyJWT from "@fastify/jwt";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

const { RWANDA_RENTALS_SIGNING_KEY } = process.env;

const fastify = Fastify({ logger: true });

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);
fastify.withTypeProvider();

fastify.register(cors, {
  origin: true,
  optionsSuccessStatus: 200,
  exposedHeaders: [
    "Content-Type",
    "Cache-Control",
    "Content-Language",
    "Expires",
    "Last-Modified",
    "Content-Disposition",
  ],
});

console.log(RWANDA_RENTALS_SIGNING_KEY);
fastify.register(fastifyJWT, { secret: "secret" });

export default fastify;
