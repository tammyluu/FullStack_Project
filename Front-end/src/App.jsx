import { useEffect } from 'react';
import Modal from './components/shared/Modal.jsx';
import Navbar from './components/shared/Navbar.jsx';
import ProjetDisplay from './components/project/ProjectDiplay';
import AddProject from './components/project/AddProject';
import EditProject from './components/project/EditProject';
import DeleteProject from './components/project/DeleteProject';
import { fetchProject, setFormMode } from './components/project/projectSlice';
import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const formMode = useSelector(state => state.projects.formMode)
  const projects = useSelector(state => state.projects.projects)
  const filteredProject = useSelector(state => state.projects.filteredProject)
  const dispatch = useDispatch();

  useEffect ( () => {
    dispatch(fetchProject())
  },[])

  return (
    <>
    {formMode === "add" && <Modal onClose={() => dispatch(setFormMode(""))}><AddProject/></Modal>}
      {formMode === "edit" && <Modal onClose={() => dispatch(setFormMode(""))}><EditProject/></Modal>}
      {formMode === "delete" && <Modal onClose={() => dispatch(setFormMode(""))}><DeleteProject/></Modal>}
      <header>
        <Navbar />
      </header>
      <main className='container'>
        <div className='row my-3'>
          <div className='col-10 offset-1 bg-dark rounded text-light p-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h3>ECF ProjectTracker Pro </h3>
           
             
             
            </div>
            <hr />
            <div className='d-flex flex-wrap align-items-center'>
            {
             filteredProject !== null ? <ProjetDisplay key={filteredProject.id} album={filteredProject[0]} /> :
             projects.length === 0 ? (
               <p>There is no projects</p>
             ) : projects.map(project => <ProjetDisplay key={project.id} project={project} />)
            }
            </div> 
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
