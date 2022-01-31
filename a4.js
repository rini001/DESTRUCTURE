var arr = [100, [50, 60, 70]]; 

const [el1, [el2, ...n] ] = arr;
console.log(el2);