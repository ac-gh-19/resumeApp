import Input from "./Input";

export default function EducationForm({
  onChange,
  deleteEducation,
  deleteDetail,
  addDetail,
  education,
  index,
  createNewDetail,
  updateDetail,
}) {
  return (
    <>
      <div className="flex justify-between mb-3">
        <h1 className="font-semibold">Education {index + 1}</h1>
        <button
          onClick={() => deleteEducation(education)}
          className="border rounded border-stone-400 px-2 bg-stone-700 text-red"
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <Input
          type="text"
          value={education.school}
          placeholder="School"
          onChange={(e) =>
            onChange({ ...education, ["school"]: e.target.value }, education.id)
          }
          title="School"
          id={`${education.id}-school`}
        ></Input>
        <Input
          type="text"
          value={education.degree}
          placeholder="Degree"
          onChange={(e) =>
            onChange({ ...education, ["degree"]: e.target.value }, education.id)
          }
          title="Degree"
          id={`${education.id}-degree`}
        ></Input>
        <div className="flex flex-wrap justify-between gap-5">
          <Input
            type="date"
            value={education.startDate}
            onChange={(e) =>
              onChange(
                { ...education, ["startDate"]: e.target.value },
                education.id,
              )
            }
            title="Start Date"
            id={`${education.id}-startDate`}
            style={{ flexGrow: 1, flexShrink: 1 }}
          ></Input>
          <Input
            type="date"
            value={education.endDate}
            onChange={(e) =>
              onChange(
                { ...education, ["endDate"]: e.target.value },
                education.id,
              )
            }
            title="End Date"
            id={`${education.id}-endDate`}
            style={{ flexGrow: 1, flexShrink: 1 }}
          ></Input>
        </div>
        <div className="flex justify-between pt-3">
          <div>Details</div>
          <button
            onClick={() => addDetail(education.id, "details", createNewDetail)}
            className="border rounded border-stone-400 px-2 bg-stone-700"
          >
            Add
          </button>
        </div>
        {education.details.map((detail) => (
          <div className="flex" key={detail.id}>
            <button
              onClick={() => deleteDetail(education.id, "details", detail.id)}
              className="pr-3"
            >
              X
            </button>
            <Input
              type="text"
              placeholder="Detail"
              id={detail.id}
              onChange={(e) =>
                updateDetail(
                  education,
                  "details",
                  detail.id,
                  e.target.value,
                  "text",
                )
              }
              value={detail.text}
              style={{ flexGrow: 1 }}
            ></Input>
          </div>
        ))}
      </div>
    </>
  );
}
