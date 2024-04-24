import express from "express";
import cors from "cors";
import meetingsRoutes from "./6-routes/meetings-routes";
import teamsRoutes from "./6-routes/teams-routes";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";


// Server
const server = express();

// Middleware:
server.use(cors());
server.use(express.json());

// Routes:
server.use("/api", meetingsRoutes);
server.use("/api", teamsRoutes);

server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`))


