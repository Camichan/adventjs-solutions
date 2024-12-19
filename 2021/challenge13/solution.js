export default function wrapGifts(gifts) {
    const wrap = '*'.repeat(gifts[0].length);
    return [wrap, ...gifts, wrap].map(item => `*${item}*`);
}

// EXAMPLES TESTS

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/