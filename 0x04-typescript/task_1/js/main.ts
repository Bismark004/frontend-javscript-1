interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    contract: boolean;
};

const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
    
};
 
interface Directors  {
    firstName: string;
    lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    numberOfReport: number;
}

const director1: Directors = {
    firstName: "Jane",
    lastName: "Smith",
    location: "New York",
    fullTimeEmployee: true,
    numberOfReport: 10,
};

interface printDirectorFunction {
    (firstName: string, lastName: string): string;
}

const printDirector: printDirectorFunction = (firstName, lastName) => {
    return firstName.charAt(0) + '.' + lastName;
}

console.log(printDirector('Alice','Johnson'));

//interface studentConstructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

//Interface for the class 
interface StudentClassInterface {
    workOnHomeWork(): string;
    displayName: string;
}

//Class implementation
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    displayName: string; // Added missing property

    constructor({firstName, lastName}: StudentConstructor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.displayName = `${this.firstName} ${this.lastName}`; // Added initialization for displayName
    }

    workOnHomeWork(): string {
        return this.firstName;
    }
}

