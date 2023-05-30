const array = [[12,3,4],[0,0,0],[23,5,6],[123,'6',-5],[0,'0','O',1],['test']]

let a = '5';
let a1 = 'test';
console.log(typeof(a1))
let b = Number(a);
let c = Number(a1);
console.log(b)
console.log(c)
console.log(typeof(c))
const func = (x) => {
    let obj = [];
  for (let i = 0; i <= x.length - 1; i += 1) {
    let sum = 0
    for (let j = 0; j <= x[i].length -1; j += 1) {
        console.log(Number(x[i][j]))
        if (!isNaN(Number(x[i][j]))) {
            console.log(isNaN(Number(x[i][j])))
            sum += Number(x[i][j])
        } else {
            sum += 0
        }
    }
    obj.push([sum])
  }
  return obj
}
console.log(func(array))