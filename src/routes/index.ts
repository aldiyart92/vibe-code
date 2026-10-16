import { Elysia } from "elysia";
import { db } from "../db";
import { users } from "../db/schema";

export const routes = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
  }))
  .get("/users", async ({ set }) => {
    try {
      const allUsers = await db.select().from(users);
      return {
        success: true,
        data: allUsers,
      };
    } catch (error) {
      set.status = 500;
      return {
        success: false,
        message: "Failed to fetch users from database",
        error: error instanceof Error ? error.message : String(error),
      };
    }
  });
