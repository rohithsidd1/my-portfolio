import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";

const ProjectGrid = () => {
  return (
    <div className="flex w-[92%] flex-col gap-6 pb-[10vh] lg:max-w-[1200px]">
      {devProjects.map((project: ProjectProps, index: number) => (
        <ProjectCard
          key={project.id}
          index={index}
          id={project.id}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          github={project.github}
          demo={project.demo}
          image={project.image}
          available={project.available}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
