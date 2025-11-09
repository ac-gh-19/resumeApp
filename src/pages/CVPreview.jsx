export default function CVPreview({ personalInfo, experiences, educations, skills }) {
    const DEFAULT_SUMMARY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Curabitur in libero ut volutpat convallis. Morbi facilisis, urna in dapibus blandit, at vehicula elit nibh eu justo.";


  return (
    <div className="p-10 bg-white text-gray-900 font-sans leading-tight tracking-tight text-[0.95rem] shadow-sm">
      <header className="border-b border-gray-400 pb-2 mb-4">
        <h1 className="text-3xl font-bold uppercase tracking-wider text-center">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <h2 className="text-lg font-medium text-center">
          {personalInfo.jobTitle || "Job Title"}
        </h2>
        <p className="text-sm text-center mt-1">
          {[
            personalInfo.email ? personalInfo.email : "xxx123@gmail.com",
            personalInfo.phoneNumber ? personalInfo.phoneNumber : "123-456-7890",
            personalInfo.location ? personalInfo.location : "Riverside, CA",
          ]
            .join("  |  ")}
        </p>
      </header>

        <section className="mb-4">
          <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2">
            Summary
          </h3>
          <p className="text-[0.95rem] leading-snug">{personalInfo.summary ? personalInfo.summary : DEFAULT_SUMMARY}</p>
        </section>
      

      <section className="mb-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2">
          Experience
        </h3>
        {experiences.length > 0 ? (
          experiences.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h4 className="font-semibold text-[1rem]">
                  {exp.jobTitle || "Job Title"}
                </h4>
                <span className="text-xs text-gray-600">
                  {exp.startDate} — {exp.endDate || "Present"}
                </span>
              </div>
              <p className="italic text-[0.9rem] mb-1">
                {exp.company || "Company Name"}
              </p>
              <ul className="list-disc ml-5 space-y-0.5">
                {exp.descriptions.map((desc) => (
                  <li key={desc.id} className="leading-snug">
                    {desc.text}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-sm italic text-gray-500">
            No experience added yet.
          </p>
        )}
      </section>

      <section className="mb-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2">
          Education
        </h3>
        {educations.length > 0 ? (
          educations.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h4 className="font-semibold text-[1rem]">
                  {edu.school || "School Name"}
                </h4>
                <span className="text-xs text-gray-600">
                  {edu.startDate} – {edu.endDate || "Present"}
                </span>
              </div>
              <p className="italic text-[0.9rem]">
                {edu.degree || "Degree / Major"}
              </p>
              <ul className="list-disc ml-5 space-y-0.5">
                {edu.details.map((detail) => (
                  <li key={detail.id} className="leading-snug">
                    {detail.text}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-sm italic text-gray-500">
            No education added yet.
          </p>
        )}
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1 mb-2">
          Skills
        </h3>
        <ul className="grid gap-x-2 gap-y-1" style={{gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))"}}>
            {skills.map((skill) => (
              <li key={skill.id} className="text-[0.9rem] ml-1.5">
                •  {skill.text}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

