import Input from "./Input";
import Divider from "./Divider";

export default function AdditionalInfoForm({
  updateDescription,
  deleteDescription,
  addDescription,
  additional,
  createNewDescription,
}) {
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
            className="border rounded border-stone-400 px-2 bg-stone-700"
          >
            Add
          </button>
        </div>
        {additional.descriptions.map((description) => (
          <div className="flex-col align-top" key={description.id}>
            <button
              onClick={() =>
                deleteDescription(additional.id, "descriptions", description.id)
              }
              className="px-2"
              style={{
                textAlign: "right",
                transform: "translateY(28px) translateX(-9px)",
              }}
            >
              X
            </button>
            <div className="flex flex-wrap gap-5 ml-5">
              <Input
                type="text"
                placeholder={`Category`}
                value={description.label}
                id={`${description.id}-category`}
                onChange={(e) =>
                  updateDescription(
                    additional,
                    "descriptions",
                    description.id,
                    e.target.value,
                    "label",
                  )
                }
                style={{ flexGrow: 1 }}
                field="category"
              ></Input>
              <Input
                type="text"
                placeholder="Description"
                value={description.text}
                id={description.id}
                onChange={(e) =>
                  updateDescription(
                    additional,
                    "descriptions",
                    description.id,
                    e.target.value,
                    "text",
                  )
                }
                style={{ flexGrow: 10 }}
                field="text"
              ></Input>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
