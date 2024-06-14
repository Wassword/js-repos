
 function outer(){
    let a = "Happy Birthday";
    let b = {name: "Alex", age: 23}
    console.log("value of a:", a);
    console.log("value of b:", b);
      
    function inner(a,b) {
        console.log("value of a:", a);
        console.log("value of b:", b);
         //log before execution
         console.log("value of a and b before inner function execution");

     //Update the inner function 
          a = "Happy Birthday to you too";
          b= {name: "Tabby"}
          console.log("a",a);
          console.log("b",b);

         //update a property of the b
         b.name= 'NewPropertyValue';
        }
          
             //log after inner function execution
             inner(a,b);
             console.log("a",a);
             console.log("b",b);
             console.log("value of a and b before inner function execution");

         }
            
            outer();
  