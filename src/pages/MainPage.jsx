import Header from "../components/Header";
import InfoSection from "./InfoSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import CVPreview from "./CVPreview";

import { useState } from "react";

export default function MainPage() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    location: "",
    summary: "",
  });

  const [experiences, setExperiences] = useState([]);

  const [educations, setEducations] = useState([]);

  return (
    <>
      <div className="h-screen">
        <div className="fixed top-0 w-full z-1000">
          <Header title="CV Generator"></Header>
        </div>
        <div className="flex flex-wrap mt-13">
            <div className="flex-1 p-5 pr-2.5 flex flex-col gap-5">
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
            </div>
          <div className="p-5 pl-2.5 flex-1 min-w-sm">
            <div div className="sticky top-18">
              <div className="h-full overflow-y-auto shadow-stone-500 shadow-lg">
                <CVPreview
                  personalInfo={personalInfo}
                  educations={educations}
                  experiences={experiences}
                ></CVPreview>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
