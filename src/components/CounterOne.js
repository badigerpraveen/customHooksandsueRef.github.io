import React from "react"; 
//import {useState , useEffext} from 'react' ;
import useCounter from "./useCounter";


function CounterOne(){ 
    const [count , increment , decrement , reset] = useCounter() ;

    return(<>
    <div  style={{textAlign:'center'}}> 
    <h2> Counter One : {count} </h2> 
    
    <button onClick={increment}> Increment </button> <br/> 

    <button onClick={decrement}> Decrement </button>  <br/> 
    
    <button onClick={reset}> Reset </button> 
    </div>
    
    </>)
} 

export default CounterOne ;