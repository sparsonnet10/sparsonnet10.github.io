//problem 1 
let employeeData = [
    {"name": "sam","department": "Tech", "designation": "Manager", "salary": "40000", "raise eligible": "true"}, 
    {"name": "mary", "department": "Finance", "designation": "Trainee", "salary": "18500", "raise eligible": "true"},
    {"name": "bill", "department": "HR", "designation": "Executive", "salary": "21000", "raise eligible": "false"}, 
    {"employees":["sam", "mary", "bill"]}
]
//console.log(data[1]["department"])

// Problem 2
let company = [
   {"companyName": "Techstars", 
    "website": "www.techstars.site",
    "employees": employeeData} 
]
//console.log(employeeData)

//Problem 3 
let employeeData2 = [
    {"name": "sam","department": "Tech", "designation": "Manager", "salary": "40000", "raise eligible": "true"}, 
    {"name": "mary", "department": "Finance", "designation": "Trainee", "salary": "18500", "raise eligible": "true"},
    {"name": "bill", "department": "HR", "designation": "Executive", "salary": "21000", "raise eligible": "false"}, 
    {"name": "anna", "department": "tech", "designation": "executive", "salary": "25600", "raise eligible": "false"},
    {"employees":["sam", "mary", "bill", "anna"]}
]

//Problem 4 
let arr = employeeData2["salary"]

let sum = 0;

for (let i =0; i < employeeData2; i++) {
    sum += arr[i];
}

console.log("sum is " + employeeData2["salary"]);