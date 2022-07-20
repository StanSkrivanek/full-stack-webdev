// we can asscess this api from both files in todos folder (index.json.ts and [uid].json.ts)
import type { RequestEvent } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const api = async (
  request: RequestEvent,
  data?: Record<string, unknown>
) => {
  let body = {} as any;
  let status = 500;
  // console.log("api", request.request.method);

  switch (request.request.method.toUpperCase()) {
    case "GET":
      body = await prisma.todo.findMany();
      status = 200;
      break;

    case "POST":
      body = await prisma.todo.create({
        data: {
          createdAt: data?.createdAt as Date,
          done: data?.done as boolean,
          text: data?.text as string,
        },
      });
      status = 201;
      break;

    case "PATCH":
      body = await prisma.todo.update({
        where: {
          uid: request.params.uid,
        },
        data: {
          done: data?.done as boolean,
          text: data?.text != null ? data.text as string : undefined,
        },
      });
      status = 200;

      break;

    case "DELETE":
      await prisma.todo.delete({ where: { uid: request.params.uid } });
      status = 200;
      break;

    default:
      break;
  }

  if (
    request.request.method.toUpperCase() !== "GET" &&
    request.request.headers.get("accept") !== "application/json"
  ) {
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
