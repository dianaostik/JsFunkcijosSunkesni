

// 3 uzduotis
console.log("--------- 3 uzduotis ------------");


let str = 0;
let r = 0;

for (let i = 0; i < 10; i++) {
    r = (Math.random() + 2).toString(36).substring(2);
    str = str + r;
}
console.log(str);


let withoutNum = digitsBeGone(str);

function digitsBeGone(a) {
    return a.replace(/\D/g, '');
}

console.log(withoutNum);
document.getElementById("stringas").innerHTML = withoutNum;




// 4 uzduotis  
console.log("--------- 4 uzduotis ------------");


console.log(numSum(30));

function numSum(number) {
    let sum = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            sum++;
        }
    }
    return sum;
}






// 5 uzduotis
console.log("--------- 5 uzduotis ------------");

let arr = [];
for (let a = 0; a < 100; a++) {
    arr[a] = Math.round(33 + Math.random() * 44);
}
console.log(arr);



let somearr;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (numSum(arr[i]) < numSum(arr[j])) {
            somearr = arr[i];
            arr[i] = arr[j];
            arr[j] = somearr;
        }
    }
}
console.log(arr);





// 6 uzduotis 
console.log("--------- 6 uzduotis ------------");

let newArr = [];
for (let b = 0; b < 100; b++) {
    newArr[b] = Math.round(Math.random() * 10);
}
console.log(newArr);

let array = [];
let element = 0;
for (let x = 0; x < newArr.length; x++) {
        if (numSum(newArr[x]) > 0) {
            array.push(newArr[x]);
        }
}
console.log(array);





// 7 uzduotis
console.log("--------- 7 uzduotis ------------");


let firstArr = [];
let arrLngth = Math.round(10 + Math.random() * 10);
for (let e = 0; e < arrLngth; e++) {
    if (e < arrLngth - 1) {
        firstArr[e] = Math.round(Math.random() * 10);
    } else {
        firstArr[e] = 0;
    }
}
console.log(firstArr);

let secondArr = [];
let arrLngth2 = Math.round(10 + Math.random() * 30);
for (let r = 0; r < arrLngth2; r++) {
    if (r < arrLngth2 - 1) {
        secondArr[r] = Math.round(Math.random() * 10);
    } else {
        secondArr[r] = 0;
    }
}
console.log(secondArr);



// 8 uzduotis
console.log("--------- 8 uzduotis ------------");

let fullSum = 0;

function elemSum(array) {
    let theArray = array;
    let elementSum = 0
    while (true) {
        for (let i = 0; i < theArray.length; i++) {
            if (i < theArray.length - 1) {
                elementSum += theArray[i];
            } else {
                theArray = theArray[i];
            }
        }
        if (theArray == 0) {
            break;
        }
    }
    return elementSum
}

fullSum = elemSum(firstArr) + elemSum(secondArr);
console.log("Pirmo masyvo elementu suma:  " + elemSum(firstArr));
console.log("Antro masyvo elementu suma:  " + elemSum(secondArr));
console.log("Bendra suma:                 " + fullSum);




// 9 uzduotis Neteisingai skaciuoja pirminius skaicius
console.log("--------- 9 uzduotis ------------");


let shortArr = [];
for (let t = 0; t < 3; t++) {
    shortArr[t] = Math.round(1 + Math.random() * 32);
}
console.log(shortArr);

while (true) {
    let numbers = false;
    for (let u = shortArr.length - 1; u >= shortArr.length - 3; u--) {
        if (shortArr[u] % u == 2) {
            numbers = true;
            break;
        } else {
            shortArr.push(Math.round(1 + Math.random() * 32 + 1))
        }
    }
    if (!numbers) {
        console.log(shortArr);
        break;
    }
}




