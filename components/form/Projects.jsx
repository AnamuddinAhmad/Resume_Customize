import FormButton from "./FormButton";
import React, { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ResumeContext } from "../../pages/builder";

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = newProjects[newProjects.length - 1];
    newProjects.pop();
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex-col-gap-2 mt-2 mb-1 ">
      <h2
        className="input-title cursor-pointer border-dotted border-b-[1px] transition-all duration-700 flex justify-between items-center "
        onClick={() => setHidden((prev) => !prev)}
      >
        Projects{" "}
        {hidden ? (
          <FaChevronDown className="transition-all duration-700" />
        ) : (
          <FaChevronUp className="transition-all duration-700" />
        )}
      </h2>
      <div
        className={`transition-all duration-700 overflow-y-auto ${
          hidden ? "opacity-0 max-h-0" : " opacity-100 max-h-[500px]"
        }`}
      >
        {resumeData.projects.map((project, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder="Project Name"
              name="name"
              className="w-full other-input"
              value={project.name}
              onChange={(e) => handleProjects(e, index)}
            />
            <input
              type="text"
              placeholder="Link"
              name="link"
              className="w-full other-input"
              value={project.link}
              onChange={(e) => handleProjects(e, index)}
            />
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              className="w-full other-input h-32"
              value={project.description}
              maxLength="250"
              onChange={(e) => handleProjects(e, index)}
            />
            <textarea
              type="text"
              placeholder="Key Achievements"
              name="keyAchievements"
              className="w-full other-input h-40"
              value={project.keyAchievements}
              onChange={(e) => handleProjects(e, index)}
            />
            <div className="flex-wrap-gap-2">
              <input
                type="date"
                placeholder="Start Year"
                name="startYear"
                className="other-input"
                value={project.startYear}
                onChange={(e) => handleProjects(e, index)}
              />
              <input
                type="date"
                placeholder="End Year"
                name="endYear"
                className="other-input"
                value={project.endYear}
                onChange={(e) => handleProjects(e, index)}
              />
            </div>
          </div>
        ))}
        <FormButton
          size={resumeData.projects.length}
          add={addProjects}
          remove={removeProjects}
        />
      </div>
    </div>
  );
};

export default Projects;
