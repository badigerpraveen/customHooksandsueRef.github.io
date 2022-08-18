import { useState } from "react"; 
 function useCounter(initialCount= 1 ){
    const [count , setCount] = useState(initialCount);
      const increment = () =>{
        setCount( count + 1 );
    } 

      const decrement = () =>{
        setCount( count - 1 );
    } 

      const reset =  () =>{
        setCount(initialCount) ;
    }  

    return [count , increment , decrement , reset];
 } 
 // console.log(useCounter());

 export default useCounter;