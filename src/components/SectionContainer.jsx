export default function SectionContainer({ children }) {
  return (
    <div className="px-6 py-10 flex flex-col gap-3 border rounded-l border-stone-600">
      {children}
    </div>
  );
}
