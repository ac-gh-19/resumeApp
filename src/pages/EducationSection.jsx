import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Divider from "../components/Divider";
import EducationForm from "../components/EducationForm";
import useDynamicList from "../hooks/useDynamicList";
import { createNewEducation, createNewDescription as createNewDetail } from "../helpers/helpers";

export default function EducationSection({ educations, setEducations }) {
  const {
    addItem: addEducation,
    updateItem: updateEducation,
    deleteItem: deleteEducation,
    addNestedItem: addDetail,
    deleteNestedItem: deleteDetail,
  } = useDynamicList(educations, setEducations);

  return (
    <SectionContainer>
      <SectionHeader
        title="Education"
        button={true}
        onClick={() => addEducation(createNewEducation)}
      ></SectionHeader>
      {educations.map((education, index) => (
        <div key={education.id}>
          <EducationForm
            index={index}
            onChange={updateEducation}
            deleteEducation={deleteEducation}
            addDetail={addDetail}
            education={education}
            deleteDetail={deleteDetail}
            createNewDetail={createNewDetail}
          ></EducationForm>
          {index !== educations.length - 1 && (
            <Divider top="mt-10" bottom="mb-6"></Divider>
          )}
        </div>
      ))}
    </SectionContainer>
  );
}
