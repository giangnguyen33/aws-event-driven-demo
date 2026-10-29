import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("repository tooling", () => {
  it("keeps strict TypeScript enabled", () => {
    const config = JSON.parse(readFileSync(new URL("../tsconfig.json", import.meta.url), "utf8"));

    expect(config.compilerOptions.strict).toBe(true);
  });

  it("declares app and package npm workspaces", () => {
    const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

    expect(manifest.workspaces).toEqual(["apps/*", "packages/*"]);
  });
});
