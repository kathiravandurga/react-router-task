import { useEffect, useState } from "react";
import Card from "./Card";

export default function Datascience(){
    const[datas,setdatas]=useState([])
    useEffect(()=>{
        fetch( fetch(" http://localhost:5173/data2.json").then((res)=>res.json())
        .then((res1)=>setdatas(res1.data)).catch((err)=>console.log(err))
        )
    },[])
    return(
        <div className="container" style={{marginTop:50,marginRight:0}}>
             <div className="row" >
             <h1>Data science</h1>
          { 
          datas.map((data2,index)=> (
            <div className="card" style={{width: 350, height:390,borderRadius:10,padding:0}}>
            <img src={data2.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h4 className="card-title">{data2.name}</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          ))
          }
        </div>
        </div>
       
    )
}