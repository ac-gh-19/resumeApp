export default function CVPreview({
  personalInfo,
  experiences,
  educations,
  skills,
  additionalInfo,
}) {
  const DEFAULT_SUMMARY =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Curabitur in libero ut volutpat convallis. Morbi facilisis, urna in dapibus blandit, at vehicula elit nibh eu justo.";
  const DEFAULT_DESCRIPTION =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem facilis itaque officia voluptatibus maiores nemo similique ad ut, dolores repellat.";

  return (
    <div className="p-10 bg-white text-gray-900 font-sans leading-tight tracking-tight text-[0.95rem] shadow-sm">
      <header className="border-b border-gray-400 pb-2">
        <h1 className="text-3xl font-bold uppercase tracking-wider text-center">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <h2 className="text-lg font-medium text-center">
          {personalInfo.jobTitle || "Job Title"}
        </h2>
        <p className="text-sm text-center pt-1">
          {[
            personalInfo.email ? personalInfo.email : "xxx123@gmail.com",
            personalInfo.phoneNumber
              ? personalInfo.phoneNumber
              : "123-456-7890",
            personalInfo.location ? personalInfo.location : "Location, CA",
          ].join("  |  ")}
        </p>
      </header>

      <section className="pt-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1">
          Summary
        </h3>
        <p className="pt-1 text-[0.95rem] leading-snug">
          {personalInfo.summary ? personalInfo.summary : DEFAULT_SUMMARY}
        </p>
      </section>

      <section className="pt-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1">
          Experience
        </h3>
        {experiences.length > 0 ? (
          experiences.map((exp) => (
            <div key={exp.id} className="pt-2">
              <div className="flex justify-between items-baseline">
                <h4 className="font-semibold text-[1rem]">
                  {exp.jobTitle || "Job Title"}
                </h4>
                <span className="text-xs text-gray-600">
                  {exp.startDate} — {exp.endDate || "Present"}
                </span>
              </div>
              <p className="italic text-[0.9rem] pt-1">
                {exp.company || "Company Name"}
              </p>
              <ul className="list-disc pl-5 space-y-0.5">
                {exp.descriptions.map((desc) => (
                  <li key={desc.id} className="leading-snug">
                    {desc.text}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-sm italic text-gray-500 pt-2">
            No experience added yet.
          </p>
        )}
      </section>

      <section className="pt-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1 pt-2">
          Education
        </h3>
        {educations.length > 0 ? (
          educations.map((edu) => (
            <div key={edu.id} className="pt-2">
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
              <ul className="list-disc pl-5 space-y-0.5">
                {edu.details.map((detail) => (
                  <li key={detail.id} className="leading-snug">
                    {detail.text}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-sm italic text-gray-500 pt-2">
            No education added yet.
          </p>
        )}
      </section>

      <section className="pt-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1 pt-4">
          Skills
        </h3>
        {skills.length > 0 ? (
          <ul
            className="grid gap-x-2 gap-y-1 pt-2"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            }}
          >
            {skills.map((skill) => (
              <li key={skill.id} className="text-[0.9rem] pl-2">
                • {skill.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm italic text-gray-500 pt-2">
            No skills added yet.
          </p>
        )}
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-widest border-b border-gray-300 pb-1 pt-2">
          Additional
        </h3>
        {additionalInfo.length > 0
          ? additionalInfo.map((additional) => (
              <ul className="list-disc pl-5 space-y-0.5">
                {additional.descriptions.map((description) => (
                  <li key={description.id} className="leading-snug">
                    <span className="font-semibold">
                      {description.label || "Category"}
                    </span>
                    : {description.text || "description"}
                  </li>
                ))}
              </ul>
            ))
          : null}
      </section>
    </div>
  );
}
