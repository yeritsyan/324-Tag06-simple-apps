import React, { useState } from "react";

// Define the props interface for DataRequest component
interface DataRequestProps {
  apiUrl: string;
}

const DataRequest: React.FC<DataRequestProps> = ({ apiUrl }) => {
  const [responseData, setResponseData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Async function to fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setResponseData(JSON.stringify(data, null, 2)); // Pretty print JSON
    } catch (error) {
      setResponseData("Error fetching data");
      console.error("API request failed:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <h3>Data Request Component</h3>
      <button onClick={fetchData} disabled={loading} style={{ padding: "10px", cursor: "pointer" }}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      <textarea
        value={responseData}
        readOnly
        rows={5}
        style={{ width: "100%", marginTop: "10px", padding: "10px", fontFamily: "monospace" }}
      />
    </div>
  );
};

export default DataRequest;