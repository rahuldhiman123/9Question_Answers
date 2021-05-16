// In Question NO. 8, there is an Object array of obj. and it is wrong.  Object provided by you.
// var obj = {
//  “id” : 4, “name” : “abc”,
//  “id” : 10, “name” : “ab2”,
//  “id” : 5, “name” : “abc3”,
//  “id” : 6, “name” : “abc5”
// }
 
// As per my knowledge object is as 
var obj = [
 {id : 4, name : "abc"},
 {id : 10, name : "ab2"},
 {id : 5, name : "abc3"},
 {id : 6, name : "abc5"}
]


// If I use second one json object then we can sort it by id.
obj.sort((a, b) => {
    return a.id - b.id;
});
obj.forEach((e) => {
    console.log(`${e.id} ${e.name}`);
});
