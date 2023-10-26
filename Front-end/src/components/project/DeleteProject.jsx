import { useSelector,useDispatch } from "react-redux";
import { deleteProject, setFormMode } from "./projectSlice";

const DeleteProject = () =>{
    const selectedProject = useSelector(state=>state.projects.selectedProject)
    const dispatch = useDispatch();

    const deleteProjectHandler = async (e)=>{
        e.preventDefault()
        
        dispatch(deleteProject(selectedProject.id))
        dispatch(setFormMode(""))
        console.log(selectedProject);
    }
    return (
        <>
        <h1>Delete this Project</h1>
        <hr />
            <form onSubmit={deleteProjectHandler}>
                <div className="mb-3">
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Title:</label>
                    <input type="text" className="form-control" disabled  defaultValue={selectedProject.title}/>
                </div>
                    <label htmlFor="input-group-text" className="form-label">Description:</label>
                    <input type="text" className="form-control" disabled  defaultValue={selectedProject.description}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Date of beginning:</label>
                    <input type="date" className="form-control" disabled  defaultValue={selectedProject.startDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Release date:</label>
                    <input type="date" className="form-control" disabled  defaultValue={selectedProject.endDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Price:</label>
                    <input type="number" className="form-control" disabled  defaultValue={selectedProject.status}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </form>
        </>
    )

}
export default DeleteProject