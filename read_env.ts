import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

const env = await load();
const password = env["PASSWORD"];

debugger;

console.log(password);
console.log(env["DENO_AUTH_TOKENS"]);

// "Geheimnis"