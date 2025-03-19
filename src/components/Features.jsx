
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Features() {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-4">Our Features</h1>
      
     
      <div className="mb-4">
        <h3>Automatic Code Commenting</h3>
        <p>
          Our tool analyzes your code and generates insightful comments for each function and class,
          making your code easier to understand and maintain.
        </p>
      </div>

      <div className="mb-4">
        <h3>Comprehensive Documentation</h3>
        <p>
          It generates detailed API and module documentation automatically, ensuring every aspect of your project is covered.
        </p>
      </div>

      <div className="mb-4">
        <h3>GitHub Integration</h3>
        <p>
          Directly fetch your GitHub repositories and process them seamlessly, keeping your documentation up-to-date.
        </p>
      </div>

      <div className="mb-4">
        <h3>Customizable Output</h3>
        <p>
          Choose from multiple formats such as Markdown, HTML, or PDF, so your documentation fits your workflow.
        </p>
      </div>

      <div className="mb-4">
        <h3>Supports Multiple Languages</h3>
        <p>
          Works with JavaScript, Python, C++, and more, making it versatile for various projects.
        </p>
      </div>

    
    </div>
  );
}
