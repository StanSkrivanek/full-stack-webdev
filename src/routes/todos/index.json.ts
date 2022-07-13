import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => {
  return {
    status: 200,
    body: {
      todos: [
        {
          id: 1,
          title: "Learn Svelte",

          completed: false,
        },
        {
          id: 2,
          title: "Learn TypeScript",

          completed: false,
        },
      ],
    },
  };
};
