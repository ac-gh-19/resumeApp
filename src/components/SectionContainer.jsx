export default function SectionContainer({ children }) {
  return (
    <div className="px-6 py-5 flex flex-col gap-3 border rounded-xl border-stone-600">
      {children}
    </div>
  );
}
