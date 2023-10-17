// deno run -A hello.ts
interface Person {
    firstName: string,
    lastName: string
}

function sayHello(p: Person): string {
    return `Hello, ${p.firstName}!`;
}

const ada: Person = {
    firstName: "Ada",
    lastName: "Lovelace"
};

async function logSiteText() {
    const site = await fetch("https://www.deno.com");
    console.log(await site.text());
}

console.log(sayHello(ada));
logSiteText();