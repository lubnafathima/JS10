function userDetails() {
    let user = {
        name: "Lubna",
        location: "Chennai",
        college: "MSAJCE",
        country: "India",
    }
    return user;
}

let printUser = userDetails();

// console.log(printUser.location);
// console.log(printUser.country);

// printUser.course = "Code Pitch";
// printUser.location = "BLR";
// delete printUser.country;

console.log(printUser);

for(let key in userData){
    console.log(key + ' is ' + userData[key]);
}