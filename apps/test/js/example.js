console.log(process.platform)
// win32


// mojule export
'use strict'; // strictモード：　宣言すると関数などをstrict（厳格）モードで実行
function greet(name) {
  console.log("hello world");
}
greet('yoshida');
greet('Great Asaano');

mojule.exports = greet;
// モジュールのインポートは
// 'use strict;
// const greet = require('./greet');
// greet('yoshida');