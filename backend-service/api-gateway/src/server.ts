import { app } from "./app";
import { env } from "./config/env";

app.listen(env.port, () => {
  console.log(`api-gateway listening on port ${env.port}`);
});
