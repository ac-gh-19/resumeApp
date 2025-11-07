export default function Input({
  title,
  type,
  placeholder,
  onChange,
  value,
  id,
  style,
}) {
  return type != "textarea" ? (
    <label className="flex flex-col gap-1 font-medium" style={style}>
      {title}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id={id}
        className={
          "bg-black border-stone-600 px-4 py-1 border rounded-md text-white font-normal focus:outline-stone-500"
        }
      ></input>
    </label>
  ) : (
    <label className="flex flex-col gap-1 font-medium" style={style}>
      {title}
      <textarea
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id={id}
        className="bg-black border-stone-600 px-4 py-1 border rounded-sm text-white focus:outline-stone-500 "
        style={style}
      ></textarea>
    </label>
  );
}
