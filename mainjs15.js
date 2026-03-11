


let students = [
 {name : "Amina", age: 22, id: 243432 },
 {name : "xamda", age: 22, id: 243432 },
 {name : "khadra", age: 52, id: 555444 },
 {name : "naima", age: 52, id: 55555 }
]

for (let student of students){
  for(let key in student){
    console.log(key + ": " + student[key])
  }
}