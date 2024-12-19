export default function listGifts(letter) {
    // Elimina espacios en los extremos, divide los objetos por espacios y elimina articulos tachados _
    const validGifts = letter.trim().split(' ').filter((gift) => !gift.startsWith('_'))
    return validGifts.reduce((result, gift) => {
     if (!result[gift]){
       result[gift] = 0;
     }
       result[gift]++;
     return result
   }, {})
}

// EXAMPLES TESTS

const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/