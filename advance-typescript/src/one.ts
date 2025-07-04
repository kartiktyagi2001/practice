interface User{
    name: string;
    age: number;

}

//Pick
type updateUser = Pick<User, 'name'>  //it refs to name of user maintianing single source of truth

//Partial

//Readonly

//Record

//Map

//Exclude

//Type Inference in zod

// function ageSum(kannu: User, chirag: User) {
//     return kannu.age+ chirag.age;
// }

// const a = ageSum({name: "kannu",age: 24}, {name: "chirag",age: 18});