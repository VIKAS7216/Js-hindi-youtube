let marvel_heros = ["thor","Ironman","Hulk"]
let dc_heros = ["Batman","superman","flash"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//push changes the original array 
let new_heros = marvel_heros.concat(dc_heros)
console.log(new_heros);
// concat makes a new array (does not change existing array)

// spread function(...)
let all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_array = another_array.flat(Infinity)
console.log(usable_array);

console.log(Array.isArray("Vikas"))
console.log(Array.from("Vikas"))
console.log(Array.from({name : "Vikas"}))
// last one returns an empty string because cannot change directly from objects
score1 = 200
score2 = 500
score3 = 300
console.log(Array.of(score1,score2,score3));




