export default function Header({ title = "Title" }) {
  return (
    <header className="px-6 py-3 border-b bg-[#151515]">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
