import FormButton from "./FormButton";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React, { useContext, useState } from "react";
import { ResumeContext } from "../../pages/builder";

const SocialMedia = () => {
  const [hidden, setHidden] = useState(false);
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // social media
  const handleSocialMedia = (e, index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index][e.target.name] = e.target.value.replace(
      "https://",
      ""
    );
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
    newSocialMedia.pop();
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  return (
    <div className="flex-col gap-2 transition-all duration-700">
      <h2
        className="input-title border-b-[1px] border-dotted mt-2 mb-1 cursor-pointer flex justify-between items-center"
        onClick={() => setHidden((prev) => !prev)}
      >
        Social Media
        {hidden ? (
          <FaChevronDown className="transition-all duration-500" />
        ) : (
          <FaChevronUp className="transition-all duration-500" />
        )}
      </h2>

      <div
        className={`overflow-y-auto transition-all duration-700 ${
          hidden ? "max-h-[0px] opacity-0" : "max-h-[500px] opacity-100"
        }`}
      >
        {resumeData.socialMedia.map((socialMedia, index) => (
          <div key={index} className="flex-wrap-gap-2 flex items-center my-2">
            <input
              type="text"
              placeholder="Social Media"
              name="socialMedia"
              className="other-input w-1/3 p-2  rounded"
              value={socialMedia.socialMedia}
              onChange={(e) => handleSocialMedia(e, index)}
            />
            <input
              type="text"
              placeholder="Link"
              name="link"
              className="other-input w-2/3 p-2 rounded"
              value={socialMedia.link}
              onChange={(e) => handleSocialMedia(e, index)}
            />
          </div>
        ))}
        <FormButton
          size={resumeData.socialMedia.length}
          add={addSocialMedia}
          remove={removeSocialMedia}
        />
      </div>
    </div>
  );
};

export default SocialMedia;
