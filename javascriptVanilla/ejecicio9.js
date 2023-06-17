



let addOnlyNums = (...args) => {
    let sum = 0;
  
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === "number") {
        sum += args[i];
      }
    }
  
    return sum;
  };
  
  console.log(addOnlyNums(1, 2, 3, 4, 5, 6, 7, 8, 9, "Miracle", "Lab", "Tyrion", "Lannister"));
  