import Input from "../components/Input";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ExperienceForm from "../components/ExperienceForm";
import Divider from "../components/Divider";

export default function ExperienceSection({ experiences, setExperiences }) {
  function addExperience() {
    const newExperience = {
      id: crypto.randomUUID(),
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      descriptions: [],
    };
    setExperiences((experiences) => [...experiences, newExperience]);
  }

  function addDescription(expId) {
    setExperiences((experiences) =>
      experiences.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              descriptions: [
                ...exp.descriptions,
                { id: crypto.randomUUID(), text: "" },
              ],
            }
          : exp,
      ),
    );
  }

  function updateExperience(updatedExp) {
    setExperiences((experiences) =>
      experiences.map((exp) => (exp.id === updatedExp.id ? updatedExp : exp)),
    );
  }

  return (
    <SectionContainer>
      <SectionHeader
        title="Experience"
        button={true}
        onClick={() => {
          addExperience();
        }}
      ></SectionHeader>
      {experiences.map((exp, index) => (
        <ExperienceForm
          key={exp.id}
          exp={exp}
          index={index}
          onChange={updateExperience}
          addDescription={addDescription}
        >{index !== experiences.length - 1 && <Divider></Divider>}</ExperienceForm>
      ))}
    </SectionContainer>
  );
}
