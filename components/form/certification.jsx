import React, { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

const Certification = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const skillType = "certifications";
  const title = "Certifications";

  const handleSkills = (e, index, skillType) => {
    const newSkills = [...resumeData[skillType]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      [skillType]: [...resumeData[skillType], ""],
    });
  };

  const removeSkill = (index) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex-col-gap-2 mt-2 mb-10">
      <h2
        className="input-title overflow-y-auto transition-all duration-700 cursor-pointer flex justify-between items-center border-dotted border-b-[1px]"
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
        className={`transition-all overflow-y-auto duration-700 ${
          hidden ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
        }`}
      >
        {resumeData[skillType].map((skill, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder={title}
              name={title}
              className="w-full other-input"
              value={skill}
              onChange={(e) => handleSkills(e, index, skillType)}
            />
          </div>
        ))}
        <FormButton
          size={resumeData[skillType].length}
          add={addSkill}
          remove={removeSkill}
        />
      </div>
    </div>
  );
};

export default Certification;
