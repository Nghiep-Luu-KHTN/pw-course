//Bai 1
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year);

//Bai 2
let person = {
    name: "Stevie",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "VN"
    }
}
console.log(person.address.street);

//Bai 3
let student = {
    name: "Alice",
    grades: {
        math: 90,
        english: 100
    }
}
console.log(student["grades"]["math"]);

//Bai 4
let settings = {
    volume: 50,
    brightness: 70
}
settings.volume = 80;
console.log(settings.volume);

//Bai 5
let bike = {
    brand: "Giant",
    type: "Mountain"
}
bike.color = "Red";
console.log(bike);

//Bai 6
let employee = {
    name: "Bob",
    age: 43
}
delete employee.age;
console.log(employee);

//Bai 7
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}
