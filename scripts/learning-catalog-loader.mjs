import fs from "node:fs";
import { resolve as resolveAlias } from "./esm-alias-loader.mjs";
export async function resolve(specifier, context, nextResolve) {
  try { return await resolveAlias(specifier, context, nextResolve); }
  catch (error) {
    if (error.code !== "ERR_MODULE_NOT_FOUND" || !specifier.startsWith(".")) throw error;
    const url = new URL(specifier + ".js", context.parentURL);
    if (!fs.existsSync(url)) throw error;
    return nextResolve(url.href, context);
  }
}
