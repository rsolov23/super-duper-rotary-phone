import React from "react";
import pdf_url from "../assets/images/resume.pdf";
export const Resume = () => {
  return (
    <div>
      <object
        width="65%"
        height="1000"
        data={pdf_url}
        type="application/pdf"
        aria-label="resume-pdf"
      ></object>
    </div>
  );
};
