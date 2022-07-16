// we can asscess this api from both files in todos folder (index.json.ts and [uid].json.ts)
import type { RequestEvent } from "@sveltejs/kit";
//TODO: Persist todos in database
let todos: Todo[] = [];

export const api = (request: RequestEvent, data?: Record<string, unknown>) => {
  let body = {} as any;
  let status = 500;
  console.log("api", request.request.method);

  switch (request.request.method.toUpperCase()) {
    case "GET":
      body = todos;
      status = 200;
      break;

    case "POST":
      todos.push(data as Todo);
      body = data;
      status = 201;
      break;

    case "PATCH":
      todos = todos.map((t) => {
        if (t.uid === request.params.uid) {
         if(data!.text) t.text = data!.text as string;
         else t.done = data!.done as boolean;
        }
        return t;
      });
      status = 200;
      break;

    case "DELETE":
      todos = todos.filter((t) => t.uid !== request.params.uid);
      status = 200;
      break;

    default:
      break;
  }

  if (request.request.method.toUpperCase() !== "GET") {
    return {
      status: 303,
      headers: {
        Location: `/`,
      },
    };
  }
  return {
    status,
    body,
  };
};
