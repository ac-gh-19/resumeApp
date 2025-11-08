import Input from "../components/Input";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";

export default function InfoSection({ personalInfo, setPersonalInfo }) {
  return (
    <SectionContainer>
      <SectionHeader title="Personal Info"></SectionHeader>
      <div className="grid grid-cols-2 gap-5">
        <Input
        title="Full Name"
          type="text"
          placeholder="Full Name"
          id="fullName"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, fullName: e.target.value });
          }}
          value={personalInfo.fullName}
        ></Input>
        <Input
        title="Job Title"
          type="text"
          placeholder="Job Title"
          id="jobTitle"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, jobTitle: e.target.value });
          }}
          value={personalInfo.jobTitle}
        ></Input>
        <Input
        title="Email"
          type="text"
          placeholder="Email"
          id="email"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, email: e.target.value });
          }}
          value={personalInfo.email}
        ></Input>
        <Input
        title="Phone"
          type="text"
          placeholder="Phone"
          id="phoneNumber"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value });
          }}
          value={personalInfo.phoneNumber}
        ></Input>
        <Input
        title="Location"
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
        title="Brief Summary"
          type="textarea"
          placeholder="Brief Summary"
          id="summary"
          onChange={(e) => {
            setPersonalInfo({ ...personalInfo, summary: e.target.value });
          }}
          value={personalInfo.name}
          style={{ gridColumn: "span 2" }}
        ></Input>
      </div>
    </SectionContainer>
  );
}
