import SectionHeader from "../components/SectionHeader"
import SectionContainer from "../components/SectionContainer"
import useDynamicList from "../hooks/useDynamicList"
import Input from "../components/Input"

export default function AdditionalSection({skills, setSkills}) {
    console.log(skills);
    const {
        addItem: addSkill,
        updateItem: updateSkill,
        deleteItem: deleteSkill,
      } = useDynamicList(skills, setSkills);


    function createNewSkill() {
        return {
            id: crypto.randomUUID(),
            text: "",
        }
    }  

    return (
        <>
            <SectionContainer>
                <SectionHeader
                title="Skills"
                button={true}
                onClick={() => addSkill(createNewSkill)}>
                </SectionHeader>
                {skills.map((skill, index) =>
                    <div className="flex" key={skill.id}>
                        <Input
                        placeholder={`Skill ${index + 1}`}
                        style={{flexGrow: 1}}
                        onChange={(e) => updateSkill({...skill, text: e.target.value})}
                        value={skill.text}>
                        </Input>
                        <button className="px-2" onClick={() => deleteSkill(skill)}>
                            X
                        </button>
                    </div>
                )}

            </SectionContainer>
        </>
    )
}