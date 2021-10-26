console.log('Here is : ', 'array');
/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

//first array
let x1=[1,7,9,45];
//second array
let x2= ["Str","alex","moh"];
//third array
let x3=['the','fox','over','lazy','dog'];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
6
*/
//index of Banana is 1
//index of Tomato is 0
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let favFood=["Mansaf","shawarma","Burger","Pizza","Pasta"];
let favSport=["Football","BasketBall","Swimming"];
let favMovie=["Leon the professional","Mission Impossible","Rush hour"];
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr){
    return arr[0];
}
// console.log(firstOfArray([1,2,3,4,5]));

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr){
    return arr[arr.length-1];
}
// console.log(lastOfArray(["t","u","g","x"]));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array=[];
array.push(1,3,4,6,8,9,10);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
//push -> add element at end of array
array2.push(10);
//unshift -> add element at the beginning of array
array2.unshift(99);
//shift -> remove first elemet in array
array2.shift();
//pop -> remove last element in array
array2.pop();
// console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr){
    if(arr.length%2==1){
        return arr[(arr.length-1)/2];
    }
    else{
        return `${arr[(arr.length/2)-1]} and ${arr[(arr.length/2)]}`;
    }
}
// console.log(middleOfArray([1,4,5]));
// console.log(middleOfArray(["t","u","g","x"]));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals[3]='zebra';
animals[4]='elephant';
// console.log(animals);
var nums= [1,2,3,8,9];
nums=[5,-22,3.5,44,98,44];
// console.log(nums);
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr,index){
    return arr[index];
}
// var nums= [1,2,3,8,9];
// console.log(indexOfArray(nums,4));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr){
    let newArr=arr.pop();
    console.log(arr);
}
// var nums= [1,2,3,8,9];
// arrayExceptLast(nums);
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr,value){
    arr.push(value)
    console.log(arr);
}
// var nums= [1,2,3,8,9];
// addToEnd(nums,55);

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr){
    let result=0;
    /*
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    */
   let counter=0;
   while(counter!=arr.length){
       result+=arr[counter++];
   }
    return result; 
}
// var nums= [1,2,3,8,9]
// console.log(sumArray(nums));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr){
    let min=arr[0];
    /*
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min)
            min=arr[i];
    }
    */
   let counter=0;
   while(counter!=arr.length){
       if(arr[counter]<min)
            min=arr[counter];
        counter++;
   }
    return min;
}
// var nums= [1,2,3,8,9];
// console.log(minInArray(nums));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr,elem){
    /*
    for(let i=0;i<arr.length;i++){
        if(arr[i]==elem)
        arr.splice(i,1);
    }
    */
   let counter=0;
   while(counter!=arr.length){
    if(arr[counter]==elem)
    arr.splice(counter,1);
       counter++;
   }



    console.log(arr);
}
// var nums= [1,2,3,8,9];
// removeFromArray(nums,8);

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr){
    let odd=[];
    /*
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1)
            odd.push(arr[i]);
    }
    */
   let i=0;
   while(i!=arr.length){
    if(arr[i]%2==1)
    odd.push(arr[i]);
    i++;
   }
    return odd;
}
// var nums= [1,2,3,8,9];
// console.log(oddArray(nums));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr){
    let sum=0;
    /*
    for(let i=0;i<arr.length;i++)
        sum+=arr[i];
    */
   let i=0;
   while(i!=arr.length){
       sum+=arr[i];
       i++;
   }
    return sum/arr.length;
}
// var nums= [1,2,3,8,9];
// console.log(aveArray(nums));
// var nums2= [1,2,3,8,9,77]
// console.log(aveArray(nums2));

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr=[""]){
    let short=arr[0];
    /*
    for(let i=0;i<arr.length;i++){
        if(arr[i].length<short.length)
            short=arr[i];
    }
    */
   let i=0;
   while(i!=arr.length){
    if(arr[i].length<short.length)
    short=arr[i];
       i++;
   }
    return short;
}
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
// console.log(shorterInArray(strings));
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(string="",target=""){
    let result=0;
    /*
    for(let i=0;i<string.length;i++){
        if(string[i]==target)
            result++;
    }
    */
   let i=0;
   while(i!=string.length){
    if(string[i]==target)
        result++;
    i++;
   }
    return result;
}
// var string= "alex mercer madrasa rashed2 emad hala"
// console.log(repeatChar(string,"a"));
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(arr=[""]){
    /*
    for(let i=0;i<arr.length;i++){
        if(i%2==0 && arr[i].length%2==1)
            return arr[i];
    }
    */
   let i=0;
   while(i!=arr.length){
    if(i%2==0 && arr[i].length%2==1)
        return arr[i];
    i++;
   }
    return "nothing";
}
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// console.log(evenIndexOddLength(strings));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(arr=[1]){
    let newArr=arr;
    /*
    for(let i=0;i<newArr.length;i++){
        newArr[i]=Math.pow(newArr[i],i);
    }
    */
   let i=0;
   while(i!=newArr.length){
    newArr[i]=Math.pow(newArr[i],i);
    i++;
   }
    return newArr;
}
// var nums= [44, 5, 4, 3, 2, 10]
// console.log(powerElementIndex(nums));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(arr=[1]){
    let newArr=[];
    /*
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0 && i%2==0)
        newArr.push(arr[i]);
    }
    */
   let i=0;
   while(i!=arr.length){
    if(arr[i]%2==0 && i%2==0)
        newArr.push(arr[i]);
    i++;
   }
    return newArr;
}
// var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// console.log(evenNumberEvenIndex(nums));