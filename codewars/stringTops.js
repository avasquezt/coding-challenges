// P -> msg: message with the characters
// R -> str: string with the local tops
// E -> 
//     '12' -> '2'
//     'abcdefghijklmnopqrstuvwxyz12345' -> '3pgb'
//     'abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN' -> 'M3pgb'
// P ->    local top positions: 2, 7, 16, 29,
//         acc + 4 * i + 1

// function tops(msg) {
//     let ans = '';
//     for (let i = 1, acc = 1; acc < msg.length; i++){
//       ans += msg[acc];
//       acc += 4 * i + 1;
//     }
//     return ans.split('').reverse('').join('');
//   }

function tops(msg) {
    let ans = '';
    for (let i = 1, acc = 1; acc < msg.length; i++){
      ans = msg[acc] + ans;
      acc += 4 * i + 1;
    }
    return ans.split('').reverse('').join('');
  }