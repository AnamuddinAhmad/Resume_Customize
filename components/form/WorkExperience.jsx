import FormButton from "./FormButton";
import React, { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ResumeContext } from "../../pages/builder";

const WorkExperience = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleWorkExperience = (e, index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  const addWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        {
          company: "",
          position: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeWorkExperience = (index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
    newworkExperience.pop();
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex-col-gap-2 mt-2 mb-1">
      <h2
        className="input-title flex justify-between items-center cursor-pointer border-dotted border-b-[1px]"
        onClick={() => setHidden((prev) => !prev)}
      >
        Work Experience{" "}
        {hidden ? (
          <FaChevronDown className="transition-all duration-700" />
        ) : (
          <FaChevronUp className="transition-all duration-700" />
        )}
      </h2>
      <div
        className={`transition-all duration-700 overflow-y-auto ${
          hidden ? "opacity-0 max-h-0 " : "max-h-[700px] opacity-100"
        }`}
      >
        {resumeData.workExperience.map((workExperience, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder="Company"
              name="company"
              className="w-full other-input"
              value={workExperience.company}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <input
              type="text"
              placeholder="Job Title"
              name="position"
              className="w-full other-input"
              value={workExperience.position}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              className="w-full other-input h-32"
              value={workExperience.description}
              maxLength="250"
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <textarea
              type="text"
              placeholder="Key Achievements"
              name="keyAchievements"
              className="w-full other-input h-40"
              value={workExperience.keyAchievements}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <div className="flex-wrap-gap-2">
              <input
                type="date"
                placeholder="Start Year"
                name="startYear"
                className="other-input"
                value={workExperience.startYear}
                onChange={(e) => handleWorkExperience(e, index)}
              />
              <input
                type="date"
                placeholder="End Year"
                name="endYear"
                className="other-input"
                value={workExperience.endYear}
                onChange={(e) => handleWorkExperience(e, index)}
              />
            </div>
          </div>
        ))}
        <FormButton
          size={resumeData.workExperience.length}
          add={addWorkExperience}
          remove={removeWorkExperience}
        />
      </div>
    </div>
  );
};

export default WorkExperience;
