import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";
import { useAuth0 } from "@auth0/auth0-react";

const SearchBar = () => {
  const { user, isAuthenticated } = useAuth0();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [recentRepos, setRecentRepos] = useState([]);

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      fetchRecentSearches();
      fetchRecentRepos();
    }
  }, [isAuthenticated, user]);

  const fetchRecentSearches = async () => {
    try {
      const res = await axios.get("http://localhost:5000/search-history", {
        params: { email: user.email },
      });
      setRecentSearches(res.data.history.slice(0, 5));
    } catch (err) {
      console.error("Error fetching recent searches:", err);
    }
  };

  const fetchRecentRepos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/selected-repo-history", {
        params: { email: user.email },
      });
      setRecentRepos(res.data.history.slice(0, 5));
    } catch (err) {
      console.error("Error fetching recent repos:", err);
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await axios.get("http://localhost:5000/search", {
        params: { q: query },
      });

      if (response.data.results?.length > 0) {
        setResults(response.data.results);
      } else {
        setError("No results found.");
      }

      if (isAuthenticated && user?.email) {
        await axios.post("http://localhost:5000/save-search", {
          email: user.email,
          query: query,
        });
        fetchRecentSearches();
      }
    } catch (err) {
      console.error("Error fetching from backend:", err);
      setError("Error fetching results from the server.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectRepo = async (repo) => {
    setSelectedRepo(repo);
    try {
      await axios.post("http://localhost:5000/selected-repo", {
        email: user.email,
        name: repo.name,
        url: repo.url,
        description: repo.description,
        stars: repo.stars,
      });
      fetchRecentRepos();
    } catch (error) {
      console.error("Failed to send selected repo to server:", error);
    }
  };

  return (
    <div className="container mt-5">
      {/* Search Bar */}
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

      {/* Error Message */}
      {error && <p className="error-message text-center">{error}</p>}

      {/* Recent Searches */}
      {isAuthenticated && (
        <div className="history-container text-center mt-4">
          <h5>Recent Searches</h5>
          {recentSearches.length > 0 ? (
            <ul className="list-unstyled">
              {recentSearches.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setQuery(item.query)}
                  style={{ cursor: "pointer" }}
                >
                  🔍 {item.query}{" "}
                  <small className="text-muted">
                    ({new Date(item.timestamp).toLocaleString()})
                  </small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent searches.</p>
          )}
        </div>
      )}

      {/* Search Results */}
      <div className="search-results-container mt-4">
        {results.length > 0 ? (
          <ul className="search-results-list">
            {results.map((repo, index) => (
              <li
                key={index}
                className="repo-item"
                onClick={() => handleSelectRepo(repo)}
                style={{ cursor: "pointer" }}
              >
                <div className="repo-link">{repo.name}</div>
                <p>{repo.description}</p>
                <p>⭐ {repo.stars} stars</p>
              </li>
            ))}
          </ul>
        ) : (
          !isLoading && query && <p>No results found for "{query}".</p>
        )}
      </div>

      {/* Recent Repos Visited */}
      {isAuthenticated && (
        <div className="recent-repos-container mt-4 text-center">
          <h5>Recent Repos Visited</h5>
          {recentRepos.length > 0 ? (
            <ul className="list-unstyled">
              {recentRepos.map((item, index) => (
                <li key={index}>
                  <a href={item.repo.url} target="_blank" rel="noopener noreferrer">
                    {item.repo.name}
                  </a>{" "}
                  <small className="text-muted">
                    ({new Date(item.timestamp).toLocaleString()})
                  </small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent repos visited.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
