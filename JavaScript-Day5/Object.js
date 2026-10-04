//literal way

let empDetails={
    name:"Bapatla Kavya Sri",
    role:"developer",
    salary:250000,
    skills:["System design","Microservices","Monolithic Architecture","Even driven","Database Design"],
    address:{
        city:"Guntur",
        zipcode:522006
    }
}
console.log(empDetails);


//using new keyword

let emp2=new Object({
    name:"Bapatla Kavya Sri",
    role:"developer",
    salary:250000,
    skills:["System design","Microservices","Monolithic Architecture","Even driven","Database Design"],
    address:{
        city:"Guntur",
        zipcode:522006
    }
})
console.log(emp2);


//crud operations

console.log("---------- CRUD OPERATIONS ----------------------");
console.log(empDetails.name);
console.log(empDetails.skills[1]);

//print skills using map function
empDetails.skills.map((s)=>{
    console.log(s);
})

console.log(empDetails.address.city);
Object.seal(empDetails); // we can update values but we cant do insert or delete
Object.freeze(empDetails); // we cant do any crud operations we just view the data
console.log(Object.isFrozen(empDetails));
empDetails.email="kavya@tcs.com";
empDetails.phone=952352525;
delete empDetails.skills;
delete empDetails.name;
empDetails.salary=20000;
//Object Inbuilt functions

console.log("********************************* OBJECT INBUILT FUNCTION ******************************");
console.log(Object.keys(empDetails));
console.log(Object.values(empDetails));
console.log(Object.entries(empDetails));

