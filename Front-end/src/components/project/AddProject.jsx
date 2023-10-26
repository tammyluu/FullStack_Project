import { useRef } from "react";
import {useDispatch} from "react-redux";
import { postProjects } from "./projectSlice";
import { status } from "./status";
import { setFormMode } from "./projectSlice";

const  AddProject = ()=>{
    
    const dispatch = useDispatch();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const statusRef = useRef();
    

    const submitHandler = (e)=>{
        e.preventDefault();
        const selectedStatus = []
        for (const option of statusRef.current.options){
            if (option.selected) {
                selectedStatus.push({id: option.value, name: option.textContent})
            }
        }
        const project = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            statusOption: statusRef.current.value
            
        }
        console.log(project);
        dispatch(postProjects(project));
         titleRef.current.value = "";
         descriptionRef.current.value = "";
         startDateRef.current.value = "";
         endDateRef.current.value = "";
         statusRef.current.value = "";
         
         dispatch(setFormMode(""))
    }
    return(
        <>
         <h1>Add a Project</h1>
            <hr />
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Title:</label>
                    <input type="text" className="form-control" required ref={ titleRef}/>
                </div>
                    <label htmlFor="input-group-text" className="form-label">Description:</label>
                    <input type="text" className="form-control" required ref={descriptionRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Date of beginning:</label>
                    <input type="date" className="form-control" required ref={startDateRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Release date:</label>
                    <input type="date" className="form-control" required ref={endDateRef}/>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Status:</label>
                    <select name="status" id="status" className="form-select" required multiple ref={ statusRef}>
                         
                         {status.map(st => <option key={st.id} value={st.id}>{st.name}</option>)} 
                    </select>
                    
                </div>
                <div className="text-end">
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </>
    )

}
export default AddProject;