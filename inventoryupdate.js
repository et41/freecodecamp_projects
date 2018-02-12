function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let arr_new = [];
    let arr_copy= arr2.slice(0);
    //compare two arrays then create an array with compared values
    for(let i = 0 ; i < arr1.length ; i++){
        let cnt = 0;
        for(let j = 0; j < arr2.length ; j++){
            if(arr1[i][1] == arr2[j][1]){
                arr_new.push([arr1[i][0]+arr2[j][0], arr1[i][1]]);
                arr_copy.splice(j,1);
            }
             else{
                cnt++;
            }
        }
        if(cnt === arr1.length){
             arr_new.push([arr1[i][0], arr1[i][1]]);
          
        }
    }
    //emerge two array
    arr_new= arr_new.concat(arr_copy);
    //sort last array by alphabetical order
    let arr_sorted = arr_new.sort(function(a,b){
        if ( a[1][0] <  b[1][0])
                return -1;
        if ( a[1][0] >  b[1][0])
                 return 1;
        return 0;
    });
    //check empty arr2
     if(arr2.length === 0){
        return arr1;
    }else{
        arr1 = arr_sorted;
    }
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
/*updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"],
 [5, "Microphone"]], []);  
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"],
 [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"],
[3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
  // should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"],*/
