import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Divider from "../components/Divider";
import EducationForm from "../components/EducationForm";

export default function EducationSection({ educations, setEducations }) {
  // degree, school, startdate, enddate
  console.log(educations);
  function addEducation() {
    const newEducation = {
      id: crypto.randomUUID(),
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
    };
    setEducations((educations) => [...educations, newEducation]);
  }

  function updateEducation(updatedEducation) {
    setEducations(
      educations.map((education) =>
        education.id === updatedEducation.id ? updatedEducation : education,
      ),
    );
  }

  function deleteEducation(deletedEducation) {
    if (educations.length === 1) return;
    setEducations(
      educations.filter((education) => education.id != deletedEducation.id),
    );
  }

  return (
    <SectionContainer>
      <SectionHeader
        title="Education"
        button={true}
        onClick={() => addEducation()}
      ></SectionHeader>
      {educations.map((education, index) => (
        <div key={education.id}>
          <EducationForm
            index={index}
            onChange={updateEducation}
            onDelete={deleteEducation}
            education={education}
          ></EducationForm>
          {index !== educations.length - 1 && (
            <Divider top="mt-10" bottom="mb-6"></Divider>
          )}
        </div>
      ))}
    </SectionContainer>
  );
}
