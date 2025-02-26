import React, { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ResumeContext } from "../../pages/builder";
const Summary = () => {
  const { resumeData, setResumeData, handleChange } = useContext(ResumeContext);
  const [hidden, setHidden] = useState(false);
  return (
    <div className="flex-col-gap-2 mt-3 mb-1">
      <h2
        className="input-title flex justify-between items-center cursor-pointer border-dotted border-b-[1px]"
        onClick={() => setHidden((prev) => !prev)}
      >
        Summary
        {hidden ? (
          <FaChevronDown className="transition-all duration-700" />
        ) : (
          <FaChevronUp className="transition-all duration-700" />
        )}
      </h2>
      <div
        className={`transition-all duration-700 overflow-hidden ${
          hidden ? "max-h-0 opacity-0" : "max-h-[190px] grid-4 opacity-100"
        }`}
      >
        <textarea
          placeholder="Summary"
          name="summary"
          className="w-full other-input h-40"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default Summary;
