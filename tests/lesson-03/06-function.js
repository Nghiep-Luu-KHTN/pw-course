//Bai 1
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3));
console.log(multiply(10, 6));

//Bai 2
function findMin(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else {
        return c;
    }
}
console.log(findMin(6, 43, 40));
console.log(findMin(532, 756, 243));

//Bai 3
function getTopStudents(students, threshhold) {
    return students.filter(student => student.score >= threshhold);
}
let students = [
        { name: "Alice", score: 83 },
        { name: "Bob", score: 92    },
        { name: "Charlie", score: 78 },
        { name: "David", score: 95 }
    ];
console.log(getTopStudents(students, 90));

//Bai 4
function calculateInterest(principal, rate, years) {
    return principal + (principal * rate * years) / 100;
}
console.log(calculateInterest(2000, 5, 3));