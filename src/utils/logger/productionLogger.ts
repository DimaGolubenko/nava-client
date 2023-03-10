import * as winston from "winston";

export const productionLogger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.json(),
});
