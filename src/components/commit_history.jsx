import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CommitHistoryPage = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    // Fetch commits from a GitHub repository (Replace with actual API URL)
    fetch("https://api.github.com/repos/facebook/react/commits")
      .then((response) => response.json())
      .then((data) => setCommits(data.slice(0, 10))) // Show only latest 10 commits
      .catch((error) => console.error("Error fetching commits:", error));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Commit History</a>
        </div>
      </nav>

      {/* Commit History Section */}
      <section className="container my-5">
        <h2 className="text-center">Recent Commits</h2>
        <div className="list-group">
          {commits.length > 0 ? (
            commits.map((commit, index) => (
              <a key={index} href={commit.html_url} className="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer">
                <h5>{commit.commit.message}</h5>
                <p className="mb-1">By: {commit.commit.author.name}</p>
                <small className="text-muted">Date: {new Date(commit.commit.author.date).toLocaleString()}</small>
              </a>
            ))
          ) : (
            <p className="text-center">Loading commits...</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2025 Commit Tracker. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CommitHistoryPage;
