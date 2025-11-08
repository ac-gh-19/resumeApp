import Input from "./Input";

export default function EducationForm({
  onChange,
  deleteEducation,
  deleteDetail,
  addDetail,
  education,
  index,
  createNewDetail,
}) {
  function handleChange(e) {
    const { value, id } = e.target;
    onChange({ ...education, [id]: value });
  }

  function handleDetailChange(e) {
    const { value, id } = e.target;
    const newDetails = education.details.map((detail) =>
      detail.id === id ? { ...detail, text: value } : detail,
    );
    onChange({ ...education, details: newDetails });
  }

  return (
    <>
      <div className="flex justify-between mb-3">
        <h1 className="font-semibold">Education {index + 1}</h1>
        <button
          onClick={() => deleteEducation(education)}
          className="border rounded border-stone-300 px-2 bg-stone-700 text-red"
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <Input
          type="text"
          value={education.school}
          placeholder="School"
          onChange={(e) => handleChange(e)}
          title="School"
          id="school"
        ></Input>
        <Input
          type="text"
          value={education.degree}
          placeholder="Degree"
          onChange={(e) => handleChange(e)}
          title="Degree"
          id="degree"
        ></Input>
        <div className="flex flex-wrap justify-between gap-5">
          <Input
            type="date"
            value={education.startDate}
            onChange={(e) => handleChange(e)}
            title="Start Date"
            id="startDate"
            style={{ flexGrow: 1, flexShrink: 1 }}
          ></Input>
          <Input
            type="date"
            value={education.endDate}
            onChange={(e) => handleChange(e)}
            title="End Date"
            id="endDate"
            style={{ flexGrow: 1, flexShrink: 1 }}
          ></Input>
        </div>
        <div className="flex justify-between pt-3">
          <div>Details</div>
          <button
            onClick={() => addDetail(education.id, "details", createNewDetail)}
            className="border rounded border-stone-300 px-2 bg-stone-700"
          >
            Add
          </button>
        </div>
        {education.details.map((detail) => (
          <div className="flex" key={detail.id}>
            <Input
              type="text"
              placeholder="Detail"
              id={detail.id}
              onChange={(e) => handleDetailChange(e)}
              value={detail.text}
              style={{ flexGrow: 1 }}
            ></Input>
            <button
              onClick={() => deleteDetail(education.id, "details", detail.id)}
              className="px-2"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
