/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Marked } from "marked";

import type { Handlers, PageProps } from "$fresh/server.ts";

const baseGithubUrl = `https://raw.githubusercontent.com/DPC-Nordics/turbo-certification/main/`;

export const handler: Handlers = {
  async GET(_, ctx) {
    const pathParam = ctx.params.path;
    const markdown =
      (
        await Promise.all(
          [
            `${baseGithubUrl}/${pathParam}`,
            `${baseGithubUrl}/${pathParam}/README.md`,
            `${baseGithubUrl}/${pathParam}/index.md`,
            `${baseGithubUrl}/docs/${pathParam}`,
            `${baseGithubUrl}/docs/${pathParam}/README.md`,
            `${baseGithubUrl}/docs/${pathParam}/index.md`,
          ].map((url) => fetch(url).then((res) => res.text()))
        )
      ).filter((text) => !text.startsWith("404"))?.[0] || undefined;

    if (!markdown) {
      return await ctx.render();
    }

    const markup = Marked.parse(markdown);

    return await ctx.render({ html: markup.content });
  },
};

export default function Path({ data }: PageProps<{ html?: string }>) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      {data.html ? (
        <div
          class={tw`prose`}
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
      ) : null}
    </div>
  );
}
