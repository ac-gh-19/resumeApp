import Header from "../components/Header";
import InfoSection from "./InfoSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import CVPreview from "./CVPreview";
import AdditionalInfoSection from "./AdditionalInfoSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import { downloadPDF } from "../helpers/helpers.jsx";
import { useState, useRef } from "react";
import githubIcon from "../assets/githubIcon.svg"
import {
  createNewEducation,
  createNewExperience,
  createNewDescription,
  createNewAdditionalInfo,
} from "../helpers/helpers.jsx";

export default function MainPage() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    location: "",
    summary: "",
  });

  const [experiences, setExperiences] = useState(
    Array.from({ length: 2 }, () => createNewExperience()),
  );

  const [educations, setEducations] = useState(
    Array.from({ length: 1 }, () => createNewEducation()),
  );

  const [skills, setSkills] = useState(
    Array.from({ length: 8 }, () => createNewDescription()),
  );

  const [additionalInfo, setAdditionalInfo] = useState(
    Array.from({ length: 1 }, () => createNewAdditionalInfo()),
  );

  const exportRef = useRef();

  return (
    <>
      <div className="h-screen">
        <div className="fixed bg-[#151515] border-stone-400 border-b top-0 w-full z-1000">
          <Header>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl sm:text-2xl">CV Generator</h1>
                <div className="flex gap-2 sm:gap-5">
                    <button
                        className="border rounded px-2 bg-stone-700"
                        onClick={() => downloadPDF(exportRef, personalInfo.fullName)}
                    >
                        Download PDF
                    </button>
                    <a href="https://github.com/ac-gh-19/resumeApp">
                        <img src={githubIcon}
                        className="w-10 icon">
                        </img>
                    </a>

                </div>
            </div>
          </Header>
        </div>
        <div className="flex flex-wrap mt-13 p-5 gap-5">
          <div className="flex-1 flex flex-col gap-5">
            <InfoSection
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            ></InfoSection>
            <ExperienceSection
              experiences={experiences}
              setExperiences={setExperiences}
            ></ExperienceSection>
            <EducationSection
              educations={educations}
              setEducations={setEducations}
            ></EducationSection>
            <AdditionalInfoSection
              additionalInfo={additionalInfo}
              setAdditionalInfo={setAdditionalInfo}
            ></AdditionalInfoSection>
            <SkillsSection
              skills={skills}
              setSkills={setSkills}
            ></SkillsSection>
          </div>
          <div className="flex-1 min-w-xs">
            <div div className="sticky top-18">
              <div className="overflow-y-auto shadow-stone-500 shadow-lg">
                <CVPreview
                  personalInfo={personalInfo}
                  educations={educations}
                  experiences={experiences}
                  skills={skills}
                  additionalInfo={additionalInfo}
                ></CVPreview>
              </div>
            </div>
          </div>

          <div
            ref={exportRef}
            className="CV-export
            absolute
            left-[-10000px]
            w-[210mm]
            min-h-[297mm]"
          >
            <CVPreview
              personalInfo={personalInfo}
              educations={educations}
              experiences={experiences}
              skills={skills}
              additionalInfo={additionalInfo}
            ></CVPreview>
          </div>
        </div>
      </div>
    </>
  );
}
