function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for(j = i - 1; j >=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal
    }
    return arr
  }

insertionSort([4,7,8,1,1,1,1,1,2,3,4,2,1])

