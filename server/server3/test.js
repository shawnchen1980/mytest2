/*
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]

countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

difference([1, 2, 3], [1, 2, 4]); // [3]

differenceWith([1, 1.2, 1.5, 3], [1.9, 3], (a, b) => Math.round(a) == Math.round(b)); // [1, 1.2]

distinctValuesOfArray([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]

dropElements
Removes elements in an array until the passed function returns true. Returns the remaining elements in the array.
dropElements([1, 2, 3, 4], n => n >= 3); // [3,4]

everyNth
Returns every nth element in an array.
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]

filterNonUnique

Filters out the non-unique values in an array.
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1,3,5]



dropRight
Returns a new array with n elements removed from the right.
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []

flatten
Flattens an array.
flatten([1, [2], 3, 4]); // [1,2,3,4]

flattenDepth
Flattens an array up to the specified depth.
flattenDepth([1, [2], 3, 4]); // [1,2,3,4]

groupBy
Groups the elements of an array based on the given function.
groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}

head
Returns the head of a list.
head([1, 2, 3]); // 1

initial
Returns all the elements of an array except the last one.
initial([1, 2, 3]); // [1,2]

initialize2DArray
Initializes a 2D array of given width and height and value.
initialize2DArray(2, 2, 0); // [[0,0], [0,0]]

initializeArrayWithRange
Initializes an array containing the numbers in the specified range where start and end are inclusive.
initializeArrayWithRange(5); // [0,1,2,3,4,5]
initializeArrayWithRange(7, 3); // [3,4,5,6,7]
*/

function initialize2DArray(w,h,v) {
	const a=Array.from({length:w},()=>v);
	return Array.from({length:h},()=>Array.from(a))
}

function initializeArrayWithRange(e,s=0){
	return Array.from({length:e+1},(x,i)=>i).slice(s)
}

var fun=(str)=>{
	
	if(str.length<=2) return str.length==2?[str,str[1]+str[0]]:[str];
	return str.split('').reduce((acc,cha,i)=>{return acc.concat(fun(str.slice(0,i)+str.slice(i+1)).map(x=>(cha+x)))},[])
}

console.log(fun("ab"))