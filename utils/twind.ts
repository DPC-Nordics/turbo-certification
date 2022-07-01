import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import typographyPlugin from "https://esm.sh/v86/@twind/typography@0.0.2/es2021/typography.js";

export * from "twind";

export const config: Configuration = {
  mode: "silent",
  plugins: {
    ...typographyPlugin(),
  },
};

if (IS_BROWSER) setup(config);
