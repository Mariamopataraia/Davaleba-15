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
for (let i = 0; i < 101; i++) {
    console.log(`for loop index ${i}`);
};

// Task#3
