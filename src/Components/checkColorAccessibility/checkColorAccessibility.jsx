import { useState, useEffect } from "react";
import "./checkColorAccessibility.css";

export default function CheckColorAccessibility({ Hex, ContrastText }) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccessibilityData = async () => {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ colors: [Hex, ContrastText] }),
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching the API");
        }

        const data = await response.json();
        setResult(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAccessibilityData();
  }, [Hex, ContrastText]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {error ? (
        <div className="error-message">Error: {error}</div>
      ) : result ? (
        <div className="result-container">
          <h3>Accessibility</h3>
          <p>
            <strong>Small Text:</strong> {result.small}
          </p>
          <p>
            <strong>Bold Text:</strong> {result.bold}
          </p>
          <p>
            <strong>Large Text:</strong> {result.large}
          </p>
          <p>
            <strong>Overall Accessibility:</strong> {result.overall}
          </p>
          <p>
            <strong>Contrast Ratio:</strong> {result.contrast}
          </p>
        </div>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
}
