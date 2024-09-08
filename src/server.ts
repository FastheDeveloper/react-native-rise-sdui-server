import { setupRiseTools } from "@rise-tools/cli";
import { createWSServer } from "@rise-tools/server";

import { models as mainModal } from "~src/home/home";
const port = Number(process.env.PORT || "3015");

const models = { ...mainModal };
const server = createWSServer(models, port);

if (process.env.NODE_ENV === "development") {
	setupRiseTools({ server });
}
