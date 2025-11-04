import Header from "../components/Header";
import InfoSection from "./InfoSection";
import ExperienceSection from "./ExperienceSection";

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
    </>
  );
}
