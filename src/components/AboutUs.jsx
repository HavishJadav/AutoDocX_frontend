import "bootstrap/dist/css/bootstrap.min.css";




import React from "react";
import { Link } from "react-router-dom";




export default function AboutUs() {
  return (
    <div className="container mt-5">
      {/* Title Section */}
      <h1 className="text-center fw-bold mb-4">About AutoDocX</h1>
      
      {/* Description Section */}
      <p className="lead text-center text-muted">
        AutoDocX is an innovative **Software Engineering tool** that automates documentation generation 
        for GitHub repositories. It simplifies the process of understanding large codebases by adding 
        meaningful comments and creating structured documentation effortlessly.
      </p>

      {/* Features Section */}
      <div className="mt-5">
        <h3 className="fw-bold">🔹 Key Features</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">📌 **Automatic Code Commenting** – Analyzes and generates insightful comments for each function & class.</li>
          <li className="list-group-item">📌 **Comprehensive Documentation** – Generates detailed API and module documentation.</li>
          <li className="list-group-item">📌 **GitHub Integration** – Directly fetches repositories and processes them.</li>
          <li className="list-group-item">📌 **Customizable Output** – Choose the format of documentation (Markdown, HTML, PDF).</li>
          <li className="list-group-item">📌 **Supports Multiple Languages** – Works with JavaScript, Python, C++, and more.</li>
        </ul>
      </div>

      {/* Technology Stack */}
      <div className="mt-5">
        <h3 className="fw-bold">🛠️ Technology Stack</h3>
        <p>
          AutoDocX is built using **modern web technologies** for scalability and performance:
        </p>
        <ul>
          <li>🌍 **Frontend**: React.js, Bootstrap</li>
          <li>⚙️ **Backend**: Node.js, Express.js</li>
          <li>📄 **Database**: MongoDB</li>
          <li>🔍 **AI/ML**: NLP-based code analysis for intelligent commenting</li>
          <li>📡 **APIs**: GitHub API for repository fetching</li>
        </ul>
      </div>

      {/* Why Choose AutoDocX? */}
      <div className="mt-5">
        <h3 className="fw-bold">🚀 Why Choose AutoDocX?</h3>
        <p>
          Developers often struggle with **poor documentation** and **uncommented codebases**. AutoDocX eliminates 
          these problems by providing **instant, well-structured, and easy-to-read documentation**.  
        </p>
        <ul>
          <li>⚡ **Saves Time** – No need to manually write documentation.</li>
          <li>💡 **Improves Code Readability** – Makes projects easy to understand.</li>
          <li>📚 **Boosts Collaboration** – Team members can quickly grasp the codebase.</li>
          <li>🛠 **Open-Source Friendly** – Helps maintainers manage public repositories.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h3>Ready to Automate Your Documentation?</h3>
        <p>Try AutoDocX today and experience hassle-free documentation generation!</p>
        <a href="#" className="btn btn-primary btn-lg">Get Started</a>
      </div>
    </div>
  );
}
