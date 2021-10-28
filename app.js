// Task #1
const currentDay = new Date().getDay(); 
currentDay[0] = "კვირა";
currentDay[1] = "ორშაბათი";
currentDay[2] = "სამშაბათი";
currentDay[3] = "ოთხშაბათი";
currentDay[4] = "ხუთშაბათი";
currentDay[5] = "პარასკევი";
currentDay[6] = "შაბათი";
// console.log(day);

switch (currentDay) {
    case 0:
        console.log('კვირა');
        break;
    case 1:
        console.log('ორშაბათი');
        break;
    case 2:
        console.log('სამშბათი');
        break;
    case 3:
        console.log('ოთხშაბათი');
        break;
    case 4:
        console.log('ხუთშაბათი');
        break;
    case 5:
        console.log('პარასკევი');
        break;
    case 6:
        console.log('შაბათი');
        break;
};
    

// Task#2
for (let i = 0; i < 100; i++) {
    console.log(`for loop index ${i}`);
};


// Task#3
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i = 0;
while (i < 50) {
    i++
    console.log(`numb: ${i}`);
};


// Task#4
// let result = `150`;
let iresult = 0;

do {
    // i = i + 1;
    // result = result + i;
    iresult++
    console.log(`num: ${[iresult]}`);
}
while(iresult < 150);

// Task#5
const numVar = [];
for (let i = 0; i < 1000; i++){
    numVar.push(i * i)
};
    console.log(numVar);

// Task#6

// let numAray = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
// for (let i = 0; i < 11)