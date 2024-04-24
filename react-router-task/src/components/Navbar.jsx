import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div >
            
<nav >
  <div className="navbar" >
    
    <Link to="/">All </Link>
    <Link to="/FULL STACK DEVELOPMENT">FULL STACK DEVELOPMENT </Link>
    <Link to="/DATA SCIENCE">DATA SCIENCE</Link>
    <Link to="/CYBER SECURITY">CYBER SECURITY</Link>
    <Link to="/CAREER">CAREER </Link>
    
    
  </div>
</nav>


        </div>
    )
}