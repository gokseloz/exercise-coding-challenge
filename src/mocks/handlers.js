import { rest } from "msw";
import moviesSeries from "./sample.json";

export const handlers = [
  rest.get("http://localhost:3000/api/moviesSeries", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(moviesSeries));
  }),
];
