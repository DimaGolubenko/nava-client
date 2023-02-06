// Core
import { Middleware } from "redux";

// Other
import { developmentLogger } from "./logger";
import { RootState } from "@/store";

export const serverReduxLogger: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    developmentLogger.info(`Redux Dispatch: ${action.type}`);

    next(action);
  };
