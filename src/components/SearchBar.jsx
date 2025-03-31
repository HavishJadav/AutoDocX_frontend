import React, { useState } from "react";
import axios from "axios";
import "../styles.css"; // Custom styles

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);  // Reset any previous errors
    try {
      const response = await axios.get("http://localhost:5000/search", {
        params: { q: query },
      });
      console.log("Search Results:", response.data.results);
      setResults(response.data.results);
    } catch (error) {
      console.error("Error searching:", error);
      setError("Error fetching results from the server.");
      setResults([]); // Clear previous results if an error occurs
    } finally {
      setIsLoading(false); // Stop loading state after the request completes
    }
  };

  const handleSelectRepo = async (repo) => {
    setSelectedRepo(repo);
    console.log("Selected Repo:", repo);

    try {
      // Send the selected repo to the backend
      const response = await axios.post("http://localhost:5000/selected-repo", repo);
      console.log("Repo sent to backend:", response.data);
    } catch (error) {
      console.error("Error sending repo to backend:", error);
    }
  };

  return (
    <div className="container mt-5">
      {/* Search Bar Container */}
      <div className="search-bar-container d-flex justify-content-center mb-4">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for repositories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch} disabled={isLoading}>
            {isLoading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && <p className="error-message text-center">{error}</p>}

      {/* Search Results */}
      <div className="search-results-container">
        {results.length > 0 ? (
          <ul className="search-results-list">
            {results.map((repo) => (
              <li key={repo.url} onClick={() => handleSelectRepo(repo)} className="repo-item">
                <a href="#" className="repo-link">{repo.name}</a>
                <p>{repo.description}</p>
                <p>⭐ {repo.stars} stars</p>
              </li>
            ))}
          </ul>
        ) : (
          !isLoading && <p>No results found for "{query}".</p>
        )}
      </div>

      {/* Display selected repository details */}
      {selectedRepo && (
        <div className="selected-repo mt-5 text-center">
          <h3>Selected Repository</h3>
          <a href={selectedRepo.url} target="_blank" rel="noopener noreferrer" className="repo-link">
            {selectedRepo.name}
          </a>
          <p>{selectedRepo.description}</p>
          <p>⭐ {selectedRepo.stars} stars</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
