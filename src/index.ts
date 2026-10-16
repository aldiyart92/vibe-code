import { Elysia } from "elysia";
import { env } from "./config/env";
import { routes } from "./routes";
import { poolConnection } from "./db";

const app = new Elysia()
  .use(routes)
  .listen(env.PORT);

console.log(`🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`);

// Verify MySQL connection on startup
poolConnection.getConnection()
  .then((conn) => {
    console.log("✅ MySQL database connection established successfully.");
    conn.release();
  })
  .catch((err) => {
    console.warn("⚠️ MySQL database connection warning:", err.message);
  });

export type App = typeof app;
