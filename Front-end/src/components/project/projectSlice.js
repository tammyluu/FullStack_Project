import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {status} from './status'


export const fetchProject = createAsyncThunk (
    'projectItem/fetchProject',
    async () => {
        const response = await fetch("http://127.0.0.1:3001/projects")
        const data = await response.json()
        console.log(data.project);
        /* const projects =[]
        for (const key in data) {
            projects.push({id: key, ...data[key]})
        } */
        return data.project;
    }
)
export const postProjects = createAsyncThunk (
    'projectItem/postProjects',
    async (newProject) => {
        
        const response = await fetch("http://127.0.0.1:3001/projects" , {
            method: 'POST',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(newProject)
        })
        const data = await response.json()
        return {
            id: data.title,
          ...newProject
        }
    }
)
export const deleteProject= createAsyncThunk (
    'projectItem/deleteProjects',
    async (project) => {
        
        const response = await fetch(`http://127.0.0.1:3001/${selectedProject.id}` , {
            method: 'DELETE',
            headers: { 'Content-Type': 'application.json' },
        })
       const data = await response.json()
        return  project

    }
)
export const editProject = createAsyncThunk (
    'projectItem/editProjects',
    async (patchProject) => {
        
        const response = await fetch(`http://127.0.0.1:3001/${selectedProject.id}` , {
            method: 'PATCH',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(patchProject)
        })
        const data = await response.json()
        return {
            id: data.title,
            ...patchProject
        }
    }
)
export const filteredProject = createAsyncThunk(
    'projectItem/filtereProject',
    async (filter) => {
       
        const response = await fetch(`http://127.0.0.1:3001/${selectedProject.id}` , {
            method: 'GET',
            headers: { 'Content-Type': 'application.json' },
            body: JSON.stringify(filter)
        })
       const data = await response.json()
        return filter
    }
)
const projectSlice = createSlice({
    name: "projectItem",
    initialState: {
        formMode: "",
        projects: [],
        selectedStatus: null,
        status : [...status],
        selectedProject: null,
        filteredProject : null
    },
    reducers: {
        setFormMode: (state, action) => {
            state.formMode = action.payload
            console.log(action.payload);
        },
         setSelectedProject: (state, action) => {
            state.selectedProject = action.payload
        },
        setFilteredProjects: (state, action) => { 
            state.projects = state.projects.filter(project => project.title.toLowerCase().includes(action.payload))
            console.log(state.filteredProject);
        }
       
    
        

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProject.fulfilled, (state, action) => {
            state.projects = action.payload
            console.log(state.projects)
        })
        builder.addCase(postProjects.fulfilled, (state, action) => {
            state.projects.push(action.payload)
            console.log(action.payload);
        })
        builder.addCase(editProject.fulfilled, (state, action) => {
           let foundProject = state.projects.find(project => project.id === action.payload.id)
            if(foundProject){
                state.projects = [...state.projects.filter(project => project.id!== action.payload.id), action.payload]
            }
        })

        builder.addCase(deleteProject.fulfilled, (state, action) => {
           
            let foundProject = state.projects.find(project => project.id === action.payload)
            console.log(action.payload);
            if (foundProject) {
                state.projects = state.projects.filter(project => project.id!== action.payload)
                console.log(foundProject)
            }
        })
       
    }
})
export default projectSlice.reducer
export const { setFormMode , setSelectedProject, selectedProject,  setFilteredProjects} = projectSlice.actions