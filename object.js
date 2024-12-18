function user(name, age) {
    let data = {
        name,
        age
    }
    return data;
}
console.log(user("rohit", 23));


function user(name, age, gender) {
    let salutation;

    
    if (gender === "Male") {
        salutation = "Mr.";
    } else if (gender === "Female") {
        salutation = "Mrs.";
    } else {
        salutation = "Others";
    }

    
    let greeting = `Hi ${salutation} ${name}, your age is ${age}`;
    console.log(greeting);

    return { name, age, gender };
}

console.log(user("rohit", 23, "Male"));

function user(name, age, gender) {
    let salutation;

 
    if (gender === "Male") {
        salutation = "Mr.";
    } else if (gender === "Female") {
        salutation = "Mrs.";
    } else {
        salutation = "Others";
    }


    let voteMessage = age >= 18 ? "You are eligible to vote." : "You can't vote.";

   
    let greeting = `Hi ${salutation} ${name}, your age is ${age}. ${voteMessage}`;
    console.log(greeting);


    return { name, age, gender };
}

console.log(user("rohit", 23, "Male"));
console.log(user("harkirat", 33, "Male"));
console.log(user("alex", 17, "Others"));
