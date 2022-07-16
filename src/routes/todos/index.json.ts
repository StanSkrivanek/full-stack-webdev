import type { RequestHandler } from "@sveltejs/kit";

//TODO: Persist todos in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
  return {
    status: 200,
    body: todos,
  };
};

export const post: RequestHandler<{}, FormData> = async ({ request }) => {
  const formData = await request.formData();
  // const value = formData.get("text") as string;
  todos.push({
    createdAt: new Date(),
    text: formData.get("text") as string,
    done: false,
  });

  return {
    status: 303,
    headers: {
      Location: `/`,
    },
  };
};
