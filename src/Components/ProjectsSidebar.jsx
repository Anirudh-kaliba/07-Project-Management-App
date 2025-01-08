import React from "react";

const ProjectsSidebar = ({
  projects,
  onSelectProject,
  selectedProjectId,
  onStartAddProject,
}) => {
  return (
    <aside className="w-64 border-r border-stone-300 p-4 overflow-y-auto bg-black text-white">
      {/* Your Projects Heading */}
      <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>

      {/* Add New Project Button */}
      <button
        className="mb-4 p-2 w-full bg-stone-700 text-white hover:bg-stone-600 rounded-md"
        onClick={onStartAddProject}
      >
        Add New Project
      </button>

      {/* Projects List */}
      {projects.length === 0 ? (
        <p className="text-stone-500 text-sm">No projects available</p>
      ) : (
        <ul>
          {projects.map((project) => {
            const isSelected = project.id === selectedProjectId;
            const buttonClasses = `w-full text-left px-4 py-2 rounded-md ${
              isSelected
                ? "bg-stone-800 text-stone-200"
                : "text-stone-400 hover:bg-stone-800 hover:text-stone-200"
            }`;

            return (
              <li key={project.id} className="mb-2">
                <button
                  className={buttonClasses}
                  onClick={() => onSelectProject(project.id)}
                  aria-selected={isSelected}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
};

export default ProjectsSidebar;
