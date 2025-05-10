import React from "react";
import { BsDownload } from "react-icons/bs";
import resume from "../../assets/Sandeep Mishra- Software Developer.pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      {/* PDF Viewer Section - Simple iframe */}
      <div
        className="pdf-viewer"
        style={{
          marginBottom: "30px",
          height: "800px" // Adjust height as needed
        }}
      >
        <iframe
          src={resume}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Resume Preview"
        >
          <p>
            Your browser does not support PDFs.{" "}
            <a href={resume}>Download the resume</a>.
          </p>
        </iframe>
      </div>

      {/* Download Button Section */}
      <div style={{ textAlign: "center" }}>
        <a
          href={resume}
          download="Sandeep-Mishra-Resume.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            backgroundColor: "#FF0000",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "all 0.3s ease",
            marginTop: "20px",
            ":hover": {
              backgroundColor: "#4CAF50"
            }
          }}
        >
          <BsDownload />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
