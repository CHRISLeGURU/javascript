const arrayOriginal = [33, 49, 9, 16, 35];

// a function that takes an array and return a string of elements
const toString = (tab) => {
    const tabclone = tab.join(", ");
    return "[" + tabclone + "]";
}

console.log(toString(arrayOriginal));


// a function that takes an array and performs a trie starting by biggest elements of the arrat
const sort = (tab) => {
    // an empty array at the beginning, it will be useful while perming the sort
    let cloneA = [];

    tab.forEach((element) => {
        cloneA.push(element);
    });

    // sort
    cloneA.sort((a,b) => {
        if(a > b){
            return -1;
        }else if (a < b) {
            return 1;
        }else {
            return 0;
        }
    })
    // return the final array after sorting
    return cloneA;
}  

console.log(sort(arrayOriginal));


// A function that takes an array and return the total of all elements
const arrayTotal = (tab) => {
    let result = 0; // will store the result while lopping
    
    tab.forEach((element) => {
        result = result + element;
    });

    return result;
}

console.log(arrayTotal(arrayOriginal));

// A function that takes an array of number and return the maximum
const maximumEl = (tab) => {
    let max = tab[0];  // will keep tracing the biggest elelements

    tab.forEach((element) => {
        if (element > max) {
            max = element;
        }
    })

    return max;
} 

console.log(maximumEl(arrayOriginal));

// A function that takes an array and return the index of the biggest elements
const arrayIndex = (tab) => {
    let max = tab[0];
    let indexM = 0;

    tab.forEach((el, index) => {
        if (el > max) {
            max = el;
            indexM = index;
        }
    })

    return indexM;
}

console.log(arrayIndex(arrayOriginal));


// Average
const averageF = (tab) => {
    let result = 0; // will store the result while lopping
    tab.forEach((element) => {
        result = result + element;
    });

    let averageV = result / tab.length;
    return averageV;
}

console.log(averageF(arrayOriginal));
