import { useDispatch } from "react-redux";

import { useRef } from "react";
import { setFilteredProjects } from "../project/projectSlice"; 
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
    
    
   
    const dispatch = useDispatch()
    const searchRef = useRef()
    
    const submitHandler = (e) => {
        e.preventDefault()
        const search = searchRef.current.value
        console.log(search);
        dispatch(setFilteredProjects(search))
        searchRef.current.value = ""
    }
    
    


    return ( 
        <>
       
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand"><i className="bi bi-globe"></i> eProjects</span>
                    
                    <form class="form-inline m-4" onSubmit={submitHandler}>
                    <div className="input-group mb-3">

                        <input class="form-control  " type="search" placeholder="Search..." ref={searchRef} aria-label="Search" button />
                        <button class="btn btn-outline-light ms-2 my-2 my-sm-0" type="submit"  >Search</button>

                    </div>

                </form>
                    
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;