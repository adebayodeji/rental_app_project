import app from "./fastify.js";

app.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

try {
  await app.listen({ port: 3000 });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
