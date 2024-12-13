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