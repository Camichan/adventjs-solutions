export default function pangram(letter) {
    const alphabet = 'abcdefghijklmñnopqrstuvwxyz'.split('');
    const ntilde = '&ntilde';
    const letterTranformed = letter
        .toLowerCase()  //todo minusculas
        .replaceAll('n', ntilde)
        .normalize('NFD').replace(/\p{Diacritic}/gu, '') // quita acentos
        .replaceAll(ntilde, 'ñ')
    return alphabet.every(char => letterTranformed.includes(char))
}

// EXAMPLES TESTS

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false