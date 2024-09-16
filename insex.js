function insertionSort(arr) {
   
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
  
    
      while (j >= 0 && arr[j] > arr[i]) {
        arr[j + 1] = arr[j]; 
        j = j - 1;
      }
  
      arr[j + 1] = arr[i];
    }
    
    return arr;
  }
  
 
  let arr = [8, 1, 4, 9, 6, 3, 5, 2, 7, 0];
  console.log("Tableau trié:", insertionSort(arr));
  