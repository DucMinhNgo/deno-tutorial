import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "127.0.0.1",
  port: 3333,
  username: "root",
  db: "dbname",
  password: "password",
});

console.log(client);
