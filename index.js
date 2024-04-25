const chalk = import("chalk").then(m=>m.default);

async function main(){
  console.log((await chalk).green("hello"));
}

main();
