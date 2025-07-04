interface User{
    name: string,
    email?: string,
    age: number
}

function greet(user: User){
    console.log("Hi! " + user.name);
}

greet({
    name: "kartik tyagi",
    age: 24
})

export{}
