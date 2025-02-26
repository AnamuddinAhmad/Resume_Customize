import FormButton from "./FormButton";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React, { useContext, useState } from "react";
import { ResumeContext } from "../../pages/builder";

const Education = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleEducation = (e, index) => {
    const newEducation = [...resumeData.education];
    newEducation[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { school: "", degree: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeEducation = (index) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = newEducation[newEducation.length - 1];
    newEducation.pop();
    setResumeData({ ...resumeData, education: newEducation });
  };

  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex-col-gap-2 mt-2 mb-1">
      <h2
        className="input-title cursor-pointer border-dotted border-b-[1px] flex justify-between items-center"
        onClick={() => setHidden((prev) => !prev)}
      >
        Education
        {hidden ? (
          <FaChevronDown className="transition-all duration-700" />
        ) : (
          <FaChevronUp className="transition-all duration-700" />
        )}
      </h2>
      <div
        className={`transition-all overflow-y-auto duration-700 ${
          hidden ? "max-h-0 opacity-0" : "max-h-[400px] opacity-100"
        }`}
      >
        {resumeData.education.map((education, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder="School"
              name="school"
              className="w-full other-input"
              value={education.school}
              onChange={(e) => handleEducation(e, index)}
            />
            <input
              type="text"
              placeholder="Degree"
              name="degree"
              className="w-full other-input"
              value={education.degree}
              onChange={(e) => handleEducation(e, index)}
            />
            <div className="flex-wrap-gap-2">
              <input
                type="date"
                placeholder="Start Year"
                name="startYear"
                className="other-input"
                value={education.startYear}
                onChange={(e) => handleEducation(e, index)}
              />
              <input
                type="date"
                placeholder="End Year"
                name="endYear"
                className="other-input"
                value={education.endYear}
                onChange={(e) => handleEducation(e, index)}
              />
            </div>
          </div>
        ))}
        <FormButton
          size={resumeData.education.length}
          add={addEducation}
          remove={removeEducation}
        />
      </div>
    </div>
  );
};

export default Education;
