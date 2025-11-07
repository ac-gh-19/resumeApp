import Header from "../components/Header";
import InfoSection from "./InfoSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

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
      <Header title="CV Generator"></Header>
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
    </>
  );
}
