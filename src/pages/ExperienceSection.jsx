import Input from "../components/Input";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ExperienceForm from "../components/ExperienceForm";
import Divider from "../components/Divider";

export default function ExperienceSection({ experiences, setExperiences }) {
    console.log(experiences);
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

  function deleteExperience(deletedExp) {
    if (experiences.length == 1) return;
    const newExperiences = experiences.filter(
      (exp) => exp.id !== deletedExp.id,
    );
    setExperiences(newExperiences);
  }

  function deleteDescription(expID, descID) {
    setExperiences(experiences.map((experience) => 
        experience.id === expID ? {...experience, descriptions:
            experience.descriptions.filter((description) => 
                description.id != descID
            )
        } : experience
    ))
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
        <div key={exp.id}>
          <ExperienceForm
            exp={exp}
            index={index}
            onChange={updateExperience}
            addDescription={addDescription}
            deleteExperience={deleteExperience}
            deleteDescription={deleteDescription}
          ></ExperienceForm>
          {index !== experiences.length - 1 && (
            <Divider top="mt-10" bottom="mb-6"></Divider>
          )}
        </div>
      ))}
    </SectionContainer>
  );
}
