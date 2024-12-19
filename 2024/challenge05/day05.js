/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    let sizes = {};
      
      shoes.map(shoe => {
        sizes[shoe.size] ??= "";
        sizes[shoe.size] += shoe.type;
      })
    
      return Object.keys(sizes).map(size => {
        let r = sizes[size].match(/R/g)?? [];
        let i = sizes[size].match(/I/g)?? [];
        const pairs = Math.min(r.length, i.length);
        return (Array(pairs).fill(+size))
      }).flat()
}

// EXAMPLES TESTS

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
{ type: 'I', size: 38 },
{ type: 'R', size: 38 },
{ type: 'I', size: 38 },
{ type: 'I', size: 38 },
{ type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
{ type: 'I', size: 38 },
{ type: 'R', size: 36 },
{ type: 'R', size: 42 },
{ type: 'I', size: 41 },
{ type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []