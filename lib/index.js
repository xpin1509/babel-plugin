var obj = {
  name: 'xiaoming',
  say: function say() {
    console.log(this.name);
  }
};

var say = function say() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'xubin';
  return new Promise(function (resolve, reject) {
    resolve(name);
  });
};

var arr = [[1, 2[(3, [5, 6])]], 4].flat(); // function numToChar (num) {
//     if (typeof num !== 'number' || num >= 10000 || num <= 0) return num
//     const charList = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
//     const unitList = ['十', '百', '千', '万']
//     const result = []
//     const numArr = (num + '').split('').reverse()
//     const len = numArr.length
//     for (let i = 0; i < len; i++) {
//         const char = numArr[i]
//         const chinaChar = charList[char]
//         const unit = i > 0 ? unitList[i - 1] : ''
//         let res = chinaChar + unit
//         // 两位时 '一十'
//         if (res === '一十' && len === 2) {
//             res = '十'
//         }
//         // 去 '零十'
//         if (res.indexOf('零') === 0 && res.length === 2) {
//             res = '零'
//         }
//         // 去末尾零，去零零
//         if (res === '零' && (result.length === 0 || result[0] === '零')) {
//             continue
//         }
//         result.unshift(res)
//     }
//     return result.join('')
// }