/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    const registers = {}; // Diccionario para almacenar los registros
    const parsedInstructions = []; // Instrucciones preprocesadas
  
    // Preprocesar las instrucciones
    for (let i = 0; i < instructions.length; i++) {
      const [instruction, arg1, arg2] = instructions[i].split(' ');
      parsedInstructions.push({ instruction, arg1, arg2 });
    }
  
    let pointer = 0; // Índice de la instrucción actual
  
    while (pointer < parsedInstructions.length) {
      const { instruction, arg1, arg2 } = parsedInstructions[pointer];
  
      switch (instruction) {
        case 'MOV':
          // Usar acceso directo para evitar conversiones repetidas
          registers[arg2] = isNaN(arg1) ? (registers[arg1] || 0) : +arg1;
          break;
  
        case 'INC':
          // Incremento directo sin comprobación redundante
          registers[arg1] = (registers[arg1] || 0) + 1;
          break;
  
        case 'DEC':
          // Decremento directo sin comprobación redundante
          registers[arg1] = (registers[arg1] || 0) - 1;
          break;
  
        case 'JMP':
          // Salto directo, ajustando el puntero solo si es necesario
          if ((registers[arg1] || 0) === 0) {
            pointer = +arg2 - 1;
          }
          break;
  
      }
  
      pointer++; // Avanzar a la siguiente instrucción
    }
  
    return registers['A']; // Devolver el valor del registro A (o undefined si no existe)
}

// EXAMPLES TESTS

const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2

/**
 Ejecución paso a paso:
0: MOV -1 C -> El registro C recibe el valor -1
1: INC C    -> El registro C pasa a ser 0
2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
1: INC C    -> El registro C pasa a ser 1
2: JMP C 1  -> C es 1, ignoramos la instrucción
3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
4: INC A    -> El registro A pasa a ser 2
*/