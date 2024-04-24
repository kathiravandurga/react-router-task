import { useEffect, useState } from "react";
import Card from "./Card";

export default function Fullstack(){
    const[datas,setdata]=useState([])
    useEffect(()=>{
        fetch(" http://localhost:5173/data.json").then((res)=>res.json())
        .then((res1)=>setdata(res1.data)).catch((err)=>console.log(err))
        
    },[])
    return(
        <>
       
        
    
        <div   className="container" style={{marginRight:0,marginTop:50}}>
  <div   className="row">
  
  <h1>Full stack development</h1>
    
          
    { 
       
      datas.map((data,index)=><Card key={index} data={data}/>)

       
        

      }
      
      
      </div>
</div>
                
            
                
                  
    
      
      
      
      
      
      
      
        </>
      
    )
}