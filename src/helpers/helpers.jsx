import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function createNewExperience() {
  return {
    id: crypto.randomUUID(),
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    descriptions: [
      createNewDescription(),
      createNewDescription(),
      createNewDescription(),
    ],
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
    details: [
      createNewDescription(),
      createNewDescription(),
      createNewDescription(),
    ],
  };
}

function createNewAdditionalDescription() {
  return {
    id: crypto.randomUUID(),
    text: "",
    label: "",
  };
}

function createNewAdditionalInfo() {
  return {
    id: crypto.randomUUID(),
    label: "",
    descriptions: [
      createNewDescription(),
      createNewDescription(),
      createNewDescription(),
    ],
  };
}

async function downloadPDF(exportRef, name) {
  const el = exportRef.current;
  if (!el) return;

  const canvas = await html2canvas(el, {
    scale: 2,
    CORS: true,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = 210;
  const pageHeight = 297;

  const imgWidth = pageWidth;
  // ratio of height / width in pixels converted to mm
  // floating point inaccuracy giving height above 297 which
  // results in an additional unneccessary download page
  const imgHeight = (canvas.height / canvas.width) * imgWidth - 0.1;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position -= pageHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    position -= pageHeight;
  }

  pdf.save(`${name || "My_CV"}.pdf`);
}

export {
  createNewExperience,
  createNewDescription,
  createNewEducation,
  createNewAdditionalInfo,
  createNewAdditionalDescription,
  downloadPDF,
};
