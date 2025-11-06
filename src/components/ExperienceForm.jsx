import Input from "./Input";

export default function ExperienceForm({
  exp,
  onChange,
  index,
  addDescription,
  deleteExperience,
}) {
  function handleChange(e) {
    const { id, value } = e.target;
    onChange({ ...exp, [id]: value });
  }

  function handleDescriptionChange(e) {
    const { id, value } = e.target;
    const updatedDescriptions = exp.descriptions.map((description) =>
      description.id === id ? { ...description, text: value } : description,
    );
    onChange({ ...exp, descriptions: updatedDescriptions });
  }

  return (
    <>
      <div className="flex justify-between mb-3">
        <h1 className="font-bold">Experience {index + 1}</h1>
        <button
          className="border rounded border-stone-300 px-2 bg-stone-700 text-red"
          onClick={() => deleteExperience(exp)}
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <Input
          title="Job Title"
          type="text"
          placeholder="Job Title"
          id="jobTitle"
          onChange={(e) => handleChange(e)}
          value={exp.jobTitle}
        ></Input>
        <Input
          title="Company"
          type="text"
          placeholder="Company"
          id="company"
          onChange={(e) => handleChange(e)}
          value={exp.company}
        ></Input>
        <div className="flex gap-5 flex-wrap">
          <Input
            title="Start Date"
            type="date"
            placeholder="Start Date"
            id="startDate"
            onChange={(e) => handleChange(e)}
            value={exp.startDate}
            style={{ flexGrow: 1, flexShrink: 1 }}
          ></Input>
          <Input
            title="End Date"
            type="date"
            placeholder="End Date"
            id="endDate"
            onChange={(e) => handleChange(e)}
            value={exp.endDate}
            style={{ flexGrow: 1, flexShrink: 1 }}
          ></Input>
        </div>
        <div className="flex justify-between pt-3">
          <div>Details / Achievements</div>
          <button
            onClick={() => addDescription(exp.id)}
            className="border rounded border-stone-300 px-2 bg-stone-700"
          >
            Add
          </button>
        </div>
        {exp.descriptions.map((description) => (
          <Input
            key={description.id}
            type="text"
            placeholder="Description"
            id={description.id}
            onChange={(e) => handleDescriptionChange(e)}
            value={description.text}
          ></Input>
        ))}
      </div>
    </>
  );
}
