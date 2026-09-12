import morgan from "morgan";

export const requestLogger = morgan(
  ':date[iso] :method :url :status :res[content-length] - :response-time ms'
);
