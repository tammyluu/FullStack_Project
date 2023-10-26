import { useDispatch, useSelector } from "react-redux"
import { setFormMode,  setSelectedProject } from "./projectSlice" 


 const ProjetDisplay =(props)=>{

    const project = props.project
    const dispatch = useDispatch()
    
    const formMode = useSelector(state=>state.projects.formMode)

    const editProjectHandler = () => {
      
        dispatch( setSelectedProject(project))
        dispatch(setFormMode("edit"))
    }
    const deleteProjectHandler = () => {
       
        dispatch( setSelectedProject(project))
        dispatch(setFormMode("delete"))
        console.log(formMode);
    }
   
    

        return (
            <>
            <div className="col-3 bg-dark rounded border border-secondary text-light p-2">
                <h5 className="card-title text-center"><strong>{project.title}</strong></h5>
                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Title : <strong>{project.title}</strong></li>
                    <li className="list-group-item">Description: {project.description} </li>
                    <li className="list-group-item">Date of beginning: {project.startDate} </li>
                    <li className="list-group-item">Release date : {project.endDate}</li>
                    <li className="list-group-item">Status: {project.status} </li>
                </ul>
                
                
                    <div className="text-end">
                        <button className="btn btn-warning" onClick={() => editProjectHandler()}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteProjectHandler()}>Delete</button>
                       
                    </div>
                
                
            </div>

            </>
        )
 }
 export default ProjetDisplay;