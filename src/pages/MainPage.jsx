import Header from "../components/Header";
import InfoSection from "./InfoSection";

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

  return (
    <>
      <Header title="CV Generator"></Header>
      <InfoSection
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      ></InfoSection>
      {console.log(personalInfo)}
    </>
  );
}
