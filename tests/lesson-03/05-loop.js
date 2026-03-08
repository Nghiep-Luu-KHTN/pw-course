//Bai 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

//Bai 2
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("-------------");
}

//Bai 3
let arr = [];
for (let i = 1; i <= 99; i++) {
    if(i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);

//Bai 4
let email = {
    username: ["stevie", "alice", "bob", "charlie"],
    number: [1, 2, 3, 4]
}
for (let i = 0; i < email.username.length; i++) {
    console.log(`${email.username[i]}${email.number[i]}@example.com`);
}

//Bai 5
const revenue = {
    month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    total: [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500]
};
let totalRevenue = 0;
for (let i = 0; i < revenue.month.length; i++) {
    totalRevenue = totalRevenue + revenue.total[i];
}
console.log(totalRevenue);