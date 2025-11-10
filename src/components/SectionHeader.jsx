import Divider from "./Divider";

export default function SectionHeader({ title, button = false, onClick }) {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">{title}</h1>
        {button ? (
          <button
            className="border rounded-md px-3 border-stone-300 bg-stone-700"
            onClick={() => onClick()}
          >
            Add {title}
          </button>
        ) : (
          ""
        )}
      </div>
      <Divider bottom="mb-5"></Divider>
    </>
  );
}
