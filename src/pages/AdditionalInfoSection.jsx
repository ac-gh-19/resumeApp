import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import useDynamicList from "../hooks/useDynamicList";
import AdditionalInfoForm from "../components/AdditionalInfoForm";
import { createNewAdditionalDescription as createNewDescription } from "../helpers/helpers";

export default function AdditionalInfoSection({
  additionalInfo,
  setAdditionalInfo,
}) {
  const {
    updateItem: updateAdditional,
    addNestedItem: addDescription,
    deleteNestedItem: deleteDescription,
    handleNestedItemChange: updateDescription,
  } = useDynamicList(additionalInfo, setAdditionalInfo);

  return (
    <SectionContainer>
      <SectionHeader title="Additional Section"></SectionHeader>
      {additionalInfo.map((additional) => (
        <div key={additional.id}>
          <AdditionalInfoForm
            updateAdditional={updateAdditional}
            addDescription={addDescription}
            deleteDescription={deleteDescription}
            additional={additional}
            updateDescription={updateDescription}
            createNewDescription={createNewDescription}
          ></AdditionalInfoForm>
        </div>
      ))}
    </SectionContainer>
  );
}
