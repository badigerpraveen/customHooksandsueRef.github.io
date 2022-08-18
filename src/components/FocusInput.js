import React  from "react"; 
import { useEffect , useRef} from "react"; 


function FocusInput(){ 
  //const inputRef = useRef(null)  
  const inputRef = useRef(null)
 useEffect(()=>{
  inputRef.current.focus()
 },[])

return(<> 
<div style={{textAlign:"center", marginTop:"40px"}}> 
<input  ref={inputRef} type='text'  />
</div>
 
</>)

} 

export default FocusInput ;