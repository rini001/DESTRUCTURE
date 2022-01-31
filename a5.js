var array = [
	1,
	{
		arr: [1, 2, 3],
	},
]; 


const [el1, { arr:[el2, el3, el4]}] = array;
console.log(el2,el3);