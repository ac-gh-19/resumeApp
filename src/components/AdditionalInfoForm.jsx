import Input from "./Input";

export default function AdditionalInfoForm({
  updateAdditional,
  deleteDescription,
  addDescription,
  additional,
  createNewDescription,
}) {
  function handleDescriptionChange(e, key) {
    const { value, id } = e.target;
    const newDescriptions = additional.descriptions.map((description) =>
      description.id === id ? { ...description, [key]: value } : description,
    );
    updateAdditional({ ...additional, descriptions: newDescriptions });
  }
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between pt-3">
          <div>Categories</div>
          <button
            onClick={() =>
              addDescription(
                additional.id,
                "descriptions",
                createNewDescription,
              )
            }
            className="border rounded border-stone-300 px-2 bg-stone-700"
          >
            Add
          </button>
        </div>
        {additional.descriptions.map((description) => (
          <div className="flex gap-5" key={description.id}>
            <Input
              type="text"
              placeholder={`Category`}
              value={description.label}
              id={description.id}
              onChange={(e) => handleDescriptionChange(e, "label")}
              style={{ flexGrow: 1, flexShrink: 10 }}
            ></Input>
            <div className="flex" style={{ flexGrow: 10, flexShrink: 1 }}>
              <Input
                type="text"
                placeholder="Description"
                value={description.text}
                id={description.id}
                onChange={(e) => handleDescriptionChange(e, "text")}
                style={{ flexGrow: 1 }}
              ></Input>
              <button
                onClick={() =>
                  deleteDescription(
                    additional.id,
                    "descriptions",
                    description.id,
                  )
                }
                className="px-2"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
