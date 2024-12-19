/** 
 * @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    // Mapeo de adornos con sus valores
    const values = {
      '*': 1,
      'o': 5,
      '^': 10,
      '#': 50,
      '@': 100,
    };
  
    // Variables iniciales
    let total = 0;
    let previousValue = 0;
  
    // Procesar cada adorno
    for (const ornament of ornaments) {
      const currentValue = values[ornament];
  
      // Si encontramos un adorno desconocido, devolvemos undefined
      if (currentValue === undefined) return undefined;
  
      // Aplicar la regla de resta o suma
      if (previousValue < currentValue) {
        // Restamos el valor previo (ya sumado) y añadimos su versión negativa
        total -= 2 * previousValue;
      }
  
      total += currentValue;
      previousValue = currentValue;
    }
  
    return total;
}

calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z es desconocido)