# Full stack dev app demo

**tech stack**: Sveltekit, Prisma, Postgres

---

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
#or in current directory
npm init svelte . 
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
## Prebuild Localy

to be able to connect to Postgres we need to prebuild our App and customise npm scripts 
NOTE: running npm build return error  `Could not detect a support Production environment ...` to fix it we ce run bash command 

```bash
export VERCEL=true
```
now we can run `build` command 
```json
 "postbuild": "cp prisma/schema.prisma .vercel_build_output/functions/node/render/ && cp node_modules/@prisma/engines/*query* .vercel_build_output/functions/node/render/"
```
and add build `.vercel_build_output` into `.gitignore`

TODO: check how it can be done with other ways (updated Railway or Vercel) to automate this via standard `build` command 

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
