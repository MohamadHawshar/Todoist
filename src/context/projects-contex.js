import React,{createContext,useContext} from 'react';
import { useProjects} from '../hooks';

export const ProjectsContext = createContext();
export const ProjectProvider = ({children}) => {
    const {projects,setProjects}=useProjects();

    return(
        <ProjectsContext.Provider value={{projects,setProjects}}>
            {children}
        </ProjectsContext.Provider>
    );
}

export const useProjectsValue = () => useContext(ProjectsContext);