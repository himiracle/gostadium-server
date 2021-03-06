import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import helmet from "helmet";
import logger from "morgan";

class App {
  public app: GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({
        schema: schema
    });
  }

  public middlewears = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
  };
}

export default new App().app;
