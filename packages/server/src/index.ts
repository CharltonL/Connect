import { DateTime } from "luxon";
import express, { Request, Response } from "express";
import "dotenv/config";
import http from "http";
import path from "path";

const run = async () => {
  const { NODE_ENV } = process.env;
  const app = express();

  app.use(express.json({ limit: "5mb" }));
  app.use(express.urlencoded({ extended: true, limit: "5mb" }));

  const httpServer = http.createServer(app);

  console.log(NODE_ENV);

  if (NODE_ENV !== "development") {
    console.log("111");
    const buildPath = path.normalize(path.join(__dirname, "../../client/dist"));
    app.use(express.static(buildPath));

    app.get("/health", (req: Request, res: Response) => {
      res.status(200).send("OK");
    });

    const rootRouter = express.Router();
    rootRouter.get("(/*)?", async (req, res, next) => {
      res.sendFile(path.join(buildPath, "index.html"));
    });
    app.use(rootRouter);
  }

  app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("OK");
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000`);
};

run().catch((error) =>
  console.error(`[ERROR] ${DateTime.local().toISO()}`, error)
);
