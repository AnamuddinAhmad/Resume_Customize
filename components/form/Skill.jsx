import React, { useContext, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

const Skill = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // skills
  const handleSkill = (e, index, title) => {
    const newSkills = [
      ...resumeData.skills.find((skillType) => skillType.title === title)
        .skills,
    ];
    newSkills[index] = e.target.value;
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      ),
    }));
  };

  const addSkill = (title) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills, ""];
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const removeSkill = (title, index) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills];
      newSkills.pop();
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex-col-gap-2 mt-2 mb-1">
      <h2
        className="input-title border-dotted border-b-[1px] transition-all duration-700 flex justify-between items-center cursor-pointer"
        onClick={() => setHidden((prev) => !prev)}
      >
        {title}
        {hidden ? (
          <FaChevronDown className="transition-all duration-700" />
        ) : (
          <FaChevronUp className="transition-all duration-700" />
        )}
      </h2>
      <div
        className={`w-full grid-4 overflow-y-auto transition-all duration-700 ${
          hidden ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        }`}
      >
        {skillType.skills.map((skill, index) => (
          <div key={index} className="w-fit">
            <input
              type="text"
              placeholder={title}
              name={title}
              className="w-full other-input"
              value={skill}
              onChange={(e) => handleSkill(e, index, title)}
            />
          </div>
        ))}
        <FormButton
          size={skillType.skills.length}
          add={() => addSkill(title)}
          remove={() => removeSkill(title)}
        />
      </div>
    </div>
  );
};

export default Skill;
