function join (arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const merged = {};
  
    combinedArray.forEach((obj) => {
      const id = obj.id;
      if (!merged[id]) {
        merged[id] = { ...obj };
      } else {
        merged[id] = { ...merged[id], ...obj };
      }
    });
  
    return Object.values(merged)
}

/**
* let arr1 = [{"id": 1, "x": 1}, {"id": 2, "x": 9}];
* let arr2 = [{"id": 3, "x": 5}];
* console.log(join(arr1, arr2)); // [ { id: 1, x: 1 }, { id: 2, x: 9 }, { id: 3, x: 5 } ]
*/