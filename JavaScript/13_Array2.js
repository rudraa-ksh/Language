const heros =["thor", "Ironman","Spiderman"]
const DC_heros=["superman","flash","wonderwomen"]

console.log(heros+DC_heros);
heros.push(DC_heros);
console.log(heros);
console.log(DC_heros);
const extra = ["shaktiman", "nagraj"]
const Allheros = extra.concat(DC_heros);
console.log(Allheros);

const allheros = [...Allheros, ...Allheros]
console.log(allheros);

const another_array = [1,2,34,[1,2,3,4,[1,2,3,4,5]]]
const usablearray = another_array.flat(Infinity)
console.log(usablearray);

console.log(Array.isArray("Rudra"));
console.log(Array.from("Rudra"));


console.log(Array.of(125,563,258));