import React, { useContext, useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ResumeContext } from "../../pages/builder";
const PersonalInformation = ({}) => {
  const { resumeData, setResumeData, handleProfilePicture, handleChange } =
    useContext(ResumeContext);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.title = resumeData?.name
        ? `${resumeData.name} Resume`
        : `${"Resume Creator"}`;
    }
  }, [resumeData?.name]);
  
  return (
    <div className="flex flex-col gap-2 transition-all duration-700">
      <h2
        className="input-title border-b-[1px] border-dotted mt-2 mb-1 cursor-pointer flex justify-between items-center"
        onClick={() => setHidden((prev) => !prev)}
      >
        Personal Information
        <span className="transition-all duration-500">
          {hidden ? <FaChevronDown /> : <FaChevronUp />}
        </span>
      </h2>

      <div
        className={`overflow-hidden grid-4 transition-all duration-700 ${
          hidden ? "max-h-0 opacity-0" : "max-h-[180px] opacity-100"
        }`}
      >
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="pi"
          value={resumeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          name="position"
          className="pi"
          value={resumeData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Contact Information"
          name="contactInformation"
          className="pi"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength="10"
          maxLength="15"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="pi"
          value={resumeData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="pi"
          value={resumeData.address}
          onChange={handleChange}
        />
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="profileInput"
          onChange={handleProfilePicture}
          placeholder="Profile Picture"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
