/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
 function larger(x,y){
     if(x>y) console.log(`${x} is larger`);
     else if(x<y) console.log(`${y} is larger`);
     else console.log(`${x} and ${y} are equal`);
 }
//  larger(1,3)

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  function sign(x,y,z){
      if(x*y*z<0)
        alert("The sign is -")
    else
        alert("The sign is +");
  }
//   sign(1,-5,-7);


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  function sorting(x,y,z){
      let arr=[x,y,z];
      for(let i=0;i<arr.length;i++){
          for(let j=0;j<arr.length;j++){
              if(arr[i]>arr[j]){
                  let tmp=arr[i];
                  arr[i]=arr[j];
                  arr[j]=tmp;
              }
          }
      }
      console.log(arr);
  }
//   sorting(0,-1,4);


 /******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  function largest_5(a,b,c,d,e){
      let arr=[a,b,c,d,e]
      let max=a;
      for(let i=0;i<arr.length;i++){
          if(arr[i]>max)
            max=arr[i];
      }
      console.log(`Max number is ${max}`);
  }
// largest_5(-5,-2,-6,0,-1);

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  function display(x,y){
      if(x>y)
        alert("Hello world");
    else
        alert("Goodbye");
  }
//   display(10,3);
 /******* End Your Code ********* */



