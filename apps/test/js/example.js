console.log(process.platform)
// win32


// mojule export
'use strict'; // strict���[�h�F�@�錾����Ɗ֐��Ȃǂ�strict�i���i�j���[�h�Ŏ��s
function greet(name) {
  console.log("hello world");
}
greet('yoshida');
greet('Great Asaano');

mojule.exports = greet;
// ���W���[���̃C���|�[�g��
// 'use strict;
// const greet = require('./greet');
// greet('yoshida');