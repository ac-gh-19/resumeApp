import Input from "../components/Input";

export default function InfoSection({ personalInfo, setPersonalInfo }) {
  return (
    <div className="px-6 py-3 flex flex-col gap-3">
      <h1 className="text-lg font-semibold">Personal Info</h1>
      <div className="grid grid-cols-2 gap-5">
        <Input
          type="text"
          placeholder="Full Name"
          id="fullName"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, fullName: e.target.value });
          }}
          value={personalInfo.fullName}
        ></Input>
        <Input
          type="text"
          placeholder="Job Title"
          id="jobTitle"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, jobTitle: e.target.value });
          }}
          value={personalInfo.jobTitle}
        ></Input>
        <Input
          type="text"
          placeholder="Email"
          id="email"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, email: e.target.value });
          }}
          value={personalInfo.email}
        ></Input>
        <Input
          type="text"
          placeholder="Phone"
          id="phoneNumber"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value });
          }}
          value={personalInfo.phoneNumber}
        ></Input>
        <Input
          type="text"
          placeholder="Location"
          id="location"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, location: e.target.value });
          }}
          value={personalInfo.name}
          style={{ gridColumn: "span 2" }}
        ></Input>
        <Input
          type="textfield"
          placeholder="Brief Summary"
          id="summary"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, summary: e.target.value });
          }}
          value={personalInfo.name}
          style={{ gridColumn: "span 2" }}
        ></Input>
      </div>
    </div>
  );
}
