export default function contains(store, product) {
    return new RegExp(`:"${product}"`, 'i').test(JSON.stringify(store));
}

// EXAMPLES TESTS

const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
'baul': {
    'fondo': {
    'objeto': 'cd-rom',
    'otro-objeto': 'disquette',
    'otra-cosa': 'mando'
    }
}
}

contains(otroAlmacen, 'gameboy') // false