import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const patch: RequestHandler<{}, FormData> = async (request) => {
  const formData = await request.request.formData();

  return api(request, {
    text: formData.get("text") as string, // "text" === `name` of input in form
    done: (formData.get("done") as string) === "true",
  });
};

export const del: RequestHandler = (request) => {
  return api(request);
};
