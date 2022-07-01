/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import { Marked } from "marked";

import type { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const levels: string[] = [];
    for (const entry of Deno.readDirSync("./docs")) {
      if (entry.isDirectory) {
        levels.push(entry.name);
      }
    }

    return await ctx.render({ levels });
  },
};

export default function Home({ data }: PageProps<{ levels: string[] }>) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`font-bold text-3xl my-8`}>
        DPC Turbo - Developer Certification
      </h1>
      <ul class={tw`list-disc`}>
        {data.levels.map((level) => (
          <li key={level}>
            <a href={`${level}`} class={tw`text-blue-500 hover:text-blue-400`}>
              {level.replace("_", " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
