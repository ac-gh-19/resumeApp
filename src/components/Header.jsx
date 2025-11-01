export default function Header({ title = "Title" }) {
  return (
    <header className="sticky top-0 px-6 py-3 border-b bg-[#151515]">
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
}
