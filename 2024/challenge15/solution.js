/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    if (!data.length) return ''; // Si el array está vacío, no se dibuja nada.
  
    // Extraer nombres de columnas y calcular sus longitudes.
    const columns = Object.keys(data[0]);
    const columnWidths = columns.map(col => 
      Math.max(col.length, ...data.map(row => String(row[col]).length))
    );
  
    // Generar la cabecera de la tabla.
    const header = columns.map((col, i) => 
      ` ${col.charAt(0).toUpperCase() + col.slice(1)} `.padEnd(columnWidths[i] + 2)
    ).join('|');
  
    // Generar líneas horizontales.
    const horizontalLine = '+' + columnWidths.map(w => '-'.repeat(w + 2)).join('+') + '+';
  
    // Generar filas de datos.
    const rows = data.map(row => 
      columns.map((col, i) => 
        ` ${String(row[col])} `.padEnd(columnWidths[i] + 2)
      ).join('|')
    );
  
    // Combinar todo para formar la tabla.
    return [
      horizontalLine,
      `|${header}|`,
      horizontalLine,
      ...rows.map(row => `|${row}|`),
      horizontalLine
    ].join('\n');
}
  
// EXAMPLES TESTS
  
drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
    { gift: 'Doll', Quantity: 10 },
    { gift: 'Book', Quantity: 5 },
    { gift: 'Music CD', Quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+