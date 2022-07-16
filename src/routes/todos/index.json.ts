import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get: RequestHandler = (event) => {
  return api(event);
};

export const post: RequestHandler<{}, FormData> = async ( event ) => {
  const formData = await event.request.formData();
  
  return api(event, {
    uid: `${Date.now()}`,
    createdAt: new Date(),
    text: formData.get("text-input") as string,
    done: false,
  });
};

