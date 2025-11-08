import Input from "../components/Input";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import ExperienceForm from "../components/ExperienceForm";
import Divider from "../components/Divider";
import useDynamicList from "../hooks/useDynamicList";

export default function ExperienceSection({ experiences, setExperiences }) {
  const {
    addItem: addExperience,
    updateItem: updateExperience,
    deleteItem: deleteExperience,
    addNestedItem: addDescription,
    deleteNestedItem: deleteDescription,
  } = useDynamicList(experiences, setExperiences);

  function createNewExperience() {
    return {
      id: crypto.randomUUID(),
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      descriptions: [createNewDescription(), createNewDescription()],
    };
  }

  function createNewDescription() {
    return {
      id: crypto.randomUUID(),
      text: "",
    };
  }

  return (
    <SectionContainer>
      <SectionHeader
        title="Experience"
        button={true}
        onClick={() => {
          addExperience(createNewExperience);
        }}
      ></SectionHeader>
      {experiences.map((exp, index) => (
        <div key={exp.id}>
          <ExperienceForm
            exp={exp}
            index={index}
            onChange={updateExperience}
            deleteExperience={deleteExperience}
            addDescription={addDescription}
            deleteDescription={deleteDescription}
            createNewDescription={createNewDescription}
          ></ExperienceForm>
          {index !== experiences.length - 1 && (
            <Divider top="mt-10" bottom="mb-6"></Divider>
          )}
        </div>
      ))}
    </SectionContainer>
  );
}
