import './style.scss';

async function test() {
  return new Promise((res) => {
    setTimeout(() => {
      res(5);
    }, 10000);
  });
}

test().then((data) => console.log(data));
