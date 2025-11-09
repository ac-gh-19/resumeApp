  function createNewExperience() {
    return {
      id: crypto.randomUUID(),
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      descriptions: [createNewDescription(), createNewDescription()],
    };
  }

  function createNewDescription() {
    return {
      id: crypto.randomUUID(),
      text: "",
    };
  }

  function createNewEducation() {
    return {
      id: crypto.randomUUID(),
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
      details: [createNewDescription(), createNewDescription()],
    };
  }

  export { createNewExperience, createNewDescription, createNewEducation }