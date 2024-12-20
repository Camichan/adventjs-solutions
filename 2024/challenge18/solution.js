/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    // Expresión regular para encontrar números de teléfono
    const phoneRegex = /\+[\d-]+/g;
    // Expresión regular para encontrar el nombre entre < y >
    const nameRegex = /<([^>]+)>/g;
  
    // Almacenamos los resultados en un array para iterar sobre ellos
    const phones = [...agenda.match(phoneRegex)];
    const names = [...agenda.match(nameRegex)].map(name => name.slice(1, -1)); // Eliminar los signos < y >
    // Eliminar nombre y teléfono de la agenda y dividir el resto en direcciones
    const addresses = agenda
      .replace(nameRegex, '')      // Eliminar los nombres
      .replace(phoneRegex, '')     // Eliminar los números de teléfono
      .split(/\s{2,}/)             // Dividir en direcciones, considerando al menos 2 espacios
      .map(address => address.trim()); // Eliminar posibles espacios extra al inicio o final
  
    // Buscamos coincidencias que contengan el número de teléfono proporcionado
    const results = [];
    for (let i = 0; i < phones.length; i++) {
      if (phones[i].includes(phone)) {
        results.push({
          name: names[i],
          address: addresses[i]
        });
      }
    }
  
    // Si encontramos más de una coincidencia, retornamos null
    if (results.length === 1) {
      return results[0];
    }
  
    return null; // Si no hay coincidencias o hay más de una
}


// EXAMPLES TESTS

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explicación: No hay resultados

findInAgenda(agenda, '1')
// null
// Explicación: Demasiados resultados