import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();

export async function resolve(specifier, context, nextResolve) {
  if (!specifier.startsWith("@/")) {
    return nextResolve(specifier, context);
  }

  const basePath = path.join(projectRoot, "src", specifier.slice(2));
  const candidates = [basePath, `${basePath}.js`, `${basePath}.jsx`, path.join(basePath, "index.js")];
  const resolvedPath = candidates.find((candidate) => fs.existsSync(candidate));

  if (!resolvedPath) {
    throw new Error(`Unable to resolve ${specifier} from ${context.parentURL ?? "the project root"}`);
  }

  return {
    shortCircuit: true,
    url: pathToFileURL(resolvedPath).href,
  };
}
