// we can asscess this api from both files in todos folder (index.json.ts and [uid].json.ts)
import type { RequestEvent } from "@sveltejs/kit";
//TODO: Persist todos in database
let todos: Todo[] = [];

export const api = ({ request }: RequestEvent, todo?: Todo) => {
  let body = {} as any;
  let status = 500;
  console.log("api", request.method);

  switch (request.method.toUpperCase()) {
    case "GET":
      body = todos;
      status = 200;
      break;

    case "POST":
      todos.push(todo!);
      body = todo;
      status = 201;
      break;
      
    case "DELETE":
      status = 200;
      todos = todos.filter((t) => t.uid !== t!.uid);
      break;

    default:
      break;
  }
  if (request.method.toUpperCase() !== "GET") {
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
