async function test() {
  const res = await fetch('sandbox/src/observer/quotes.json');
  console.log(res);
}

test();
