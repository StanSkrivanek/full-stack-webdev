import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {

  // before Svelte make resolve call we can do some stuff to modify event (something like middleware)
if(event.url.searchParams.has("_method")){
  event.request.method.toUpperCase() as string;
}

  const response = await resolve(event); // at this line svelte executes code in our API (request is made)
  return response;
};
