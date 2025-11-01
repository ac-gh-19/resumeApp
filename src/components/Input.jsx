export default function Input({
  type,
  placeholder,
  onChange,
  value,
  id,
  style,
}) {
  return type === "text" ? (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      id={id}
      className={
        "bg-black px-4 py-1 border rounded-md text-white focus:outline-gray-400"
      }
      style={style}
    ></input>
  ) : (
    <textarea
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      id={id}
      className="bg-black px-4 py-1 border rounded-sm text-white focus:outline-gray-400 min-h-25"
      style={style}
    ></textarea>
  );
}
