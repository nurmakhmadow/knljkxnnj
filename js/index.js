let arr = ['mexrshod',  [[['emin','samir'], 'jafar']]]

const flaten = (arr) => {
    let massiv = [...arr];
    let result = [];
  
    while (massiv.length) {
      let item = massiv.pop();
  
      if (Array.isArray(item)) {
        massiv.push(...item);
      } else {
        result.push(item);
      }
    }
  
    return result.reverse();
  }
  console.log(flaten(arr));

  