import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {
  const[projectsState , setProjectsState] = useState({
    selectedProjectId : undefined,   // when project is not selected nor added
    projects: []
  })

  function handleStartAddProject ()
  {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId : null,
      };
    })
  }

  function handleAddproject (projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
      ...projectData,
      id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId : undefined,
        projects: [...prevState.projects, newProject ]
      }
    })
  }


  let content;

  if(projectsState.selectedProjectId === null)
  {
    content = <NewProject onAdd={handleAddproject}/>
  }

  else if(projectsState.selectedProjectId === undefined)
  {
    content = <NoProjectSelected  onStartAddProject = {handleStartAddProject}/>
  }
  return (
      <main className="h-screen my-8  flex gap-8 ">
      <ProjectsSidebar  onStartAddProject = {handleStartAddProject} 
      projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
