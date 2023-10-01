// // function test() {
// //   const result = [];
// //   const content =
// //     document.querySelector('.details-list').lastElementChild.children;
// //   [...content].forEach((row) => {
// //     const zakPrice = +row.children[17].textContent;
// //     const prodPrice = +row.children[19].textContent;
// //     const diff = (prodPrice / zakPrice - 1) * 100;
// //     if (diff < 4) {
// //       const data = {
// //         order:
// //           row.children[6].firstElementChild.firstElementChild.textContent.slice(
// //             2
// //           ),
// //         article: row.children[10].firstElementChild.textContent,
// //         sum: prodPrice,
// //       };
// //       result.push(data);
// //     }
// //   });
// //   return JSON.stringify(result);
// // }

// // test();

// const result = [
//   { order: '388808', article: 'KTBWP12080', sum: 397.5 },
//   { order: '388063', article: '171754', sum: 464.5 },
//   { order: '388044', article: 'F020T620ZA30', sum: 379.4 },
//   { order: '388043', article: '7374030', sum: 636 },
//   { order: '387332', article: '7121380SX', sum: 18.5 },
//   { order: '387324', article: '417105400', sum: 1 },
//   { order: '387295', article: '59116', sum: 314.8 },
//   { order: '386325', article: '357837242', sum: 1.2 },
//   { order: '385537', article: '5521134LMLDEM5', sum: 313.2 },
//   { order: '384891', article: 'LRC1402', sum: 709.8 },
//   { order: '384888', article: '1025045SX', sum: 149.4 },
//   { order: '384030', article: '27532', sum: 0.8 },
//   { order: '384021', article: '0445110435', sum: 970.2 },
//   { order: '382349', article: '6455GY', sum: 357.5 },
//   { order: '382314', article: '21080350103200', sum: 1 },
//   { order: '381932', article: '401246', sum: 13.5 },
//   { order: '381923', article: '42140050SX', sum: 85.2 },
//   { order: '381923', article: '42140049SX', sum: 86.6 },
//   { order: '381852', article: '67156A', sum: 386.1 },
//   { order: '381441', article: '1160500083HD', sum: 1598.9 },
//   { order: '381431', article: 'L3K9124X0C', sum: 319.7 },
//   { order: '380744', article: '530007831', sum: 335.1 },
//   { order: '379221', article: 'LFAC26E5', sum: 401.6 },
//   { order: '377188', article: '1080015SX', sum: 460 },
//   { order: '375145', article: '46237A4600', sum: 1.6 },
//   { order: '371274', article: 'N0438092', sum: 2.5 },
// ];

// const list = result.forEach((el) => {
//   console.log(`Заказ №:${el.order}, артикул: ${el.article}, цена: ${el.sum}`);
// });

// const generalSum = result.reduce((acc, curr) => acc + curr.sum, 0);
// console.log(generalSum);
