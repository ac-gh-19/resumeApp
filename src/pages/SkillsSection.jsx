import SectionHeader from "../components/SectionHeader";
import SectionContainer from "../components/SectionContainer";
import useDynamicList from "../hooks/useDynamicList";
import Input from "../components/Input";
import { createNewDescription as createNewSkill } from "../helpers/helpers";

export default function AdditionalSection({ skills, setSkills }) {
  const {
    addItem: addSkill,
    updateItem: updateSkill,
    deleteItem: deleteSkill,
  } = useDynamicList(skills, setSkills);

  return (
    <>
      <SectionContainer>
        <SectionHeader
          title="Skills"
          button={true}
          onClick={() => addSkill(createNewSkill)}
        ></SectionHeader>
        <div className="flex flex-wrap gap-5">
          {skills.map((skill, index) => (
            <div className="flex" key={skill.id} style={{ flexGrow: 1 }}>
              <button className="pr-2" onClick={() => deleteSkill(skill)}>
                X
              </button>
              <Input
                placeholder={`Skill ${index + 1}`}
                style={{ flexGrow: 1 }}
                onChange={(e) =>
                  updateSkill({ ...skill, text: e.target.value }, skill.id)
                }
                value={skill.text}
              ></Input>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
