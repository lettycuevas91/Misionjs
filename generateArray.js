function generateArray(long) {
    return Array.from(
      { length: long },
      (_, i) =>
        function () {
          return i;
        }
    );
  }
  
  let arr = generateArray(5);
  
  console.log(arr[0]()); 
  console.log(arr[1]()); 
  console.log(arr[2]());