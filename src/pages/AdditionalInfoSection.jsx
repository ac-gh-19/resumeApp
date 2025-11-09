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
    deleteItem: deleteAdditional,
    addNestedItem: addDescription,
    deleteNestedItem: deleteDescription,
  } = useDynamicList(additionalInfo, setAdditionalInfo);

  return (
    <SectionContainer>
      <SectionHeader title="Additional Section"></SectionHeader>
      {additionalInfo.map((additional, index) => (
        <div key={additional.id}>
          <AdditionalInfoForm
            updateAdditional={updateAdditional}
            deleteAdditional={deleteAdditional}
            addDescription={addDescription}
            deleteDescription={deleteDescription}
            additional={additional}
            createNewDescription={createNewDescription}
            index={index}
          ></AdditionalInfoForm>
        </div>
      ))}
    </SectionContainer>
  );
}
