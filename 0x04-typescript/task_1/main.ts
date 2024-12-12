interface teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    contract: boolean;
};

const teacher3: teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
    
};
console.log(teacher3);