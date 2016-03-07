const uid = require('.');
uid(20).then(function (str) {
  console.log('random uid:', str);
});
